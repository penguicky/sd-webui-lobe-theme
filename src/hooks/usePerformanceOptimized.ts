import { useEffect, useMemo, useRef, useState } from 'react';

import { isIntersectionObserverSupported, isPerformanceAPISupported } from '@/utils/browserCompat';

// =============================================================================
// DEBUG SYSTEM - USE CENTRALIZED DEBUG UTILITIES
// =============================================================================

import {
  debugError,
  debugLog,
  debugWarn,
  isDebugEnabled,
} from '../modules/PromptHighlight/utils/debug';

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
    if (!ref.current || !isIntersectionObserverSupported()) {
      setIsIntersecting(true); // Fallback for SSR or unsupported browsers
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry) {
        setIsIntersecting(entry.isIntersecting);
      }
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
    if (process.env.NODE_ENV === 'development' && isPerformanceAPISupported()) {
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
    return undefined;
  });
};

// Cache warming utility with controlled logging
export const warmShikiCache = async () => {
  debugLog('🔄 Starting Shiki cache warming...');

  try {
    const startTime = isPerformanceAPISupported() ? performance.now() : Date.now();

    // Trigger cache warming by importing the highlighting module
    // This will initialize the global highlighter and engine
    await import('./useHighlight');

    const endTime = isPerformanceAPISupported() ? performance.now() : Date.now();
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

// Enhanced alignment adjustment utility with sub-pixel precision
export const adjustHighlightAlignment = (offsetX = 0, offsetY = 0, subPixelX = 0, subPixelY = 0) => {
  const containers = document.querySelectorAll('[data-code-type="hybrid-highlighter"]');
  containers.forEach((container) => {
    const element = container as HTMLElement;
    element.style.setProperty('--highlight-offset-x', `${offsetX}px`);
    element.style.setProperty('--highlight-offset-y', `${offsetY}px`);
    element.style.setProperty('--highlight-sub-pixel-x', `${subPixelX}px`);
    element.style.setProperty('--highlight-sub-pixel-y', `${subPixelY}px`);
  });
  debugLog(`🎯 Highlight alignment adjusted: X: ${offsetX}px, Y: ${offsetY}px, Sub-pixel X: ${subPixelX}px, Sub-pixel Y: ${subPixelY}px`);
};

// Visual alignment testing utility
export const testAlignmentVisually = () => {
  const containers = document.querySelectorAll('[data-code-type="hybrid-highlighter"]');
  containers.forEach((container, index) => {
    const element = container as HTMLElement;

    // Add visual debugging overlay
    const debugOverlay = document.createElement('div');
    debugOverlay.id = `alignment-debug-${index}`;
    debugOverlay.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px dashed red;
      background: rgba(255, 0, 0, 0.1);
      pointer-events: none;
      z-index: 9999;
      font-family: monospace;
      font-size: 12px;
      color: red;
    `;
    debugOverlay.innerHTML = `
      <div style="position: absolute; top: -20px; left: 0; background: red; color: white; padding: 2px 4px; font-size: 10px;">
        Highlighter ${index + 1}
      </div>
    `;

    element.append(debugOverlay);

    // Remove after 5 seconds
    setTimeout(() => {
      const overlay = document.getElementById(`alignment-debug-${index}`);
      if (overlay) overlay.remove();
    }, 5000);
  });

  debugLog(`🔍 Visual alignment test activated for ${containers.length} highlighters (will auto-remove in 5s)`);
};

// Browser-specific alignment detection and adjustment
export const detectAndFixBrowserAlignment = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  const isFirefox = userAgent.includes('firefox');
  const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome');
  const isEdge = userAgent.includes('edge');

  let adjustments = { subX: 0, subY: 0, x: 0, y: 0 };

  // Browser-specific alignment adjustments based on testing
  if (isFirefox) {
    adjustments = { subX: 0, subY: 0, x: 0, y: -0.5 };
  } else if (isSafari) {
    adjustments = { subX: 0.5, subY: 0, x: 0, y: 0 };
  } else if (isEdge) {
    adjustments = { subX: 0, subY: 0.25, x: 0, y: 0 };
  }

  if (adjustments.x !== 0 || adjustments.y !== 0 || adjustments.subX !== 0 || adjustments.subY !== 0) {
    adjustHighlightAlignment(adjustments.x, adjustments.y, adjustments.subX, adjustments.subY);
    debugLog(`🌐 Applied browser-specific alignment for ${isFirefox ? 'Firefox' : isSafari ? 'Safari' : isEdge ? 'Edge' : 'Chrome'}`);
  }

  return adjustments;
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
  (window as any).testAlignmentVisually = testAlignmentVisually;
  (window as any).detectAndFixBrowserAlignment = detectAndFixBrowserAlignment;

  // Only show debug utilities info if debug is enabled
  if (isDebugEnabled()) {
    debugLog('🛠️ Debug utilities available:');
    debugLog('  - debugShikiSetup() - Full Shiki diagnostics');
    debugLog('  - testBasicHighlighting() - Test core highlighting function');
    debugLog('  - adjustHighlightAlignment(x, y, subX, subY) - Fine-tune text alignment with sub-pixel precision');
    debugLog('  - testAlignmentVisually() - Visual alignment testing with red overlay');
    debugLog('  - detectAndFixBrowserAlignment() - Auto-detect and fix browser-specific alignment issues');
    debugLog('  - testHighlightResponsiveness() - Test real-time highlighting');
    debugLog('  - forceCompleteAllHighlighting() - EMERGENCY: Force stop all loading');
  }
}
