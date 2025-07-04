import { consola } from 'consola';
import { createRoot } from 'react-dom/client';

import Page from './app/page';

// Pre-warm Shiki engine for better performance
const preWarmShiki = async () => {
  try {
    // Dynamic import to avoid blocking main thread
    const { ShikiEngineManager } = await import('./hooks/useHighlight');
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

      // Pre-warm Shiki engine in background for better performance
      preWarmShiki();

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
