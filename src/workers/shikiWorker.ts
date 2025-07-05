/**
 * Shiki Web Worker for off-main-thread syntax highlighting
 * Moves heavy Shiki processing to a dedicated worker thread
 */

import { HighlighterCore, createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';

import { createDynamicGrammar } from '@/modules/PromptHighlight/features/dynamicGrammar';
import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';

// Worker message types
interface HighlightRequest {
  id: string;
  isDarkMode: boolean;
  isNegPrompt: boolean;
  text: string;
  type: 'highlight';
  useDynamicGrammar?: boolean;
}

interface HighlightResponse {
  error?: string;
  html?: string;
  id: string;
  type: 'highlight-result';
}

interface InitRequest {
  id: string;
  type: 'init';
}

interface InitResponse {
  error?: string;
  id: string;
  success: boolean;
  type: 'init-result';
}

type WorkerMessage = HighlightRequest | InitRequest;
type WorkerResponse = HighlightResponse | InitResponse;

// Worker state
class ShikiWorkerEngine {
  private engine: any = null;
  private staticHighlighter: HighlighterCore | null = null;
  private dynamicHighlighterCache = new Map<string, HighlighterCore>();
  private grammarCache = new Map<string, any>();
  private isInitialized = false;

  // Pre-computed themes for performance
  private readonly themes = [
    themeConfig(false, false), // light
    themeConfig(false, true), // lightNeg
    themeConfig(true, false), // dark
    themeConfig(true, true), // darkNeg
  ];

  async initialize(): Promise<void> {
    if (this.isInitialized) return;

    try {
      // Initialize the Oniguruma engine
      this.engine = await createOnigurumaEngine(() => import('shiki/wasm'));
      
      // Create static highlighter
      this.staticHighlighter = await createHighlighterCore({
        engine: this.engine,
        langs: [
          {
            ...prompt[0],
            repository: {}, // Required for Shiki v3
          } as any,
        ],
        themes: this.themes,
      });

      this.isInitialized = true;
    } catch (error) {
      throw new Error(`Failed to initialize Shiki worker: ${error}`);
    }
  }

  private getThemeKey(isDarkMode: boolean, isNegPrompt: boolean): string {
    if (isDarkMode && isNegPrompt) return 'darkNeg';
    if (isDarkMode && !isNegPrompt) return 'dark';
    if (!isDarkMode && isNegPrompt) return 'lightNeg';
    return 'light';
  }

  private generateGrammarCacheKey(text: string): string {
    // Create a hash-like key from the text content
    return text.slice(0, 100) + text.length;
  }

  private async getDynamicHighlighter(text: string): Promise<HighlighterCore> {
    const cacheKey = this.generateGrammarCacheKey(text);
    
    // Check cache first
    if (this.dynamicHighlighterCache.has(cacheKey)) {
      return this.dynamicHighlighterCache.get(cacheKey)!;
    }

    // Get or create grammar
    let grammar = this.grammarCache.get(cacheKey);
    if (!grammar) {
      grammar = await createDynamicGrammar(text);
      this.grammarCache.set(cacheKey, grammar);
    }

    // Create highlighter
    const highlighter = await createHighlighterCore({
      engine: this.engine,
      langs: [
        {
          ...grammar,
          repository: {}, // Required for Shiki v3
        },
      ],
      themes: this.themes,
    });

    // Cache with size limit
    if (this.dynamicHighlighterCache.size >= 5) {
      const firstKey = this.dynamicHighlighterCache.keys().next().value;
      if (firstKey !== undefined) {
        this.dynamicHighlighterCache.delete(firstKey);
      }
    }

    this.dynamicHighlighterCache.set(cacheKey, highlighter);
    return highlighter;
  }

  async highlight(
    text: string,
    isDarkMode: boolean,
    isNegPrompt: boolean,
    useDynamicGrammar = false
  ): Promise<string> {
    if (!this.isInitialized) {
      throw new Error('Shiki worker not initialized');
    }

    const highlighter = useDynamicGrammar && text.length > 0
      ? await this.getDynamicHighlighter(text)
      : this.staticHighlighter!;

    const themeKey = this.getThemeKey(isDarkMode, isNegPrompt);

    return highlighter.codeToHtml(text, {
      lang: 'prompt',
      theme: themeKey,
    });
  }

  // Cleanup method for memory management
  cleanup(): void {
    this.dynamicHighlighterCache.clear();
    this.grammarCache.clear();
  }

  // Get cache statistics
  getCacheStats() {
    return {
      dynamicHighlighters: this.dynamicHighlighterCache.size,
      grammars: this.grammarCache.size,
      isInitialized: this.isInitialized,
    };
  }
}

// Global worker instance
const workerEngine = new ShikiWorkerEngine();

// Message handler
self.onmessage = async (event: MessageEvent<WorkerMessage>) => {
  const { data } = event;

  try {
    switch (data.type) {
      case 'init': {
        await workerEngine.initialize();
        const response: InitResponse = {
          id: data.id,
          success: true,
          type: 'init-result',
        };
        self.postMessage(response);
        break;
      }

      case 'highlight': {
        const html = await workerEngine.highlight(
          data.text,
          data.isDarkMode,
          data.isNegPrompt,
          data.useDynamicGrammar
        );
        
        const response: HighlightResponse = {
          html,
          id: data.id,
          type: 'highlight-result',
        };
        self.postMessage(response);
        break;
      }

      default: {
        throw new Error(`Unknown message type: ${(data as any).type}`);
      }
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    if (data.type === 'init') {
      const response: InitResponse = {
        error: errorMessage,
        id: data.id,
        success: false,
        type: 'init-result',
      };
      self.postMessage(response);
    } else if (data.type === 'highlight') {
      const response: HighlightResponse = {
        error: errorMessage,
        id: data.id,
        type: 'highlight-result',
      };
      self.postMessage(response);
    }
  }
};

// Periodic cleanup to prevent memory leaks
setInterval(() => {
  // Clean up old cache entries periodically
  if (workerEngine.getCacheStats().dynamicHighlighters > 10) {
    workerEngine.cleanup();
  }
}, 60_000); // Every minute

export type { HighlightRequest, HighlightResponse,WorkerMessage, WorkerResponse };
