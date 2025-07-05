/**
 * Virtual Grid Component for Large Lists
 * Implements windowing/virtualization to handle thousands of items efficiently
 */

import { createStyles } from 'antd-style';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface VirtualGridProps<T> {
  className?: string;
  containerHeight: number;
  containerWidth: number;
  gap?: number;
  getItemKey?: (item: T, index: number) => string | number;
  itemHeight: number;
  itemWidth: number;
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
  `,
  item: css`
    position: absolute;
    top: 0;
    left: 0;
  `,
  viewport: css`
    position: relative;
    overflow: hidden;
  `,
}));

function VirtualGrid<T>({
  items,
  itemHeight,
  itemWidth,
  containerHeight,
  containerWidth,
  gap = 0,
  overscan = 5,
  renderItem,
  getItemKey,
  onScroll,
  className,
}: VirtualGridProps<T>) {
  const { styles, cx } = useStyles();
  const [scrollTop, setScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Calculate grid dimensions
  const { columnsPerRow, totalRows, totalHeight } = useMemo(() => {
    const availableWidth = containerWidth - gap;
    const itemWidthWithGap = itemWidth + gap;
    const cols = Math.floor(availableWidth / itemWidthWithGap);
    const rows = Math.ceil(items.length / cols);
    const height = rows * (itemHeight + gap) - gap;

    return {
      columnsPerRow: Math.max(1, cols),
      totalHeight: height,
      totalRows: rows,
    };
  }, [containerWidth, itemWidth, itemHeight, gap, items.length]);

  // Calculate visible range
  const { visibleItems } = useMemo(() => {
    const itemHeightWithGap = itemHeight + gap;
    const start = Math.floor(scrollTop / itemHeightWithGap);
    const visibleRowCount = Math.ceil(containerHeight / itemHeightWithGap);
    const end = Math.min(totalRows, start + visibleRowCount + overscan);
    const actualStart = Math.max(0, start - overscan);

    const visible: Array<{ col: number, index: number; item: T; row: number; }> = [];
    
    for (let row = actualStart; row < end; row++) {
      for (let col = 0; col < columnsPerRow; col++) {
        const index = row * columnsPerRow + col;
        if (index < items.length && items[index] !== undefined) {
          visible.push({
            col,
            index,
            item: items[index],
            row,
          });
        }
      }
    }

    return {
      visibleItems: visible,
    };
  }, [scrollTop, containerHeight, itemHeight, gap, overscan, totalRows, columnsPerRow, items]);

  // Handle scroll events
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const newScrollTop = event.currentTarget.scrollTop;
    setScrollTop(newScrollTop);
    onScroll?.(newScrollTop);
  }, [onScroll]);

  // Calculate item position
  const getItemStyle = useCallback((row: number, col: number) => {
    const top = row * (itemHeight + gap);
    const left = col * (itemWidth + gap);
    
    return {
      height: itemHeight,
      left,
      position: 'absolute' as const,
      top,
      width: itemWidth,
    };
  }, [itemHeight, itemWidth, gap]);

  // Scroll to specific item
  const scrollToItem = useCallback((index: number) => {
    if (!containerRef.current) return;
    
    const row = Math.floor(index / columnsPerRow);
    const targetScrollTop = row * (itemHeight + gap);
    
    containerRef.current.scrollTop = targetScrollTop;
  }, [columnsPerRow, itemHeight, gap]);

  // Expose scroll method via ref
  useEffect(() => {
    if (containerRef.current) {
      (containerRef.current as any).scrollToItem = scrollToItem;
    }
  }, [scrollToItem]);

  return (
    <div
      className={cx(styles.container, className)}
      onScroll={handleScroll}
      ref={containerRef}
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
    >
      <div
        className={styles.viewport}
        style={{
          height: totalHeight,
          width: '100%',
        }}
      >
        {visibleItems.map(({ item, index, row, col }) => (
          <div
            className={styles.item}
            key={getItemKey ? getItemKey(item, index) : index}
            style={getItemStyle(row, col)}
          >
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(VirtualGrid) as typeof VirtualGrid;

// Performance monitoring hook for virtual scrolling
export const useVirtualScrollingMetrics = () => {
  const [metrics, setMetrics] = useState({
    lastUpdateTime: Date.now(),
    renderRatio: 0,
    renderedItems: 0,
    scrollPosition: 0,
    totalItems: 0,
  });

  const updateMetrics = useCallback((
    renderedItems: number,
    totalItems: number,
    scrollPosition: number
  ) => {
    setMetrics({
      lastUpdateTime: Date.now(),
      renderRatio: totalItems > 0 ? renderedItems / totalItems : 0,
      renderedItems,
      scrollPosition,
      totalItems,
    });
  }, []);

  return { metrics, updateMetrics };
};

// Hook for dynamic item sizing
export const useDynamicItemSize = (
  baseWidth: number,
  baseHeight: number,
  containerWidth: number,
  minItems: number = 2,
  maxItems: number = 10
) => {
  return useMemo(() => {
    const gap = 8;
    const availableWidth = containerWidth - gap;
    const itemsPerRow = Math.max(
      minItems,
      Math.min(maxItems, Math.floor(availableWidth / (baseWidth + gap)))
    );
    
    const actualItemWidth = Math.floor((availableWidth - (itemsPerRow - 1) * gap) / itemsPerRow);
    const aspectRatio = baseHeight / baseWidth;
    const actualItemHeight = Math.floor(actualItemWidth * aspectRatio);

    return {
      gap,
      itemHeight: actualItemHeight,
      itemWidth: actualItemWidth,
      itemsPerRow,
    };
  }, [baseWidth, baseHeight, containerWidth, minItems, maxItems]);
};

export type { VirtualGridProps };
