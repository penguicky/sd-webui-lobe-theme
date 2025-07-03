import { useMemo } from 'react';
import { HighlighterCore, createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import useSWR from 'swr';

import { createDynamicGrammar } from '@/modules/PromptHighlight/features/dynamicGrammar';
import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';

// =============================================================================
// CENTRALIZED DEBUG SYSTEM
// =============================================================================

// Global debug state - controls ALL highlight debug messages
let HIGHLIGHT_DEBUG_ENABLED = true; // Enable debug logging to troubleshoot issues

// Store globally for cross-component access
if (typeof window !== 'undefined') {
  (window as any).HIGHLIGHT_DEBUG_STATE = {
    get: () => HIGHLIGHT_DEBUG_ENABLED,
    set: (value: boolean) => {
      HIGHLIGHT_DEBUG_ENABLED = value;
    },
  };
}

// Debug utility functions
const debugLog = (message: string, ...args: any[]) => {
  if (HIGHLIGHT_DEBUG_ENABLED) {
    console.log(message, ...args);
  }
};

const debugError = (message: string, ...args: any[]) => {
  if (HIGHLIGHT_DEBUG_ENABLED) {
    console.error(message, ...args);
  }
};

const debugWarn = (message: string, ...args: any[]) => {
  if (HIGHLIGHT_DEBUG_ENABLED) {
    console.warn(message, ...args);
  }
};

// Global control functions
export const enableHighlightDebug = () => {
  HIGHLIGHT_DEBUG_ENABLED = true;
  if (typeof window !== 'undefined') {
    (window as any).HIGHLIGHT_DEBUG_STATE?.set(true);
  }
  console.log('🔧 Highlight debugging ENABLED - all components will now log debug info');
};

export const disableHighlightDebug = () => {
  HIGHLIGHT_DEBUG_ENABLED = false;
  if (typeof window !== 'undefined') {
    (window as any).HIGHLIGHT_DEBUG_STATE?.set(false);
  }
  console.log('🔇 Highlight debugging DISABLED - debug messages turned off');
};

export const toggleHighlightDebug = () => {
  HIGHLIGHT_DEBUG_ENABLED = !HIGHLIGHT_DEBUG_ENABLED;
  if (typeof window !== 'undefined') {
    (window as any).HIGHLIGHT_DEBUG_STATE?.set(HIGHLIGHT_DEBUG_ENABLED);
  }
  console.log(`🔄 Highlight debugging ${HIGHLIGHT_DEBUG_ENABLED ? 'ENABLED' : 'DISABLED'}`);
  console.log(`💡 Debug messages are now: ${HIGHLIGHT_DEBUG_ENABLED ? 'ON' : 'OFF'}`);
};

// =============================================================================
// HIGHLIGHT SYSTEM
// =============================================================================

// Optimize theme key generation to match the original theme names
const getThemeKey = (isDarkMode: boolean, isNegPrompt: boolean): string => {
  return (isDarkMode ? 'dark' : 'light') + (isNegPrompt ? '-neg-prompt' : '');
};

// Memoized transformer to avoid recreation
const codeTransformer = {
  code(node: any) {
    node.properties.id = 'lobe_highlighter';
  },
};

// Global state for optimization
let globalHighlighter: HighlighterCore | null = null;
let globalEngine: any = null;
let initPromise: Promise<HighlighterCore> | null = null;

// Pre-compute themes to avoid recreation
const lightTheme = themeConfig(false, false);
const lightNegTheme = themeConfig(false, true);
const darkTheme = themeConfig(true, false);
const darkNegTheme = themeConfig(true, true);
const themes = [lightTheme, lightNegTheme, darkTheme, darkNegTheme];

// Debug theme names
if (process.env.NODE_ENV === 'development') {
  debugLog('🎨 Theme names registered:', {
    dark: darkTheme.name,
    darkNeg: darkNegTheme.name,
    light: lightTheme.name,
    lightNeg: lightNegTheme.name,
  });
}

// Pre-create engine (singleton)
const getEngine = async () => {
  if (!globalEngine) {
    globalEngine = await createOnigurumaEngine(() => import('shiki/wasm'));
  }
  return globalEngine;
};

// Optimized highlighter initialization with proper error handling
const initHighlighter = async (text?: string): Promise<HighlighterCore> => {
  // For dynamic grammar, we need to create a new highlighter instance per text
  // to ensure the grammar matches the specific content
  // Always use dynamic grammar for plain text embedding detection
  const shouldUseDynamicGrammar = text && text.length > 0;

  if (!shouldUseDynamicGrammar && globalHighlighter) {
    return globalHighlighter;
  }

  // For dynamic grammar, don't use global cache
  if (shouldUseDynamicGrammar) {
    try {
      const engine = await getEngine();
      const dynamicGrammar = await createDynamicGrammar(text);

      const highlighter = await createHighlighterCore({
        engine,
        langs: [
          {
            ...dynamicGrammar,
            repository: {}, // Add required repository property for Shiki v3
          },
        ],
        themes,
      });

      debugLog('✅ Created dynamic highlighter with embedding verification');
      return highlighter;
    } catch (error) {
      debugWarn('⚠️ Failed to create dynamic highlighter, falling back to static:', error);
      // Fall through to static highlighter
    }
  }

  // Static highlighter initialization
  if (globalHighlighter) {
    return globalHighlighter;
  }

  // Ensure only one initialization happens for static highlighter
  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    try {
      const engine = await getEngine();

      const highlighter = await createHighlighterCore({
        engine,
        langs: [
          {
            ...prompt[0],
            repository: {}, // Add required repository property for Shiki v3
          } as any, // Type assertion to handle complex grammar structure
        ],
        themes,
      });

      globalHighlighter = highlighter;
      return highlighter;
    } catch (error) {
      initPromise = null; // Allow retry on failure
      throw error;
    }
  })();

  return initPromise;
};

