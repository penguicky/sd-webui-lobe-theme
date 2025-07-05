/**
 * Shiki Web Worker Manager
 * Manages communication with the Shiki Web Worker for off-main-thread highlighting
 */

import type { HighlightRequest, WorkerResponse } from '@/workers/shikiWorker';

// Performance tracking
interface PerformanceMetrics {
  averageTime: number;
  cacheHits: number;
  errors: number;
  totalRequests: number;
  totalTime: number;
}

class ShikiWorkerManager {
  private static instance: ShikiWorkerManager | null = null;
  private worker: Worker | null = null;
  private isInitialized = false;
  private initPromise: Promise<void> | null = null;
  private pendingRequests = new Map<string, {
    reject: (_error: Error) => void;
    resolve: (_html: string) => void;
    startTime: number;
  }>();
  
  // Performance tracking
  private metrics: PerformanceMetrics = {
    averageTime: 0,
    cacheHits: 0,
    errors: 0,
    totalRequests: 0,
    totalTime: 0,
  };

  // Request cache for identical requests
  private requestCache = new Map<string, {
    html: string;
    timestamp: number;
  }>();

  private readonly CACHE_TTL = 5 * 60 * 1000; // 5 minutes
  private readonly MAX_CACHE_SIZE = 100;

  static getInstance(): ShikiWorkerManager {
    if (!ShikiWorkerManager.instance) {
      ShikiWorkerManager.instance = new ShikiWorkerManager();
    }
    return ShikiWorkerManager.instance;
  }

  private constructor() {
    // Private constructor for singleton
  }

  private generateRequestId(): string {
    return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
  }

  private generateCacheKey(text: string, isDarkMode: boolean, isNegPrompt: boolean, useDynamicGrammar: boolean): string {
    return `${text.slice(0, 50)}-${text.length}-${isDarkMode}-${isNegPrompt}-${useDynamicGrammar}`;
  }

  private cleanupCache(): void {
    const now = Date.now();
    const expiredKeys: string[] = [];

    for (const [key, value] of this.requestCache.entries()) {
      if (now - value.timestamp > this.CACHE_TTL) {
        expiredKeys.push(key);
      }
    }

    expiredKeys.forEach(key => this.requestCache.delete(key));

    // Limit cache size
    if (this.requestCache.size > this.MAX_CACHE_SIZE) {
      const entries = Array.from(this.requestCache.entries());
      entries.sort((a, b) => a[1].timestamp - b[1].timestamp);
      const toDelete = entries.slice(0, entries.length - this.MAX_CACHE_SIZE);
      toDelete.forEach(([key]) => this.requestCache.delete(key));
    }
  }

  private createWorker(): Worker | null {
    try {
      // Check if Web Workers are supported and if we're in a compatible environment
      if (typeof Worker === 'undefined') {
        console.warn('Web Workers not supported in this environment');
        return null;
      }

      // In production build with IIFE format, Web Workers may not be available
      // This is a graceful fallback approach
      const workerPath = './workers/shikiWorker.js';
      return new Worker(workerPath, { type: 'module' });
    } catch (error) {
      console.warn('Failed to create Web Worker, will use main thread fallback:', error);
      return null;
    }
  }

  async initialize(): Promise<void> {
    if (this.isInitialized) return;
    if (this.initPromise) return this.initPromise;

    this.initPromise = (async () => {
      try {
        this.worker = this.createWorker();

        // If worker creation failed, mark as initialized but without worker
        if (!this.worker) {
          console.warn('Web Worker not available, will use main thread fallback for all requests');
          this.isInitialized = true;
          // Start periodic cache cleanup
          setInterval(() => this.cleanupCache(), 60_000); // Every minute
          return;
        }

        // Set up message handler
        this.worker.onmessage = (event: MessageEvent<WorkerResponse>) => {
          this.handleWorkerMessage(event.data);
        };

        this.worker.onerror = (error) => {
          console.error('Shiki Worker error:', error);
          this.metrics.errors++;
        };

        // Initialize the worker
        const initId = this.generateRequestId();
        const initPromise = new Promise<void>((resolve, reject) => {
          const timeout = setTimeout(() => {
            reject(new Error('Worker initialization timeout'));
          }, 10_000); // 10 second timeout

          this.pendingRequests.set(initId, {
            reject: (error) => {
              clearTimeout(timeout);
              reject(error);
            },
            resolve: () => {
              clearTimeout(timeout);
              resolve();
            },
            startTime: Date.now(),
          });
        });

        this.worker.postMessage({
          id: initId,
          type: 'init',
        });

        await initPromise;
        this.isInitialized = true;

        // Start periodic cache cleanup
        setInterval(() => this.cleanupCache(), 60_000); // Every minute

      } catch (error) {
        console.warn('Worker initialization failed, will use main thread fallback:', error);
        this.worker = null;
        this.isInitialized = true; // Mark as initialized but without worker
        this.initPromise = null;
        // Start periodic cache cleanup
        setInterval(() => this.cleanupCache(), 60_000); // Every minute
      }
    })();

    return this.initPromise;
  }

