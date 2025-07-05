import { consola } from 'consola';
import { createRoot } from 'react-dom/client';

// Import critical CSS first for immediate rendering
import './styles/critical.css';

import Page from './app/page';
import { trackDynamicImport } from './utils/bundleAnalysis';

// Optimized Shiki engine pre-warming with performance tracking
const preWarmShiki = async () => {
  try {
    // Track the dynamic import performance
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
