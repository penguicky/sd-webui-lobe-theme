/**
 * Virtual List Component for Large Lists
 * Optimized for single-column lists with variable or fixed item heights
 */

import { createStyles } from 'antd-style';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface VirtualListProps<T> {
  className?: string;
  containerHeight: number;
  estimatedItemHeight?: number;
  getItemKey?: (item: T, index: number) => string | number;
  itemHeight: number | ((item: T, index: number) => number);
  items: T[];
  onScroll?: (scrollTop: number) => void;
  overscan?: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}

const useStyles = createStyles(({ css }) => ({
  container: css`
    position: relative;
    overflow: auto;
    will-change: scroll-position;
    
    /* Smooth scrolling performance */
    scroll-behavior: smooth;
    
    /* Hardware acceleration */
    transform: translateZ(0);
    
    /* Optimize for scrolling */
    -webkit-overflow-scrolling: touch;
  `,
  item: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    
    /* Optimize rendering */
    contain: layout style paint;
  `,
  viewport: css`
    position: relative;
    overflow: hidden;
  `,
}));

function VirtualList<T>({
  items,
  itemHeight,
  containerHeight,
  overscan = 5,
  renderItem,
  getItemKey,
  onScroll,
  className,
}: VirtualListProps<T>) {
  const { styles, cx } = useStyles();
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemHeightsRef = useRef<Map<number, number>>(new Map());

  // Calculate item heights
  const getItemHeight = useCallback((item: T, index: number): number => {
    if (typeof itemHeight === 'number') {
      return itemHeight;
    }
    
    // Check cache first
    const cached = itemHeightsRef.current.get(index);
    if (cached !== undefined) {
      return cached;
    }
    
    // Calculate and cache
    const height = itemHeight(item, index);
    itemHeightsRef.current.set(index, height);
    return height;
  }, [itemHeight]);

  // Calculate positions and total height
  const { itemPositions, totalHeight } = useMemo(() => {
    const positions: number[] = [];
    let currentTop = 0;

    for (const [i, item] of items.entries()) {
      positions[i] = currentTop;
      const height = getItemHeight(item, i);
      currentTop += height;
    }

    return {
      itemPositions: positions,
      totalHeight: currentTop,
    };
  }, [items, getItemHeight]);

  // Binary search to find start index
  const findStartIndex = useCallback((scrollTop: number): number => {
    let low = 0;
    let high = itemPositions.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const position = itemPositions[mid];

      if (position === scrollTop) {
        return mid;
      } else if (position !== undefined && position < scrollTop) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return Math.max(0, high);
  }, [itemPositions]);

  // Calculate visible range
  const { startIndex, endIndex, visibleItems } = useMemo(() => {
    const start = findStartIndex(scrollTop);
    let end = start;
    let currentHeight = 0;

    // Find end index
    for (let i = start; i < items.length; i++) {
      const item = items[i];
      if (!item) continue;
      const itemHeight = getItemHeight(item, i);
      currentHeight += itemHeight;
      
      if (currentHeight >= containerHeight) {
        end = i + 1;
        break;
      }
      end = i + 1;
    }

    // Apply overscan
    const actualStart = Math.max(0, start - overscan);
    const actualEnd = Math.min(items.length, end + overscan);

    const visible = items.slice(actualStart, actualEnd).map((item, relativeIndex) => ({
      height: getItemHeight(item, actualStart + relativeIndex),
      index: actualStart + relativeIndex,
      item,
      top: itemPositions[actualStart + relativeIndex],
    }));

    return {
      endIndex: actualEnd,
      startIndex: actualStart,
      visibleItems: visible,
    };
  }, [scrollTop, containerHeight, findStartIndex, items, getItemHeight, itemPositions, overscan]);

  // Handle scroll events with throttling
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const newScrollTop = event.currentTarget.scrollTop;
    setScrollTop(newScrollTop);
    onScroll?.(newScrollTop);
  }, [onScroll]);

  // Scroll to specific item
  const scrollToItem = useCallback((index: number, align: 'start' | 'center' | 'end' = 'start') => {
    if (!containerRef.current || index < 0 || index >= items.length) return;

    const itemTop = itemPositions[index];
    const item = items[index];
    if (itemTop === undefined || !item) return;
    const itemHeight = getItemHeight(item, index);
    
    let targetScrollTop = itemTop;
    
    if (align === 'center') {
      targetScrollTop = itemTop - (containerHeight - itemHeight) / 2;
    } else if (align === 'end') {
      targetScrollTop = itemTop - containerHeight + itemHeight;
    }
    
    // Clamp to valid range
    targetScrollTop = Math.max(0, Math.min(totalHeight - containerHeight, targetScrollTop));
    
    containerRef.current.scrollTop = targetScrollTop;
  }, [itemPositions, getItemHeight, items, containerHeight, totalHeight]);

  // Expose methods via ref
  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as any).scrollToItem = scrollToItem;
      (containerRef.current as any).getVisibleRange = () => ({ endIndex, startIndex });
    }
  }, [scrollToItem, startIndex, endIndex]);

  return (
    <div
      className={cx(styles.container, className)}
      onScroll={handleScroll}
      ref={containerRef}
      style={{
        height: containerHeight,
      }}
    >
      <div
        className={styles.viewport}
        style={{
          height: totalHeight,
          position: 'relative',
        }}
      >
        {visibleItems.map(({ item, index, top, height }) => (
          <div
            className={styles.item}
            key={getItemKey ? getItemKey(item, index) : index}
            style={{
              height,
              top,
            }}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(VirtualList) as typeof VirtualList;

// Hook for measuring item heights dynamically
export const useItemHeightMeasurement = <T,>() => {
  const [measuredHeights, setMeasuredHeights] = useState<Map<number, number>>(new Map());

  const measureItem = useCallback((index: number, element: HTMLElement) => {
    const height = element.getBoundingClientRect().height;
    setMeasuredHeights(prev => new Map(prev).set(index, height));
  }, []);

  const getItemHeight = useCallback((_item: T, index: number): number => {
    return measuredHeights.get(index) || 50; // Default height
  }, [measuredHeights]);

  return {
    getItemHeight,
    measureItem,
    measuredHeights,
  };
};

// Performance monitoring for virtual lists
export const useVirtualListMetrics = () => {
  const [metrics, setMetrics] = useState({
    lastUpdate: Date.now(),
    renderTime: 0,
    scrollTop: 0,
    totalItems: 0,
    visibleItems: 0,
  });

  const updateMetrics = useCallback((
    visibleItems: number,
    totalItems: number,
    scrollTop: number
  ) => {
    const now = Date.now();
    setMetrics(prev => ({
      lastUpdate: now,
      renderTime: now - prev.lastUpdate,
      scrollTop,
      totalItems,
      visibleItems,
    }));
  }, []);

  return { metrics, updateMetrics };
};

export type { VirtualListProps };
