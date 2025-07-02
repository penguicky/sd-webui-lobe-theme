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

    // Create a hash for very long content to optimize cache keys
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

// Cache warming utility with better logging
export const warmShikiCache = async () => {
  console.log('🔄 Starting Shiki cache warming...');

  try {
    const startTime = performance.now();

    // Trigger cache warming by importing the highlighting module
    // This will initialize the global highlighter and engine
    await import('./useHighlight');

    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);

    console.log(`✅ Shiki cache warmed successfully in ${duration}ms`);

    // Also warm the highlighter by triggering initialization
    try {
      // Import the grammar to ensure it's loaded
      await import('@/modules/PromptHighlight/features/grammar');
      await import('@/modules/PromptHighlight/features/promptTheme');
      console.log('📦 Shiki dependencies preloaded');
    } catch (depError) {
      const errorMessage = depError instanceof Error ? depError.message : String(depError);
      console.warn('⚠️ Dependency preloading failed:', errorMessage);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    console.error('❌ Shiki cache warming failed:', errorMessage);
    console.error('Error details:', {
      message: errorMessage,
      stack: errorStack,
    });
  }
};

// Debug utility - can be called from browser console
export const debugShikiSetup = async () => {
  console.group('🔍 Shiki Debug Information');

  try {
    // Check if Shiki modules are available
    console.log('1. Checking module availability...');

    await import('./useHighlight');
    console.log('✅ useHighlight module loaded');

    const grammarModule = await import('@/modules/PromptHighlight/features/grammar');
    console.log('✅ Grammar module loaded:', grammarModule.default?.[0]?.name);

    const themeModule = await import('@/modules/PromptHighlight/features/promptTheme');
    console.log('✅ Theme module loaded');

    // Test theme generation
    console.log('2. Testing theme generation...');
    const testThemes = [
      { dark: false, neg: false },
      { dark: false, neg: true },
      { dark: true, neg: false },
      { dark: true, neg: true },
    ];

    testThemes.forEach(({ dark, neg }) => {
      const theme = themeModule.themeConfig(dark, neg);
      console.log(`Theme ${dark ? 'dark' : 'light'}${neg ? '-neg-prompt' : ''}:`, theme.name);
    });

    // Test cache warming
    console.log('3. Testing cache warming...');
    await warmShikiCache();

    // Check browser support
    console.log('4. Browser environment check...');
    console.log('WebAssembly supported:', typeof WebAssembly !== 'undefined');
    console.log('Performance API available:', typeof performance !== 'undefined');
    console.log('Environment:', process.env.NODE_ENV);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Debug check failed:', errorMessage);
  }

  console.groupEnd();
};

// Manual alignment adjustment utility
export const adjustHighlightAlignment = (offsetX = 0, offsetY = 0) => {
  const containers = document.querySelectorAll('[data-code-type="highlighter"]');
  containers.forEach((container) => {
    (container as HTMLElement).style.setProperty('--highlight-offset-x', `${offsetX}px`);
    (container as HTMLElement).style.setProperty('--highlight-offset-y', `${offsetY}px`);
  });
  console.log(`🎯 Highlight alignment adjusted: X: ${offsetX}px, Y: ${offsetY}px`);
};

// Test highlighting responsiveness
export const testHighlightResponsiveness = () => {
  console.log('🧪 Testing highlight responsiveness...');

  const testInputs = document.querySelectorAll('textarea[placeholder*="prompt" i]');
  if (testInputs.length === 0) {
    console.log('❌ No prompt textareas found');
    return;
  }

  const testArea = testInputs[0] as HTMLTextAreaElement;
  const originalValue = testArea.value;

  console.log('📝 Adding test text...');
  testArea.value = 'test highlighting responsiveness';
  testArea.dispatchEvent(new Event('input', { bubbles: true }));

  setTimeout(() => {
    console.log('🔄 Changing text...');
    testArea.value = 'updated text for responsiveness test';
    testArea.dispatchEvent(new Event('input', { bubbles: true }));

    setTimeout(() => {
      console.log('↩️ Restoring original text...');
      testArea.value = originalValue;
      testArea.dispatchEvent(new Event('input', { bubbles: true }));
      console.log('✅ Responsiveness test complete');
    }, 1000);
  }, 1000);
};

// Make utilities globally available
if (typeof window !== 'undefined') {
  (window as any).debugShikiSetup = debugShikiSetup;
  (window as any).adjustHighlightAlignment = adjustHighlightAlignment;
  (window as any).testHighlightResponsiveness = testHighlightResponsiveness;
  console.log('🛠️ Debug utilities available:');
  console.log('  - debugShikiSetup() - Full Shiki diagnostics');
  console.log('  - testBasicHighlighting() - Test core highlighting function');
  console.log('  - adjustHighlightAlignment(x, y) - Fine-tune text alignment');
  console.log('  - testHighlightResponsiveness() - Test real-time highlighting');
  console.log('  - forceCompleteAllHighlighting() - EMERGENCY: Force stop all loading');
}
