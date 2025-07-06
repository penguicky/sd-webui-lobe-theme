import { type ComponentType, type LazyExoticComponent, lazy } from 'react';

import { registerModuleUsage } from './bundleAnalysis';

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
  // Priority level for loading (affects preload timing)
  priority?: 'high' | 'normal' | 'low';
  // Retry attempts for failed imports
  retryAttempts?: number;
  // WebUI compatibility mode
  webUICompatible?: boolean;
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
  const {
    preloadDelay,
    preloadTrigger,
    priority = 'normal',
    retryAttempts = 3,
    webUICompatible = true,
  } = options;

  let preloadPromise: Promise<{ default: T }> | null = null;
  let hasPreloaded = false;

  // Enhanced import function with retry logic and WebUI compatibility
  const importWithRetry = async (attempt = 1): Promise<{ default: T }> => {
    try {
      const startTime = performance.now();

      // WebUI compatibility: Check if we should use single bundle fallback
      if (webUICompatible && typeof window !== 'undefined' && (window as any).__WEBUI_SINGLE_BUNDLE__) {
        // In single bundle mode, components are already loaded
        return await importFn();
      }

      const module = await importFn();
      const loadTime = performance.now() - startTime;

      // Register module usage for bundle analysis
      registerModuleUsage(`lazy-${importFn.name || 'anonymous'}`, loadTime);

      return module;
    } catch (error) {
      if (attempt < retryAttempts) {
        // Exponential backoff for retries
        const delay = Math.pow(2, attempt) * 1000;
        await new Promise<void>((resolve) => {
          setTimeout(resolve, delay);
        });
        return importWithRetry(attempt + 1);
      }

      // WebUI fallback: If dynamic import fails, try to load from global scope
      if (webUICompatible && typeof window !== 'undefined' && (window as any).__WEBUI_COMPONENTS__) {
        const componentName = importFn.name || 'anonymous';
        const globalComponent = (window as any).__WEBUI_COMPONENTS__[componentName];
        if (globalComponent) {
          return { default: globalComponent };
        }
      }

      throw error;
    }
  };

  // Priority-based preload timing
  const getPriorityDelay = (): number => {
    if (!preloadDelay) return 0;
    switch (priority) {
      case 'high': {
        return Math.max(preloadDelay * 0.5, 500);
      }
      case 'low': {
        return preloadDelay * 2;
      }
      default: {
        return preloadDelay;
      }
    }
  };

  // Preload function
  const preload = (): Promise<{ default: T }> => {
    if (!preloadPromise) {
      preloadPromise = importWithRetry();
      hasPreloaded = true;
    }
    return preloadPromise;
  };

  // Create the lazy component
  const LazyComponent = lazy(() => {
    if (preloadPromise) {
      return preloadPromise;
    }
    return importWithRetry();
  }) as LazyComponentWithPreload<T>;

  // Add preload method
  LazyComponent.preload = preload;

  // Implement preloading strategies with priority-based timing
  const actualDelay = getPriorityDelay();
  if (actualDelay > 0) {
    setTimeout(() => {
      preload().catch(() => {
        // Silently handle preload failures
      });
    }, actualDelay);
  }

  if (preloadTrigger) {
    // Check trigger condition periodically
    const checkTrigger = () => {
      if (!hasPreloaded && preloadTrigger()) {
        preload().catch(() => {
          // Silently handle preload failures
        });
      } else if (!hasPreloaded) {
        setTimeout(checkTrigger, 1000);
      }
    };
    setTimeout(checkTrigger, 100);
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

/**
 * Smart code splitting manager for WebUI compatibility
 */
export class CodeSplittingManager {
  private static instance: CodeSplittingManager;
  private loadedChunks = new Set<string>();
  private preloadQueue: Array<{ loader: () => Promise<any>; name: string; priority: number }> = [];
  private isProcessingQueue = false;
  private webUIMode: 'single' | 'split' | 'auto' = 'auto';

  static getInstance(): CodeSplittingManager {
    if (!CodeSplittingManager.instance) {
      CodeSplittingManager.instance = new CodeSplittingManager();
    }
    return CodeSplittingManager.instance;
  }

  /**
   * Initialize the code splitting manager
   */
  initialize(): void {
    this.detectWebUIMode();
    this.setupPerformanceMonitoring();
  }

  /**
   * Detect WebUI mode and adjust strategy accordingly
   */
  private detectWebUIMode(): void {
    if (typeof window === 'undefined') {
      this.webUIMode = 'single';
      return;
    }

    // Check for WebUI single bundle mode
    if ((window as any).__WEBUI_SINGLE_BUNDLE__) {
      this.webUIMode = 'single';
      return;
    }

    // Check for dynamic import support
    try {
      // Test dynamic import capability (we don't need to store the result)
      void import('./bundleAnalysis');
      this.webUIMode = 'split';
    } catch {
      this.webUIMode = 'single';
    }
  }

  /**
   * Register a chunk for smart loading
   */
  registerChunk(name: string, loader: () => Promise<any>, priority: number = 1): void {
    if (this.webUIMode === 'single') {
      // In single bundle mode, skip chunk registration
      return;
    }

    if (!this.loadedChunks.has(name)) {
      this.preloadQueue.push({ loader, name, priority });
      this.preloadQueue.sort((a, b) => b.priority - a.priority);
      this.processQueue();
    }
  }

  /**
   * Process the preload queue with intelligent timing
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessingQueue || this.preloadQueue.length === 0) {
      return;
    }

    this.isProcessingQueue = true;

    // Process high-priority chunks first
    while (this.preloadQueue.length > 0) {
      const chunk = this.preloadQueue.shift()!;

      if (!this.loadedChunks.has(chunk.name)) {
        try {
          // Wait for idle time to avoid blocking main thread
          await this.waitForIdle();
          await chunk.loader();
          this.loadedChunks.add(chunk.name);

          if (process.env.NODE_ENV === 'development') {
            console.log(`📦 Preloaded chunk: ${chunk.name}`);
          }
        } catch (error) {
          console.warn(`Failed to preload chunk ${chunk.name}:`, error);
        }
      }
    }

    this.isProcessingQueue = false;
  }

  /**
   * Wait for browser idle time
   */
  private waitForIdle(): Promise<void> {
    return new Promise((resolve) => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => resolve());
      } else {
        setTimeout(resolve, 16); // Fallback to next frame
      }
    });
  }

  /**
   * Setup performance monitoring
   */
  private setupPerformanceMonitoring(): void {
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'development') {
      return;
    }

    // Monitor chunk loading performance
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name.includes('chunk') || entry.name.includes('lazy')) {
          console.log(`📊 Chunk load: ${entry.name} - ${entry.duration.toFixed(2)}ms`);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'resource'] });
    } catch {
      // Fallback for browsers that don't support PerformanceObserver
    }
  }

  /**
   * Get current WebUI mode
   */
  getWebUIMode(): 'single' | 'split' | 'auto' {
    return this.webUIMode;
  }

  /**
   * Check if WebUI is in single bundle mode
   */
  isWebUISingleBundleMode(): boolean {
    return this.webUIMode === 'single';
  }

  /**
   * Get loading statistics
   */
  getStats(): {
    loadedChunks: number;
    pendingChunks: number;
    webUIMode: string;
  } {
    return {
      loadedChunks: this.loadedChunks.size,
      pendingChunks: this.preloadQueue.length,
      webUIMode: this.webUIMode,
    };
  }
}

// Initialize the code splitting manager
if (typeof window !== 'undefined') {
  CodeSplittingManager.getInstance().initialize();
}
