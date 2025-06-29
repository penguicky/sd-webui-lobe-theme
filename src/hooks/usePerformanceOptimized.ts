import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Performance monitoring for Shiki
export class ShikiPerformanceMonitor {
  private static metrics = {
    cacheHits: 0,
    cacheMisses: 0,
    highlightTimes: [] as number[],
    initTime: 0,
  };

  static recordInit(time: number) {
    this.metrics.initTime = time;
    if (process.env.NODE_ENV === 'development') {
      console.log(`🚀 Shiki initialization: ${time.toFixed(2)}ms`);
    }
  }

  static recordHighlight(time: number) {
    this.metrics.highlightTimes.push(time);

    if (this.metrics.highlightTimes.length > 50) {
      this.metrics.highlightTimes = this.metrics.highlightTimes.slice(-50);
    }

    if (this.metrics.highlightTimes.length % 10 === 0 && process.env.NODE_ENV === 'development') {
      const avg =
        this.metrics.highlightTimes.reduce((a, b) => a + b, 0) / this.metrics.highlightTimes.length;
      console.log(`🎨 Avg highlighting time: ${avg.toFixed(2)}ms`);
    }
  }

  static recordCacheHit() {
    this.metrics.cacheHits++;
  }
  static recordCacheMiss() {
    this.metrics.cacheMisses++;
  }

  static getStats() {
    const total = this.metrics.cacheHits + this.metrics.cacheMisses;
    return {
      avgHighlightTime:
        this.metrics.highlightTimes.length > 0
          ? this.metrics.highlightTimes.reduce((a, b) => a + b, 0) /
            this.metrics.highlightTimes.length
          : 0,
      cacheHitRate: total > 0 ? (this.metrics.cacheHits / total) * 100 : 0,
      initTime: this.metrics.initTime,
      totalOperations: total,
    };
  }
}

// Debounced callback hook
export const useDebouncedCallback = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): T => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  const debouncedCallback = useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  ) as T;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return debouncedCallback;
};

// Intersection observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setIsIntersecting(true); // Fallback for SSR or unsupported browsers
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return isIntersecting;
};

// Memory-efficient content hash
export const useContentHash = (content: string, maxLength = 100) => {
  return useMemo(() => {
    if (content.length <= maxLength) return content;

    // Create a hash for very long content
    const start = content.slice(0, 50);
    const end = content.slice(-50);
    return `${start}...${end}_${content.length}`;
  }, [content, maxLength]);
};

// Performance monitoring hook
export const usePerformanceMonitor = (componentName: string) => {
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      startTimeRef.current = performance.now();

      return () => {
        if (startTimeRef.current) {
          const renderTime = performance.now() - startTimeRef.current;

          if (renderTime > 16) {
            // 60fps threshold
            console.warn(`🐌 ${componentName} slow render: ${renderTime.toFixed(2)}ms`);
          }
        }
      };
    }
  });
};

// Cache warming utility
export const warmShikiCache = async () => {
  try {
    // Trigger cache warming by importing the highlighting module
    // This will initialize the global highlighter and engine
    await import('./useHighlight');

    if (process.env.NODE_ENV === 'development') {
      console.log('✅ Shiki cache warmed');
    }
  } catch (error) {
    console.warn('❌ Shiki cache warming failed:', error);
  }
};
