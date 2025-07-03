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

// =============================================================================
// CACHE KEY UTILITIES
// =============================================================================

/**
 * Generate a hash for weight syntax patterns to ensure cache invalidation
 * when weight values change (e.g., :1.1 to :1.5)
 */
function getWeightSyntaxHash(text: string): string {
  // Extract all weight syntax patterns like (term:1.2), [term:0.8], or (term:-0.5)
  // Fixed regex to properly match weight patterns with optional negative signs
  const weightPatterns = text.match(/[([]\s*[^():[\]]+\s*:-?\d*\.?\d+\s*[)\]]/g) || [];

  // Create a simple hash from the weight patterns
  if (weightPatterns.length === 0) return '0';

  return weightPatterns
    .map((pattern) => pattern.replaceAll(/\s+/g, '')) // Remove whitespace for consistency
    .sort() // Sort for consistent hashing
    .join('|')
    .slice(0, 20); // Limit length to prevent overly long cache keys
}

// Store globally for cross-component access
if (typeof window !== 'undefined') {
  (window as any).HIGHLIGHT_DEBUG_STATE = {
    get: () => HIGHLIGHT_DEBUG_ENABLED,
    set: (value: boolean) => {
      HIGHLIGHT_DEBUG_ENABLED = value;
    },
  };

  // Global function to test weight syntax hash
  (window as any).testWeightSyntaxHash = (text: string) => {
    console.log('🧪 Testing weight syntax hash:', {
      input: text,
      result: getWeightSyntaxHash(text),
    });
    return getWeightSyntaxHash(text);
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
    // Create a more sensitive hash that includes weight syntax patterns
    // This ensures cache invalidation when weight values change
    const weightHash = getWeightSyntaxHash(text);
    const textHash =
      text.length > 80
        ? `${text.slice(0, 25)}...${text.slice(-25)}_${text.length}_${weightHash}`
        : text;
    const key = `${themeKey}-${textHash}`;

    return key;
  }, [text, isDarkMode, isNegPrompt]);

  // Cache will be handled inside SWR fetcher for better invalidation control

  const swrResult = useSWR(
    // Key logic: Always use SWR with cache key to ensure proper invalidation
    cacheKey,
    async (key: string) => {
      // Check if we have cached content for this exact key
      const existingCache = getCachedContent(key);
      if (existingCache) {
        if (process.env.NODE_ENV === 'development') {
          console.log('📦 Using cached content:', {
            cacheExists: true,
            key: key.slice(0, 60) + (key.length > 60 ? '...' : ''),
          });
        }
        return existingCache;
      }

      try {
        const highlighter = await initHighlighter(text);
        const themeKey = getThemeKey(isDarkMode, isNegPrompt);

        const html = highlighter.codeToHtml(text, {
          lang: 'prompt',
          theme: themeKey,
          transformers: [codeTransformer],
        });

        // Cache the result
        setCachedContent(key, html);

        return html;
      } catch (error) {
        debugError('❌ Highlighting failed:', error);

        // Return original text on error
        return text;
      }
    },
    {
      // Optimized SWR configuration for highlighting
      dedupingInterval: 1000, // Reduced for faster cache invalidation
      errorRetryCount: 1, // Only retry once on error
      errorRetryInterval: 2000,

      // IMPORTANT: Allow revalidation when cache key changes
      revalidateIfStale: true,

      // Enable to allow cache invalidation
      // Don't revalidate on focus/reconnect to avoid unnecessary requests
      revalidateOnFocus: false,

      revalidateOnReconnect: false,

      // Don't retry on error automatically
      shouldRetryOnError: false,
    },
  );

  // Let SWR handle caching and invalidation properly

  // If we have very short text, just return it without highlighting
  if (!text || text.length < 2) {
    return {
      data: text,
      error: null,
      isLoading: false,
    };
  }

  const result = {
    data: swrResult.data,
    error: swrResult.error,
    isLoading: swrResult.isLoading,
  };

  return result;
};
