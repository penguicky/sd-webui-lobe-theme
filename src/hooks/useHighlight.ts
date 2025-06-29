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

// Optimize theme key generation
const getThemeKey = (isDarkMode: boolean, isNegPrompt: boolean): string => {
  return `${isDarkMode ? 'dark' : 'light'}${isNegPrompt ? '-neg' : ''}`;
};

// Memoized transformer to avoid recreation
const codeTransformer = {
  code(node: any) {
    node.properties.id = 'lobe_highlighter';
  },
};

// Simple content cache
const contentCache = new Map<string, { html: string; timestamp: number }>();
const CACHE_TTL = 10 * 60 * 1000; // 10 minutes
const MAX_CACHE_SIZE = 100;

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

export const useHighlight = (text: string, isDarkMode: boolean, isNegPrompt: boolean) => {
  // Memoize cache key to prevent unnecessary re-renders
  const cacheKey = useMemo(() => {
    const themeKey = getThemeKey(isDarkMode, isNegPrompt);
    // Include text length and hash for better cache efficiency
    const textHash =
      text.length > 50 ? `${text.slice(0, 20)}...${text.slice(-20)}_${text.length}` : text;
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
        return text;
      }
    },
    {
      dedupingInterval: 5000,

      // 5 seconds
      errorRetryCount: 2,

      errorRetryInterval: 1000,

      fallbackData: cachedContent || text,
      // Optimize SWR configuration
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    },
  );
};