  private handleWorkerMessage(data: WorkerResponse): void {
    const request = this.pendingRequests.get(data.id);
    if (!request) return;

    this.pendingRequests.delete(data.id);

    if (data.type === 'init-result') {
      if (data.success) {
        request.resolve(''); // Init doesn't return HTML
      } else {
        request.reject(new Error(data.error || 'Worker initialization failed'));
      }
    } else if (data.type === 'highlight-result') {
      const duration = Date.now() - request.startTime;
      this.updateMetrics(duration, !data.error);

      if (data.error) {
        request.reject(new Error(data.error));
      } else if (data.html) {
        request.resolve(data.html);
      } else {
        request.reject(new Error('No HTML returned from worker'));
      }
    }
  }

  private updateMetrics(duration: number, success: boolean): void {
    this.metrics.totalRequests++;
    if (success) {
      this.metrics.totalTime += duration;
      this.metrics.averageTime = this.metrics.totalTime / (this.metrics.totalRequests - this.metrics.errors);
    } else {
      this.metrics.errors++;
    }
  }

  async highlight(
    text: string,
    isDarkMode: boolean,
    isNegPrompt: boolean,
    useDynamicGrammar = false
  ): Promise<string> {
    // Check cache first
    const cacheKey = this.generateCacheKey(text, isDarkMode, isNegPrompt, useDynamicGrammar);
    const cached = this.requestCache.get(cacheKey);

    if (cached && Date.now() - cached.timestamp < this.CACHE_TTL) {
      this.metrics.cacheHits++;
      return cached.html;
    }

    // Ensure worker is initialized
    await this.initialize();

    // If no worker is available, throw error to trigger fallback
    if (!this.worker) {
      throw new Error('Web Worker not available, use main thread fallback');
    }

    const requestId = this.generateRequestId();
    const startTime = Date.now();

    const promise = new Promise<string>((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pendingRequests.delete(requestId);
        reject(new Error('Highlight request timeout'));
      }, 15_000); // 15 second timeout

      this.pendingRequests.set(requestId, {
        reject: (error) => {
          clearTimeout(timeout);
          reject(error);
        },
        resolve: (html) => {
          clearTimeout(timeout);
          // Cache the result
          this.requestCache.set(cacheKey, {
            html,
            timestamp: Date.now(),
          });
          resolve(html);
        },
        startTime,
      });
    });

    const message: HighlightRequest = {
      id: requestId,
      isDarkMode,
      isNegPrompt,
      text,
      type: 'highlight',
      useDynamicGrammar,
    };

    this.worker.postMessage(message);
    return promise;
  }

  // Fallback to main thread highlighting if worker fails
  async highlightWithFallback(
    text: string,
    isDarkMode: boolean,
    isNegPrompt: boolean,
    useDynamicGrammar = false,
    fallbackFn?: () => Promise<string>
  ): Promise<string> {
    try {
      return await this.highlight(text, isDarkMode, isNegPrompt, useDynamicGrammar);
    } catch (error) {
      console.warn('Worker highlighting failed, falling back to main thread:', error);
      if (fallbackFn) {
        return await fallbackFn();
      }
      // Return plain text as ultimate fallback
      return text;
    }
  }

  // Get performance metrics
  getMetrics(): PerformanceMetrics & { cacheSize: number; isInitialized: boolean } {
    return {
      ...this.metrics,
      cacheSize: this.requestCache.size,
      isInitialized: this.isInitialized,
    };
  }

  // Cleanup method
  destroy(): void {
    if (this.worker) {
      this.worker.terminate();
      this.worker = null;
    }
    this.pendingRequests.clear();
    this.requestCache.clear();
    this.isInitialized = false;
    this.initPromise = null;
    ShikiWorkerManager.instance = null;
  }

  // Pre-warm the worker
  async preWarm(): Promise<void> {
    try {
      await this.initialize();
      // Highlight a small sample to warm up the worker
      await this.highlight('test', false, false, false);
    } catch (error) {
      console.warn('Failed to pre-warm Shiki worker:', error);
    }
  }
}

// Export singleton instance
export const shikiWorkerManager = ShikiWorkerManager.getInstance();
export { ShikiWorkerManager };
export type { PerformanceMetrics };
