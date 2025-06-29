import { useCallback, useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';

import { useAppStore } from '@/store';

// Performance monitoring hook
export const usePerformanceMonitor = (componentName: string) => {
  const startTimeRef = useRef<number>();

  useEffect(() => {
    if (__DEV__) {
      startTimeRef.current = performance.now();

      return () => {
        if (startTimeRef.current) {
          const endTime = performance.now();
          const renderTime = endTime - startTimeRef.current;

          if (renderTime > 16) {
            // Only log if render time > 16ms (60fps threshold)
            console.warn(`🐌 ${componentName} slow render: ${renderTime.toFixed(2)}ms`);
          } else if (renderTime > 8) {
            console.log(`⚡ ${componentName} render: ${renderTime.toFixed(2)}ms`);
          }
        }
      };
    }
  });
};

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

// Memory-efficient selector hook
export const useOptimizedSelector = <T>(selector: (state: any) => T, equalityFn = shallow) => {
  return useAppStore(selector, equalityFn);
};

// Throttled effect hook
export const useThrottledEffect = (
  effect: () => void | (() => void),
  deps: React.DependencyList,
  delay: number,
) => {
  const lastRan = useRef<number>();
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const now = Date.now();

    if (!lastRan.current || now - lastRan.current >= delay) {
      lastRan.current = now;
      return effect();
    } else {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(
        () => {
          lastRan.current = Date.now();
          effect();
        },
        delay - (now - lastRan.current),
      );
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, deps);
};

// Intersection observer hook for lazy loading
export const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current || !('IntersectionObserver' in window)) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

// Resource preloader hook
export const usePreloadResources = (resources: string[]) => {
  useEffect(() => {
    const preloadPromises = resources.map((resource) => {
      if (resource.endsWith('.js')) {
        // Use link element for preloading scripts
        const link = document.createElement('link');
        link.href = resource;
        link.rel = 'preload';
        link.as = 'script';
        return new Promise((resolve) => {
          link.onload = resolve;
          link.onerror = resolve; // Don't fail on error
          document.head.append(link);
        });
      } else if (resource.endsWith('.css')) {
        const link = document.createElement('link');
        link.href = resource;
        link.rel = 'preload';
        link.as = 'style';
        return new Promise((resolve) => {
          link.onload = resolve;
          link.onerror = resolve; // Don't fail on error
          document.head.append(link);
        });
      } else {
        // Images or other resources
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Don't fail on error
          img.src = resource;
        });
      }
    });

    Promise.all(preloadPromises).then(() => {
      if (__DEV__) {
        console.log('✅ Resources preloaded:', resources.length);
      }
    });
  }, [resources]);
};
