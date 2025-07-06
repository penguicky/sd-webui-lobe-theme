/**
 * Shiki Web Worker for off-main-thread syntax highlighting
 * Moves heavy Shiki processing to a dedicated worker thread
 */

// Conditional imports for better tree-shaking
import { createDynamicGrammar } from '@/modules/PromptHighlight/features/dynamicGrammar';
import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';

let createHighlighterCore: any;
let createOnigurumaEngine: any;

const loadShikiModules = async () => {
  if (!createHighlighterCore) {
    const [coreModule, engineModule] = await Promise.all([
      import('shiki/core'),
      import('shiki/engine/oniguruma'),
    ]);

    createHighlighterCore = coreModule.createHighlighterCore;
    createOnigurumaEngine = engineModule.createOnigurumaEngine;
  }

  return { createHighlighterCore, createOnigurumaEngine };
};

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
  private staticHighlighter: any = null;
  private dynamicHighlighterCache = new Map<string, any>();
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
      // Load Shiki modules conditionally
      const { createOnigurumaEngine: createEngine } = await loadShikiModules();

      // Optimized: Initialize minimal Oniguruma engine for prompt syntax only
      this.engine = await createEngine(async () => {
        // Load only core WASM module for better performance
        const wasmModule = await import('shiki/wasm');
        console.log('📦 Worker: Minimal Shiki WASM loaded for prompt syntax');
        return wasmModule;
      });

      // Optimized: Create static highlighter with minimal grammar
      const baseGrammar = prompt[0];
      if (!baseGrammar) {
        throw new Error('Base grammar not available');
      }

      const optimizedGrammar = {
        ...baseGrammar,
        
        // Filter patterns to essential ones for performance
patterns: baseGrammar.patterns?.filter((pattern: any) => {
          // Keep core patterns, exclude less critical ones like comments
          return pattern.name !== 'comment' || pattern.match !== '#.*';
        }) || [],
        
        // Keep minimal repository
repository: {},
      };

      // Load Shiki modules conditionally
      const { createHighlighterCore: createCore } = await loadShikiModules();

      this.staticHighlighter = await createCore({
        engine: this.engine,
        langs: [optimizedGrammar as any],
        themes: this.themes,
      });

      this.isInitialized = true;
      console.log('✅ Worker: Optimized Shiki engine initialized successfully');
    } catch (error) {
      throw new Error(`Failed to initialize optimized Shiki worker: ${error}`);
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

  private async getDynamicHighlighter(text: string): Promise<any> {
    const cacheKey = this.generateGrammarCacheKey(text);

    // Check cache first
    if (this.dynamicHighlighterCache.has(cacheKey)) {
      return this.dynamicHighlighterCache.get(cacheKey)!;
    }

    // Optimized: Get or create grammar with performance checks
    let grammar = this.grammarCache.get(cacheKey);
    if (!grammar) {
      // Only create dynamic grammar for complex patterns
      const hasComplexPatterns = text.includes('<') || text.includes('{') || text.includes('embedding:');

      if (hasComplexPatterns) {
        grammar = await createDynamicGrammar(text);
      } else {
        // Use static grammar for simple text to save processing
        grammar = prompt[0];
      }
      this.grammarCache.set(cacheKey, grammar);
    }

    // Optimized: Create highlighter with minimal grammar structure
    const baseGrammar = prompt[0];
    if (!baseGrammar) {
      throw new Error('Base grammar not available');
    }

    const optimizedGrammar = {
      ...grammar,
      
      // Limit patterns to essential ones for performance
patterns: grammar.patterns?.slice(0, 15) || baseGrammar.patterns || [],
      
      // Keep minimal repository
repository: {},
    };

    // Load Shiki modules conditionally
    const { createHighlighterCore: createCore } = await loadShikiModules();

    const highlighter = await createCore({
      engine: this.engine,
      langs: [optimizedGrammar],
      themes: this.themes,
    });

    // Optimized: Reduced cache size for better memory management
    if (this.dynamicHighlighterCache.size >= 3) { // Reduced from 5 to 3
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
