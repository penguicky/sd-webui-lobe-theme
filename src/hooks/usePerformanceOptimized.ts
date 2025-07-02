import { useEffect, useMemo, useRef, useState } from 'react';

// =============================================================================
// DEBUG SYSTEM - SHARED WITH HIGHLIGHT COMPONENTS
// =============================================================================

// Access the shared debug state from useHighlight
const getDebugState = (): boolean => {
  try {
    return (window as any).HIGHLIGHT_DEBUG_STATE?.get() || false;
  } catch {
    return false;
  }
};

// Debug utilities that check the shared state
const debugLog = (message: string, data?: any) => {
  if (getDebugState()) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
};

const debugWarn = (message: string, ...args: any[]) => {
  if (getDebugState()) {
    console.warn(message, ...args);
  }
};

const debugError = (message: string, ...args: any[]) => {
  if (getDebugState()) {
    console.error(message, ...args);
  }
};

// =============================================================================
// PERFORMANCE UTILITIES
// =============================================================================

// Intersection observer hook
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
            debugWarn(`🐌 ${componentName} slow render: ${renderTime.toFixed(2)}ms`);
          }
        }
      };
    }
  });
};

// Cache warming utility with controlled logging
export const warmShikiCache = async () => {
  debugLog('🔄 Starting Shiki cache warming...');

  try {
    const startTime = performance.now();

    // Trigger cache warming by importing the highlighting module
    // This will initialize the global highlighter and engine
    await import('./useHighlight');

    const endTime = performance.now();
    const duration = (endTime - startTime).toFixed(2);

    debugLog(`✅ Shiki cache warmed successfully in ${duration}ms`);

    // Also warm the highlighter by triggering initialization
    try {
      // Import the grammar to ensure it's loaded
      await import('@/modules/PromptHighlight/features/grammar');
      await import('@/modules/PromptHighlight/features/promptTheme');
      debugLog('📦 Shiki dependencies preloaded');
    } catch (depError) {
      const errorMessage = depError instanceof Error ? depError.message : String(depError);
      debugWarn('⚠️ Dependency preloading failed:', errorMessage);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    debugError('❌ Shiki cache warming failed:', errorMessage);
    debugError('Error details:', {
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
    debugLog('1. Checking module availability...');

    await import('./useHighlight');
    debugLog('✅ useHighlight module loaded');

    const grammarModule = await import('@/modules/PromptHighlight/features/grammar');
    debugLog('✅ Grammar module loaded:', grammarModule.default?.[0]?.name);

    const themeModule = await import('@/modules/PromptHighlight/features/promptTheme');
    debugLog('✅ Theme module loaded');

    // Test theme generation
    debugLog('2. Testing theme generation...');
    const testThemes = [
      { dark: false, neg: false },
      { dark: false, neg: true },
      { dark: true, neg: false },
      { dark: true, neg: true },
    ];

    testThemes.forEach(({ dark, neg }) => {
      const theme = themeModule.themeConfig(dark, neg);
      debugLog(`Theme ${dark ? 'dark' : 'light'}${neg ? '-neg-prompt' : ''}:`, theme.name);
    });

    // Test cache warming
    debugLog('3. Testing cache warming...');
    await warmShikiCache();

    // Check browser support
    debugLog('4. Browser environment check...');
    debugLog('WebAssembly supported:', typeof WebAssembly !== 'undefined');
    debugLog('Performance API available:', typeof performance !== 'undefined');
    debugLog('Environment:', process.env.NODE_ENV);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    debugError('Debug check failed:', errorMessage);
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
  debugLog(`🎯 Highlight alignment adjusted: X: ${offsetX}px, Y: ${offsetY}px`);
};

// Test highlighting responsiveness
export const testHighlightResponsiveness = () => {
  debugLog('🧪 Testing highlight responsiveness...');

  const testInputs = document.querySelectorAll('textarea[placeholder*="prompt" i]');
  if (testInputs.length === 0) {
    debugLog('❌ No prompt textareas found');
    return;
  }

  const testArea = testInputs[0] as HTMLTextAreaElement;
  const originalValue = testArea.value;

  debugLog('📝 Adding test text...');
  testArea.value = 'test highlighting responsiveness';
  testArea.dispatchEvent(new Event('input', { bubbles: true }));

  setTimeout(() => {
    debugLog('🔄 Changing text...');
    testArea.value = 'updated text for responsiveness test';
    testArea.dispatchEvent(new Event('input', { bubbles: true }));

    setTimeout(() => {
      debugLog('↩️ Restoring original text...');
      testArea.value = originalValue;
      testArea.dispatchEvent(new Event('input', { bubbles: true }));
      debugLog('✅ Responsiveness test complete');
    }, 1000);
  }, 1000);
};

// Make utilities globally available
if (typeof window !== 'undefined') {
  (window as any).debugShikiSetup = debugShikiSetup;
  (window as any).adjustHighlightAlignment = adjustHighlightAlignment;
  (window as any).testHighlightResponsiveness = testHighlightResponsiveness;

  // Only show debug utilities info if debug is enabled
  if (getDebugState()) {
    debugLog('🛠️ Debug utilities available:');
    debugLog('  - debugShikiSetup() - Full Shiki diagnostics');
    debugLog('  - testBasicHighlighting() - Test core highlighting function');
    debugLog('  - adjustHighlightAlignment(x, y) - Fine-tune text alignment');
    debugLog('  - testHighlightResponsiveness() - Test real-time highlighting');
    debugLog('  - forceCompleteAllHighlighting() - EMERGENCY: Force stop all loading');
  }
}
