import { type ComponentType, type LazyExoticComponent, lazy } from 'react';

// Enhanced lazy loading with preloading capabilities
interface LazyOptions {
  // Preload the component after a delay (in ms)
  preloadDelay?: number;
  // Preload on hover/focus events
  preloadOnHover?: boolean;
  // Preload when component becomes visible in viewport
  preloadOnVisible?: boolean;
  // Custom preload trigger
  preloadTrigger?: () => boolean;
}

interface LazyComponentWithPreload<T extends ComponentType<any>> extends LazyExoticComponent<T> {
  preload: () => Promise<{ default: T }>;
}

/**
 * Enhanced lazy loading with intelligent preloading strategies
 * Maintains single-bundle compatibility while optimizing loading patterns
 */
export function lazyOptimized<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  options: LazyOptions = {},
): LazyComponentWithPreload<T> {
  const { preloadDelay, preloadTrigger } = options;

  // Create the lazy component
  const LazyComponent = lazy(importFn) as LazyComponentWithPreload<T>;

  // Add preload method
  LazyComponent.preload = importFn;

  // Implement preloading strategies
  if (preloadDelay && preloadDelay > 0) {
    setTimeout(() => {
      LazyComponent.preload().catch(() => {
        // Silently handle preload failures
      });
    }, preloadDelay);
  }

  if (preloadTrigger) {
    // Check trigger condition periodically
    const checkTrigger = () => {
      if (preloadTrigger()) {
        LazyComponent.preload().catch(() => {
          // Silently handle preload failures
        });
      } else {
        // Check again after a short delay
        setTimeout(checkTrigger, 100);
      }
    };
    setTimeout(checkTrigger, 0);
  }

  return LazyComponent;
}

/**
 * Preload multiple components in sequence to avoid blocking
 */
export async function preloadComponents(
  components: Array<LazyComponentWithPreload<any>>,
  options: {
    // Maximum concurrent preloads
    maxConcurrent?: number;
    // Delay between each component preload (ms)
    staggerDelay?: number;
  } = {},
): Promise<void> {
  const { staggerDelay = 50, maxConcurrent = 2 } = options;

  // Process components in batches to avoid overwhelming the browser
  for (let i = 0; i < components.length; i += maxConcurrent) {
    const batch = components.slice(i, i + maxConcurrent);

    // Preload batch concurrently
    await Promise.allSettled(
      batch.map(async (component, index) => {
        // Stagger the preloads within the batch
        if (index > 0 && staggerDelay > 0) {
          await new Promise<void>((resolve) => {
            setTimeout(resolve, staggerDelay * index);
          });
        }
        return component.preload();
      }),
    );

    // Small delay between batches
    if (i + maxConcurrent < components.length && staggerDelay > 0) {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, staggerDelay);
      });
    }
  }
}

/**
 * Create a lazy component that preloads based on user interaction
 */
export function lazyWithInteractionPreload<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  triggerEvents: string[] = ['mouseenter', 'focus', 'touchstart'],
): LazyComponentWithPreload<T> {
  const LazyComponent = lazy(importFn) as LazyComponentWithPreload<T>;
  LazyComponent.preload = importFn;

  let preloaded = false;

  // Add event listeners for preloading
  const preloadOnInteraction = () => {
    if (preloaded) return;
    preloaded = true;

    LazyComponent.preload().catch(() => {
      // Reset flag on failure to allow retry
      preloaded = false;
    });
  };

  // Add listeners to document for global interaction detection
  triggerEvents.forEach((event) => {
    document.addEventListener(event, preloadOnInteraction, {
      once: true,
      passive: true,
    });
  });

  return LazyComponent;
}

/**
 * Bundle size optimization utilities
 */
export const bundleOptimization = {
  /**
   * Conditional import based on feature flags or conditions
   */
  conditionalImport: <T>(
    condition: () => boolean,
    importFn: () => Promise<T>,
  ): (() => Promise<T | null>) => {
    return async () => {
      if (condition()) {
        return importFn();
      }
      return null;
    };
  },

  /**
   * Dynamically import only when needed, with caching
   */
  importOnDemand: <T>(importFn: () => Promise<T>): (() => Promise<T>) => {
    let cached: Promise<T> | null = null;

    return () => {
      if (!cached) {
        cached = importFn();
      }
      return cached;
    };
  },

  /**
   * Import with timeout to prevent hanging
   */
  importWithTimeout: <T>(
    importFn: () => Promise<T>,
    timeoutMs: number = 5000,
  ): (() => Promise<T>) => {
    return () => {
      return Promise.race([
        importFn(),
        new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error('Import timeout')), timeoutMs);
        }),
      ]);
    };
  },
};

/**
 * Performance monitoring for lazy loading
 */
export const lazyPerformance = {
  /**
   * Measure lazy component load time
   */
  measureLoadTime: <T extends ComponentType<any>>(
    name: string,
    importFn: () => Promise<{ default: T }>,
  ): (() => Promise<{ default: T }>) => {
    return async () => {
      const startTime = performance.now();
      try {
        const result = await importFn();
        const loadTime = performance.now() - startTime;

        if (process.env.NODE_ENV === 'development') {
          console.log(`🚀 Lazy component "${name}" loaded in ${loadTime.toFixed(2)}ms`);
        }

        return result;
      } catch (error) {
        const loadTime = performance.now() - startTime;

        if (process.env.NODE_ENV === 'development') {
          console.error(
            `❌ Lazy component "${name}" failed to load after ${loadTime.toFixed(2)}ms:`,
            error,
          );
        }

        throw error;
      }
    };
  },
};
