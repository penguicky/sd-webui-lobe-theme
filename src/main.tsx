import { consola } from 'consola';
import { createRoot } from 'react-dom/client';

import Page from './app/page';

if (window.global === undefined) window.global = window;

// Only skip loading in very specific dev scenarios
const skipLoad = window.location.href.includes('dev') &&
                 typeof process !== 'undefined' &&
                 process.env?.NODE_ENV === 'production';

function initializeTheme() {
  try {
    consola.start(`🤯 Lobe Theme load in ${process.env.NODE_ENV}`);

    // Check if root already exists
    let root = document.getElementById('root');
    if (root) {
      root.remove();
    }

    // Create new root element
    root = document.createElement('div');
    root.setAttribute('id', 'root');

    // Try multiple mounting strategies
    let mounted = false;

    // Strategy 1: Try gradioApp() function
    try {
      const gradioElement = gradioApp();
      if (gradioElement) {
        gradioElement.append(root);
        mounted = true;
        consola.success('Mounted using gradioApp()');
      }
    } catch (error) {
      consola.warn('gradioApp() failed:', error);
    }

    // Strategy 2: Try gradio-app selector
    if (!mounted) {
      const gradioAppElement = document.querySelector('gradio-app');
      if (gradioAppElement) {
        gradioAppElement.append(root);
        mounted = true;
        consola.success('Mounted using gradio-app selector');
      }
    }

    // Strategy 3: Try body as fallback
    if (!mounted) {
      document.body.append(root);
      mounted = true;
      consola.warn('Mounted to body as fallback');
    }

    if (mounted) {
      const client = createRoot(root);
      client.render(<Page />);
      consola.success('React app rendered successfully');
    } else {
      consola.error('Failed to mount theme - no suitable container found');
    }
  } catch (error) {
    consola.error('Theme initialization failed:', error);
  }
}

if (!skipLoad) {
  // Try immediate initialization if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTheme, { once: true });
  } else {
    // DOM is already ready, initialize immediately
    initializeTheme();
  }
}
