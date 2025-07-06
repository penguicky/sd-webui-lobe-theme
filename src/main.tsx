import { consola } from 'consola';
import { createRoot } from 'react-dom/client';

// Import critical CSS first for immediate rendering
import './styles/critical.css';

import Page from './app/page';
import { initTieredLoading } from './utils/tieredLoading';
import { initMemoryManagement } from './utils/memoryManagement';
import { trackProgressiveLoadingMetrics } from './hooks/usePerformanceMonitoring';
import { initIntelligentPreloading } from './utils/intelligentPreloading';

// Optimized Shiki engine pre-warming with Web Worker support and WebUI compatibility
const preWarmShiki = async () => {
  try {
    // Import Shiki worker manager directly (IIFE format)
    const { shikiWorkerManager } = await import('./utils/shikiWorkerManager');

    // Start worker pre-warming (don't await to avoid blocking)
    shikiWorkerManager.preWarm().catch((error: any) => {
      consola.warn('Web Worker pre-warming failed, will use main thread fallback:', error);
    });

    // Import main thread fallback directly (IIFE format)
    const { ShikiEngineManager } = await import('./hooks/useHighlight');
    const manager = ShikiEngineManager.getInstance();
    await manager.preWarm();
  } catch (error) {
    consola.warn('Failed to pre-warm Shiki engine:', error);
  }
};

if (window.global === undefined) window.global = window;

// Phase 3: Initialize progressive enhancement systems
console.log('🚀 Phase 3: Initializing progressive enhancement systems...');

// Initialize tiered loading system
initTieredLoading();
console.log('✅ Tiered loading system initialized');

// Initialize memory management
const memoryManager = initMemoryManagement();
console.log('✅ Memory management system initialized');

// Initialize progressive loading metrics
const progressiveMetrics = trackProgressiveLoadingMetrics();
console.log('✅ Progressive loading metrics initialized');

// Initialize intelligent preloading
const intelligentPreloader = initIntelligentPreloading();
console.log('✅ Intelligent preloading system initialized');

// Log performance improvements every 30 seconds in development
if (process.env.NODE_ENV === 'development') {
  setInterval(() => {
    const stats = memoryManager.getMemoryStats();
    const metrics = progressiveMetrics.getProgressiveMetrics();
    const preloadStats = intelligentPreloader.getPreloadingStats();
    console.log('📊 Phase 3 Performance Stats:', {
      memory: stats,
      preloading: preloadStats,
      progressive: metrics,
    });
  }, 30_000);
}

const skipLoad = window.location.href.includes('dev') && process.env.NODE_ENV === 'production';

if (!skipLoad) {
  document.addEventListener(
    'DOMContentLoaded',
    () => {
      consola.start(`🤯 Lobe Theme load in ${process.env.NODE_ENV}`);

      // Pre-warm Shiki engine in background with delay to avoid blocking initial render
      setTimeout(() => {
        preWarmShiki();
      }, 1000); // Delay to allow initial UI to render first

      const root = document.createElement('div');
      root.setAttribute('id', 'root');
      try {
        gradioApp()?.append(root);
      } catch {
        document.querySelector('gradio-app')?.append(root);
      }
      const client = createRoot(root);
      client.render(<Page />);
    },
    { once: true },
  );
}
