/**
 * Virtual Scrolling Components
 * High-performance virtualization for large lists and grids
 */

import { useEffect, useState } from 'react';

export type { VirtualGridProps } from './VirtualGrid';
export { useDynamicItemSize,useVirtualScrollingMetrics, default as VirtualGrid } from './VirtualGrid';
export type { ModelCard,VirtualizedExtraNetworkProps } from './VirtualizedExtraNetwork';
export { useVirtualizedExtraNetwork,default as VirtualizedExtraNetwork } from './VirtualizedExtraNetwork';
export type { VirtualListProps } from './VirtualList';
export { useItemHeightMeasurement, useVirtualListMetrics,default as VirtualList } from './VirtualList';

// Utility functions for virtual scrolling
export const virtualScrollingUtils = {
  /**
   * Calculate optimal item size based on container dimensions
   */
  calculateOptimalItemSize: (
    containerWidth: number,
    _containerHeight: number,
    itemCount: number,
    aspectRatio: number = 1,
    minItemSize: number = 50,
    maxItemSize: number = 200
  ) => {
    const itemsPerRow = Math.ceil(Math.sqrt(itemCount * aspectRatio));
    const itemWidth = Math.max(
      minItemSize,
      Math.min(maxItemSize, Math.floor(containerWidth / itemsPerRow))
    );
    const itemHeight = Math.floor(itemWidth / aspectRatio);
    
    return {
      estimatedRows: Math.ceil(itemCount / itemsPerRow),
      itemHeight,
      itemWidth,
      itemsPerRow,
    };
  },

  
  /**
   * Calculate buffer size for smooth scrolling
   */
calculateOptimalOverscan: (
    itemHeight: number,
    containerHeight: number,
    scrollSpeed: number = 1
  ): number => {
    const visibleItems = Math.ceil(containerHeight / itemHeight);
    const baseOverscan = Math.ceil(visibleItems * 0.5);
    const speedMultiplier = Math.min(2, Math.max(0.5, scrollSpeed));
    
    return Math.ceil(baseOverscan * speedMultiplier);
  },

  
  /**
   * Determine if virtual scrolling is beneficial
   */
shouldUseVirtualScrolling: (
    itemCount: number,
    itemHeight: number,
    containerHeight: number,
    threshold: number = 50
  ): boolean => {
    const totalHeight = itemCount * itemHeight;

    return itemCount > threshold && totalHeight > containerHeight * 3;
  },
};

// Performance monitoring utilities
export const virtualScrollingPerformance = {
  /**
   * Monitor virtual scrolling performance
   */
  createPerformanceMonitor: () => {
    let frameCount = 0;
    let lastTime = performance.now();
    let fps = 0;

    const monitor = {
      getFPS: () => fps,
      reset: () => {
        frameCount = 0;
        lastTime = performance.now();
        fps = 0;
      },
      update: () => {
        frameCount++;
        const currentTime = performance.now();
        
        if (currentTime - lastTime >= 1000) {
          fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
          frameCount = 0;
          lastTime = currentTime;
        }
      },
    };

    return monitor;
  },

  /**
   * Measure render performance
   */
  measureRenderTime: <T extends any[], R>(
    renderFunction: (...args: T) => R,
    label: string = 'render'
  ) => {
    return (...args: T): R => {
      const start = performance.now();
      const result = renderFunction(...args);
      const end = performance.now();
      
      if (end - start > 16) { // More than one frame
        console.warn(`${label} took ${(end - start).toFixed(2)}ms`);
      }
      
      return result;
    };
  },
};

// Common virtual scrolling configurations
export const virtualScrollingPresets = {
  /**
   * Configuration for image galleries
   */
  imageGallery: {
    gap: 8,
    itemHeight: 200,
    itemWidth: 150,
    maxItems: 8,
    minItems: 2,
    overscan: 5,
  },

  /**
   * Configuration for model cards
   */
  modelCards: {
    gap: 8,
    itemHeight: 128,
    itemWidth: 86,
    maxItems: 12,
    minItems: 3,
    overscan: 10,
  },

  
  /**
   * Configuration for tag lists
   */
tagList: {
    estimatedItemHeight: 32,
    itemHeight: 32,
    overscan: 10,
  },

  
  /**
   * Configuration for text lists
   */
textList: {
    estimatedItemHeight: 40,
    itemHeight: 40,
    overscan: 5,
  },
};

// Hook for automatic virtual scrolling detection
export const useAutoVirtualScrolling = <T>(
  items: T[],
  containerRef: React.RefObject<HTMLElement>,
  itemHeight: number = 50,
  threshold: number = 100
) => {
  const [shouldVirtualize, setShouldVirtualize] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setContainerDimensions({ height, width });

        // Determine if virtualization is beneficial
        const shouldUse = virtualScrollingUtils.shouldUseVirtualScrolling(
          items.length,
          itemHeight,
          height,
          threshold
        );
        setShouldVirtualize(shouldUse);
      }
    };

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(containerRef.current);
    updateDimensions();

    return () => resizeObserver.disconnect();
  }, [items.length, itemHeight, threshold, containerRef]);

  return {
    containerDimensions,
    estimatedTotalHeight: items.length * itemHeight,
    itemCount: items.length,
    shouldVirtualize,
  };
};
