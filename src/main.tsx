import { consola } from 'consola';
import { createRoot } from 'react-dom/client';

// Import critical CSS first for immediate rendering
import './styles/critical.css';

import Page from './app/page';
import { trackDynamicImport } from './utils/bundleAnalysis';

// Optimized Shiki engine pre-warming with Web Worker support
const preWarmShiki = async () => {
  try {
    // Pre-warm Web Worker first (non-blocking)
    const { shikiWorkerManager } = await trackDynamicImport(
      'shikiWorkerManager',
      import('./utils/shikiWorkerManager'),
    );

    // Start worker pre-warming (don't await to avoid blocking)
    shikiWorkerManager.preWarm().catch((error) => {
      consola.warn('Web Worker pre-warming failed, will use main thread fallback:', error);
    });

    // Also pre-warm main thread fallback
    const { ShikiEngineManager } = await trackDynamicImport(
      'useHighlight',
      import('./hooks/useHighlight'),
    );
    const manager = ShikiEngineManager.getInstance();
    await manager.preWarm();
  } catch (error) {
    consola.warn('Failed to pre-warm Shiki engine:', error);
  }
};

if (window.global === undefined) window.global = window;

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
