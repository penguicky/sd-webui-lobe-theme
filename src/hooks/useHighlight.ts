import { useMemo } from 'react';
import { HighlighterCore, createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import useSWR from 'swr';

import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';

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
  console.log('🎨 Theme names registered:', {
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
const initHighlighter = async (): Promise<HighlighterCore> => {
  if (globalHighlighter) {
    return globalHighlighter;
  }

  // Ensure only one initialization happens
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
          },
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

// Simple content cache with shorter TTL for responsiveness
const contentCache = new Map<string, { html: string; timestamp: number }>();
const CACHE_TTL = 2 * 60 * 1000; // Reduced to 2 minutes for more frequent updates
const MAX_CACHE_SIZE = 50; // Reduced cache size for better memory management

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
  if (contentCache.size >= MAX_CACHE_SIZE) {
    // Remove oldest entries
    const entries = Array.from(contentCache.entries());
    entries.slice(0, Math.floor(MAX_CACHE_SIZE * 0.3)).forEach(([k]) => {
      contentCache.delete(k);
    });
  }

  contentCache.set(key, {
    html,
    timestamp: Date.now(),
  });
};

// Utility to clear cache for immediate updates (for debugging)
export const clearHighlightCache = () => {
  contentCache.clear();
  console.log('🧹 Highlight cache cleared');
};

// Force refresh all highlighting
export const forceRefreshHighlighting = () => {
  clearHighlightCache();
  // Trigger a re-render by dispatching input events on all textareas
  const textareas = document.querySelectorAll('textarea');
  textareas.forEach((textarea) => {
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  });
  console.log('🔄 Forced highlighting refresh on all textareas');
};

// Simple test function to check if highlighting works
export const testBasicHighlighting = async () => {
  console.log('🧪 Testing basic highlighting...');

  try {
    const highlighter = await initHighlighter();
    const testText = 'masterpiece, best quality, 1girl, beautiful';
    const themeKey = 'light';

    console.log('📝 Test text:', testText);
    console.log('🎨 Theme:', themeKey);

    const html = highlighter.codeToHtml(testText, {
      lang: 'prompt',
      theme: themeKey,
      transformers: [codeTransformer],
    });

    console.log('✅ Highlighting successful!');
    console.log('📄 Generated HTML length:', html.length);

    return html;
  } catch (error) {
    console.error('❌ Basic highlighting test failed:', error);
    return null;
  }
};

// Force all highlighting to complete (emergency function)
export const forceCompleteAllHighlighting = () => {
  console.log('🚨 EMERGENCY: Forcing all highlighting to complete...');

  // Clear all caches
  clearHighlightCache();

  // Find all syntax highlighter components and force them to show plain text
  const highlightContainers = document.querySelectorAll('[data-code-type="highlighter"]');
  highlightContainers.forEach((container, index) => {
    console.log(`🔧 Forcing container ${index} to show plain text`);

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
        const textareaSelector =
          container.dataset.codeType === 'highlighter' ? 'textarea' : null;
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

  console.log('✅ Emergency highlighting completion done');
};

// Make cache clearing available globally for debugging
if (typeof window !== 'undefined') {
  (window as any).clearHighlightCache = clearHighlightCache;
  (window as any).forceRefreshHighlighting = forceRefreshHighlighting;
  (window as any).testBasicHighlighting = testBasicHighlighting;
  (window as any).forceCompleteAllHighlighting = forceCompleteAllHighlighting;
}

export const useHighlight = (text: string, isDarkMode: boolean, isNegPrompt: boolean) => {
  // Memoize cache key to prevent unnecessary re-renders
  const cacheKey = useMemo(() => {
    const themeKey = getThemeKey(isDarkMode, isNegPrompt);
    // Use exact text for small content, hash for large content with better sensitivity
    const textHash =
      text.length > 100 ? `${text.slice(0, 30)}...${text.slice(-30)}_${text.length}` : text;
    return `${themeKey}-${textHash}`;
  }, [text, isDarkMode, isNegPrompt]);

  // Check cache first
  const cachedContent = getCachedContent(cacheKey);

  return useSWR(
    cachedContent ? null : cacheKey, // Skip SWR if we have cached content
    async () => {
      // Skip highlighting for very short text
      if (text.length < 2) {
        return text;
      }

      try {
        const highlighter = await initHighlighter();
        const themeKey = getThemeKey(isDarkMode, isNegPrompt);

        if (process.env.NODE_ENV === 'development') {
          console.log(`🎨 Highlighting with theme: "${themeKey}"`);
        }

        const html = highlighter.codeToHtml(text, {
          lang: 'prompt',
          theme: themeKey,
          transformers: [codeTransformer],
        });

        // Cache the result
        setCachedContent(cacheKey, html);

        return html;
      } catch (error) {
        console.warn('Highlighting failed:', error);
        if (process.env.NODE_ENV === 'development') {
          console.log('🔍 Debug info:', {
            isDarkMode,
            isNegPrompt,
            requestedTheme: getThemeKey(isDarkMode, isNegPrompt),
            text: text.slice(0, 100) + '...',
          });
        }
        return text;
      }
    },
    {
      dedupingInterval: 1000,
      
      // Reduced from 5000ms for better responsiveness
errorRetryCount: 2,
      

errorRetryInterval: 1000,
      

fallbackData: cachedContent || text, 
      
// Disable background revalidation for immediate response
revalidateIfStale: false,
      
// More responsive SWR configuration for real-time highlighting
revalidateOnFocus: false,
      
      revalidateOnMount: true,
      revalidateOnReconnect: false,
    },
  );
};