// Improved cache with better cleanup
const contentCache = new Map<string, { html: string; timestamp: number }>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes (reduced from 10)
const MAX_CACHE_SIZE = 80; // Slightly reduced for better memory management

const getCachedContent = (key: string): string | null => {
  const cached = contentCache.get(key);
  if (!cached) return null;

  if (Date.now() - cached.timestamp > CACHE_TTL) {
    contentCache.delete(key);
    return null;
  }

  return cached.html;
};

const setCachedContent = (key: string, html: string) => {
  // Clean up old entries if cache is full
  if (contentCache.size >= MAX_CACHE_SIZE) {
    const entries = Array.from(contentCache.entries());
    // Sort by timestamp and remove oldest 30%
    entries
      .sort((a, b) => a[1].timestamp - b[1].timestamp)
      .slice(0, Math.floor(MAX_CACHE_SIZE * 0.3))
      .forEach(([k]) => contentCache.delete(k));
  }

  contentCache.set(key, {
    html,
    timestamp: Date.now(),
  });
};

// Clear cache utility
export const clearHighlightCache = () => {
  contentCache.clear();
  debugLog('🧹 Highlight cache cleared');
};

// Force refresh all highlighting
export const forceRefreshHighlighting = () => {
  clearHighlightCache();
  // Trigger re-render by dispatching events on textareas
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach((textarea) => {
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  });
  debugLog('🔄 Forced highlighting refresh on all textareas');
};

// Force all highlighting to complete (emergency function)
export const forceCompleteAllHighlighting = () => {
  debugLog('🚨 EMERGENCY: Forcing all highlighting to complete...');

  // Clear all caches
  clearHighlightCache();

  // Find all syntax highlighter components and force them to show plain text
  const highlightContainers = document.querySelectorAll('[data-code-type="highlighter"]');
  highlightContainers.forEach((container, index) => {
    debugLog(`🔧 Forcing container ${index} to show plain text`);

    // Find the highlighted content and replace with plain text
    const shikiElements = container.querySelectorAll('.shiki');
    shikiElements.forEach((element) => {
      const parentElement = element.parentElement;
      if (parentElement) {
        // Create a plain code element
        const codeElement = document.createElement('code');
        codeElement.style.pointerEvents = 'none';
        codeElement.style.fontFamily = 'inherit';

        // Extract text content from the parent container
        const htmlContainer = container as HTMLElement;
        const textareaSelector =
          htmlContainer.dataset.codeType === 'highlighter' ? 'textarea' : null;
        if (textareaSelector) {
          const textarea = document.querySelector(textareaSelector) as HTMLTextAreaElement;
          if (textarea) {
            codeElement.textContent = textarea.value;
          }
        }

        // Replace the highlighted content
        element.replaceWith(codeElement);
      }
    });

    // Remove any loading indicators
    const loadingElements = container.querySelectorAll('[class*="loading"]');
    loadingElements.forEach((loading) => loading.remove());
  });

  debugLog('✅ Emergency highlighting completion done');
};

