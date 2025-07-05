import { useMemo } from 'react';
import { HighlighterCore, createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import useSWR from 'swr';

import { createDynamicGrammar } from '@/modules/PromptHighlight/features/dynamicGrammar';
import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';
import { shikiWorkerManager } from '@/utils/shikiWorkerManager';

// Import centralized debug utilities
import { debugError, debugLog, debugWarn } from '../modules/PromptHighlight/utils/debug';

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

// Store globally for cross-component access (development only)
if (__DEV__ && typeof window !== 'undefined') {
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

export const toggleHighlightDebug = () => {
  HIGHLIGHT_DEBUG_ENABLED = !HIGHLIGHT_DEBUG_ENABLED;
  if (__DEV__ && typeof window !== 'undefined') {
    (window as any).HIGHLIGHT_DEBUG_STATE?.set(HIGHLIGHT_DEBUG_ENABLED);
  }
  if (__DEV__) {
    console.log(`🔄 Highlight debugging ${HIGHLIGHT_DEBUG_ENABLED ? 'ENABLED' : 'DISABLED'}`);
    console.log(`💡 Debug messages are now: ${HIGHLIGHT_DEBUG_ENABLED ? 'ON' : 'OFF'}`);
  }
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

// Enhanced Shiki Engine Singleton with improved caching and performance
class ShikiEngineManager {
  private static instance: ShikiEngineManager | null = null;
  private engine: any = null;
  private staticHighlighter: HighlighterCore | null = null;
  private dynamicHighlighterCache = new Map<string, HighlighterCore>();
  private grammarCache = new Map<string, any>();
  private initPromise: Promise<any> | null = null;
  private enginePromise: Promise<any> | null = null;

  // Pre-computed themes for performance
  private readonly themes = [
    themeConfig(false, false), // light
    themeConfig(false, true), // lightNeg
    themeConfig(true, false), // dark
    themeConfig(true, true), // darkNeg
  ];

  private constructor() {
    // Debug theme names in development
    if (process.env.NODE_ENV === 'development') {
      debugLog('🎨 ShikiEngineManager initialized with themes:', {
        dark: this.themes[2].name,
        darkNeg: this.themes[3].name,
        light: this.themes[0].name,
        lightNeg: this.themes[1].name,
      });
    }

    // Set up periodic cleanup to prevent memory leaks
    setInterval(() => {
      if (this.dynamicHighlighterCache.size > 3) {
        debugLog('🧹 Running periodic Shiki cleanup...');
        // Keep only the 3 most recent highlighters
        const entries = Array.from(this.dynamicHighlighterCache.entries());
        const toRemove = entries.slice(0, - 3);

        for (const [key, highlighter] of toRemove) {
          if (highlighter && typeof highlighter.dispose === 'function') {
            highlighter.dispose();
          }
          this.dynamicHighlighterCache.delete(key);
        }
      }
    }, 2 * 60 * 1000); // Every 2 minutes
  }

  static getInstance(): ShikiEngineManager {
    if (!ShikiEngineManager.instance) {
      ShikiEngineManager.instance = new ShikiEngineManager();
    }
    return ShikiEngineManager.instance;
  }

  // Singleton engine creation with proper error handling
  private async getEngine() {
    if (this.engine) {
      return this.engine;
    }

    if (this.enginePromise) {
      return this.enginePromise;
    }

    this.enginePromise = (async () => {
      try {
        this.engine = await createOnigurumaEngine(() => import('shiki/wasm'));
        debugLog('✅ Shiki engine initialized successfully');
        return this.engine;
      } catch (error) {
        debugWarn('❌ Failed to initialize Shiki engine:', error);
        this.enginePromise = null; // Reset to allow retry
        throw error;
      }
    })();

    return this.enginePromise;
  }

  // Cache compiled grammars for better performance
  private getCachedGrammar(text: string): any | null {
    const cacheKey = this.generateGrammarCacheKey(text);
    return this.grammarCache.get(cacheKey) || null;
  }

  private setCachedGrammar(text: string, grammar: any): void {
    const cacheKey = this.generateGrammarCacheKey(text);
    // Limit cache size to prevent memory bloat
    if (this.grammarCache.size >= 50) {
      const firstKey = this.grammarCache.keys().next().value;
      if (firstKey !== undefined) {
        this.grammarCache.delete(firstKey);
      }
    }
    this.grammarCache.set(cacheKey, grammar);
  }

  private generateGrammarCacheKey(text: string): string {
    // Create a hash-like key based on unique terms in the text
    const terms = text.match(/[A-Z_a-z][\w.-]*/g) || [];
    const uniqueTerms = [...new Set(terms)].sort();
    return uniqueTerms.slice(0, 20).join('|'); // Limit key length
  }

  // Get or create dynamic highlighter with caching
  async getDynamicHighlighter(text: string): Promise<HighlighterCore> {
    const cacheKey = this.generateGrammarCacheKey(text);

    // Check if we have a cached highlighter for this text pattern
    if (this.dynamicHighlighterCache.has(cacheKey)) {
      return this.dynamicHighlighterCache.get(cacheKey)!;
    }

    try {
      const engine = await this.getEngine();

      // Try to get cached grammar first
      let grammar = this.getCachedGrammar(text);
      if (!grammar) {
        grammar = await createDynamicGrammar(text);
        this.setCachedGrammar(text, grammar);
      }

      const highlighter = await createHighlighterCore({
        engine,
        langs: [
          {
            ...grammar,
            repository: {}, // Required for Shiki v3
          },
        ],
        themes: this.themes,
      });

      // Cache the highlighter (limit cache size to prevent memory leaks)
      if (this.dynamicHighlighterCache.size >= 5) { // Reduced from 10 to 5
        const firstKey = this.dynamicHighlighterCache.keys().next().value;
        if (firstKey !== undefined) {
          const oldHighlighter = this.dynamicHighlighterCache.get(firstKey);
          if (oldHighlighter && typeof oldHighlighter.dispose === 'function') {
            oldHighlighter.dispose(); // Properly dispose of old highlighter
          }
          this.dynamicHighlighterCache.delete(firstKey);
        }
      }
      this.dynamicHighlighterCache.set(cacheKey, highlighter);

      return highlighter;
    } catch (error) {
      debugWarn('⚠️ Failed to create dynamic highlighter, falling back to static:', error);
      return this.getStaticHighlighter();
    }
  }

  // Get or create static highlighter (singleton)
  async getStaticHighlighter(): Promise<HighlighterCore> {
    if (this.staticHighlighter) {
      return this.staticHighlighter;
    }

    if (this.initPromise) {
      return this.initPromise;
    }

    this.initPromise = (async () => {
      try {
        const engine = await this.getEngine();

        const highlighter = await createHighlighterCore({
          engine,
          langs: [
            {
              ...prompt[0],
              repository: {}, // Required for Shiki v3
            } as any,
          ],
          themes: this.themes,
        });

        this.staticHighlighter = highlighter;
        debugLog('✅ Static highlighter initialized successfully');
        return highlighter;
      } catch (error) {
        this.initPromise = null; // Allow retry on failure
        debugWarn('❌ Failed to initialize static highlighter:', error);
        throw error;
      }
    })();

    return this.initPromise;
  }

  // Pre-warm the engine and static highlighter for better performance
  async preWarm(): Promise<void> {
    try {
      await this.getEngine();
      // Don't await static highlighter to avoid blocking
      this.getStaticHighlighter().catch((error) => {
        debugWarn('⚠️ Failed to pre-warm static highlighter:', error);
      });
    } catch (error) {
      debugWarn('⚠️ Failed to pre-warm Shiki engine:', error);
    }
  }

  // Clear caches for memory management
  clearCaches(): void {
    this.dynamicHighlighterCache.clear();
    this.grammarCache.clear();
    debugLog('🧹 Shiki caches cleared');
  }

  // Get cache statistics for debugging
  getCacheStats() {
    return {
      dynamicHighlighters: this.dynamicHighlighterCache.size,
      grammars: this.grammarCache.size,
      hasEngine: !!this.engine,
      hasStaticHighlighter: !!this.staticHighlighter,
    };
  }

  // Cleanup method to dispose of highlighters and prevent memory leaks
  cleanup() {
    // Dispose of dynamic highlighters
    for (const highlighter of this.dynamicHighlighterCache.values()) {
      if (highlighter && typeof highlighter.dispose === 'function') {
        highlighter.dispose();
      }
    }
    this.dynamicHighlighterCache.clear();

    // Dispose of static highlighter
    if (this.staticHighlighter && typeof this.staticHighlighter.dispose === 'function') {
      this.staticHighlighter.dispose();
      this.staticHighlighter = null;
    }

    // Clear caches
    this.grammarCache.clear();

    debugLog('🧹 ShikiEngineManager cleanup completed');
  }
}

// Global instance
const shikiManager = ShikiEngineManager.getInstance();

// Export for external access (e.g., pre-warming)
export { ShikiEngineManager };

// Optimized highlighter initialization function (fallback for Web Worker)
const initHighlighter = async (text?: string): Promise<HighlighterCore> => {
  const shouldUseDynamicGrammar = text && text.length > 0;

  if (shouldUseDynamicGrammar) {
    return shikiManager.getDynamicHighlighter(text);
  } else {
    return shikiManager.getStaticHighlighter();
  }
};

// Web Worker-based highlighting function
const highlightWithWorker = async (
  text: string,
  isDarkMode: boolean,
  isNegPrompt: boolean
): Promise<string> => {
  const shouldUseDynamicGrammar = text && text.length > 0;

  // Fallback function for when worker fails
  const fallbackFn = async (): Promise<string> => {
    try {
      const highlighter = await initHighlighter(text);
      const themeKey = getThemeKey(isDarkMode, isNegPrompt);

      return highlighter.codeToHtml(text, {
        lang: 'prompt',
        theme: themeKey,
        transformers: [codeTransformer],
      });
    } catch (error) {
      debugError('❌ Fallback highlighting failed:', error);
      return text; // Return plain text as ultimate fallback
    }
  };

  return shikiWorkerManager.highlightWithFallback(
    text,
    isDarkMode,
    isNegPrompt,
    !!shouldUseDynamicGrammar,
    fallbackFn
  );
};

// Enhanced cache with WeakMap for automatic cleanup and better memory management
class HighlightCache {
  private contentCache = new Map<string, { html: string; timestamp: number }>();
  private elementCache = new WeakMap<Element, string>(); // Automatic cleanup when elements are removed
  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes
  private readonly MAX_CACHE_SIZE = 80;
  private cleanupInterval: NodeJS.Timeout | null = null;

  constructor() {
    // Start periodic cleanup
    this.startPeriodicCleanup();
  }

  private startPeriodicCleanup(): void {
    // Clean up expired entries every 2 minutes
    this.cleanupInterval = setInterval(
      () => {
        this.cleanupExpiredEntries();
      },
      2 * 60 * 1000,
    );
  }

  private cleanupExpiredEntries(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, value] of this.contentCache.entries()) {
      if (now - value.timestamp > this.CACHE_TTL) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach((key) => this.contentCache.delete(key));

    if (expiredKeys.length > 0) {
      debugLog(`🧹 Cleaned up ${expiredKeys.length} expired cache entries`);
    }
  }

  getCachedContent(key: string): string | null {
    const cached = this.contentCache.get(key);
    if (!cached) return null;

    if (Date.now() - cached.timestamp > this.CACHE_TTL) {
      this.contentCache.delete(key);
      return null;
    }

    return cached.html;
  }

  setCachedContent(key: string, html: string): void {
    // Clean up old entries if cache is full
    if (this.contentCache.size >= this.MAX_CACHE_SIZE) {
      const entries = Array.from(this.contentCache.entries());
      // Sort by timestamp and remove oldest 30%
      entries
        .sort((a, b) => a[1].timestamp - b[1].timestamp)
        .slice(0, Math.floor(this.MAX_CACHE_SIZE * 0.3))
        .forEach(([k]) => this.contentCache.delete(k));
    }

    this.contentCache.set(key, { html, timestamp: Date.now() });
  }

  // WeakMap-based element caching for automatic cleanup
  getElementCache(element: Element): string | undefined {
    return this.elementCache.get(element);
  }

  setElementCache(element: Element, value: string): void {
    this.elementCache.set(element, value);
  }

  // Clear all caches
  clearAll(): void {
    this.contentCache.clear();
    // WeakMap doesn't need manual clearing
    debugLog('🧹 All highlight caches cleared');
  }

  // Get cache statistics
  getStats() {
    return {
      cacheTTL: this.CACHE_TTL,
      contentCacheSize: this.contentCache.size,
      maxCacheSize: this.MAX_CACHE_SIZE,
    };
  }

  // Cleanup method for proper disposal
  dispose(): void {
    if (this.cleanupInterval) {
      clearInterval(this.cleanupInterval);
      this.cleanupInterval = null;
    }
    this.clearAll();
  }
}

// Global cache instance
const highlightCache = new HighlightCache();

// Convenience functions for backward compatibility
const getCachedContent = (key: string): string | null => highlightCache.getCachedContent(key);
const setCachedContent = (key: string, html: string): void =>
  highlightCache.setCachedContent(key, html);

// Clear cache utility
export const clearHighlightCache = () => {
  highlightCache.clearAll();
  shikiManager.clearCaches();
  debugLog('🧹 All highlight caches cleared');
};

// Force refresh all highlighting
export const forceRefreshHighlighting = () => {
  clearHighlightCache();
  // Trigger re-render by dispatching events on textareas
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach((textarea) => {
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  });
  // Only log refresh when debug is enabled
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
        // Try Web Worker first, fallback to main thread if needed
        const html = await highlightWithWorker(text, isDarkMode, isNegPrompt);

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