export const useHighlight = (text: string, isDarkMode: boolean, isNegPrompt: boolean) => {
  // Memoize cache key to prevent unnecessary re-renders
  const cacheKey = useMemo(() => {
    if (!text || text.length < 2) return null; // Don't highlight very short text

    const themeKey = getThemeKey(isDarkMode, isNegPrompt);
    // Optimize hash for better cache efficiency
    const textHash =
      text.length > 80 ? `${text.slice(0, 25)}...${text.slice(-25)}_${text.length}` : text;
    return `${themeKey}-${textHash}`;
  }, [text, isDarkMode, isNegPrompt]);

  // Check cache first
  const cachedContent = cacheKey ? getCachedContent(cacheKey) : null;

  const swrResult = useSWR(
    // Key logic: Only use SWR when we need to fetch (no cache and valid content)
    cacheKey && !cachedContent ? cacheKey : null,
    async (key: string) => {
      debugLog(`🎨 Starting highlighting for key: ${key.slice(0, 50)}...`);

      try {
        const highlighter = await initHighlighter(text);
        const themeKey = getThemeKey(isDarkMode, isNegPrompt);

        if (process.env.NODE_ENV === 'development') {
          debugLog(`🎨 Highlighting with theme: "${themeKey}"`);
        }

        const startTime = performance.now();
        const html = highlighter.codeToHtml(text, {
          lang: 'prompt',
          theme: themeKey,
          transformers: [codeTransformer],
        });
        const duration = performance.now() - startTime;

        debugLog(`✅ Highlighting completed in ${duration.toFixed(2)}ms`);

        // Cache the result
        setCachedContent(key, html);

        return html;
      } catch (error) {
        debugError('❌ Highlighting failed:', error);
        if (process.env.NODE_ENV === 'development') {
          debugLog('🔍 Debug info:', {
            isDarkMode,
            isNegPrompt,
            requestedTheme: getThemeKey(isDarkMode, isNegPrompt),
            textLength: text.length,
            textPreview: text.slice(0, 100) + '...',
          });
        }
        // Return original text on error
        return text;
      }
    },
    {
      // Optimized SWR configuration for highlighting
      dedupingInterval: 2000, // Prevent duplicate requests for 2 seconds
      errorRetryCount: 1, // Only retry once on error
      errorRetryInterval: 2000,

      // Don't retry on error automatically
      // Important: Return cached content immediately if available
      fallbackData: cachedContent || undefined,

      // Don't revalidate on network reconnect
      revalidateIfStale: false,

      // Wait 2 seconds before retry
      revalidateOnFocus: false,

      // Don't revalidate when window gains focus
      revalidateOnReconnect: false,

      // Don't revalidate stale data automatically
      shouldRetryOnError: false, // Use undefined instead of text for better loading state
    },
  );

  // Return cached content immediately if available, otherwise use SWR result
  if (cachedContent) {
    return {
      data: cachedContent,
      error: null,
      isLoading: false,
    };
  }

  // If we have very short text, just return it without highlighting
  if (!text || text.length < 2) {
    return {
      data: text,
      error: null,
      isLoading: false,
    };
  }

  return {
    data: swrResult.data,
    error: swrResult.error,
    isLoading: swrResult.isLoading,
  };
};

// Test basic highlighting functionality
export const testBasicHighlighting = async () => {
  debugLog('🧪 Testing basic highlighting...');

  try {
    const highlighter = await initHighlighter();
    const testText = 'masterpiece, best quality, 1girl, beautiful';
    const themeKey = 'light';

    debugLog('📝 Test text:', testText);
    debugLog('🎨 Theme:', themeKey);

    const html = highlighter.codeToHtml(testText, {
      lang: 'prompt',
      theme: themeKey,
      transformers: [codeTransformer],
    });

    debugLog('✅ Highlighting successful!');
    debugLog('📄 Generated HTML length:', html.length);

    return html;
  } catch (error) {
    debugError('❌ Basic highlighting test failed:', error);
    return null;
  }
};

// Make utilities globally available for debugging
if (typeof window !== 'undefined') {
  (window as any).clearHighlightCache = clearHighlightCache;
  (window as any).forceRefreshHighlighting = forceRefreshHighlighting;
  (window as any).testBasicHighlighting = testBasicHighlighting;
  (window as any).forceCompleteAllHighlighting = forceCompleteAllHighlighting;

  // Debug toggle functions
  (window as any).enableHighlightDebug = enableHighlightDebug;
  (window as any).disableHighlightDebug = disableHighlightDebug;
  (window as any).toggleHighlightDebug = toggleHighlightDebug;

  // Status check function
  (window as any).checkHighlightDebugStatus = () => {
    const isEnabled = HIGHLIGHT_DEBUG_ENABLED;
    console.log(`🔍 Highlight debugging is currently: ${isEnabled ? '🟢 ENABLED' : '🔴 DISABLED'}`);
    console.log(
      `💡 Use ${isEnabled ? 'disableHighlightDebug()' : 'enableHighlightDebug()'} to ${isEnabled ? 'turn off' : 'turn on'}`,
    );
    return isEnabled;
  };

  console.log('🛠️ Highlight system loaded with debug controls:');
  console.log('  🎛️ DEBUG CONTROLS (use these to toggle debug messages):');
  console.log('    - enableHighlightDebug() - Turn ON all debug messages');
  console.log('    - disableHighlightDebug() - Turn OFF all debug messages');
  console.log('    - toggleHighlightDebug() - Toggle debug on/off');
  console.log('    - checkHighlightDebugStatus() - Check current debug state');
  console.log('  📋 UTILITIES:');
  console.log('    - clearHighlightCache() - Clear all cached highlighting');
  console.log('    - forceRefreshHighlighting() - Force refresh all textareas');
  console.log('    - testBasicHighlighting() - Test core highlighting function');
  console.log('    - forceCompleteAllHighlighting() - Emergency: Force stop all loading');
  console.log('');
  console.log(
    '💡 Debug messages are currently: ' + (HIGHLIGHT_DEBUG_ENABLED ? '🟢 ENABLED' : '🔴 DISABLED'),
  );
  if (!HIGHLIGHT_DEBUG_ENABLED) {
    console.log('🔧 Run enableHighlightDebug() to see detailed debug information');
  }
}
