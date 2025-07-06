/**
 * WebUI Compatibility Layer
 * Provides compatibility between ES modules and Stable Diffusion WebUI extension system
 */

// Global registry for loaded modules
const moduleRegistry = new Map<string, any>();
const loadingPromises = new Map<string, Promise<any>>();

/**
 * WebUI-compatible module loader that handles ES modules in IIFE context
 */
export class WebUIModuleLoader {
  private static instance: WebUIModuleLoader | null = null;
  private baseUrl: string;

  constructor() {
    // Detect the base URL for chunk loading
    this.baseUrl = this.detectBaseUrl();
  }

  static getInstance(): WebUIModuleLoader {
    if (!WebUIModuleLoader.instance) {
      WebUIModuleLoader.instance = new WebUIModuleLoader();
    }
    return WebUIModuleLoader.instance;
  }

  private detectBaseUrl(): string {
    // Try to detect the base URL from the current script
    const scripts = document.getElementsByTagName('script');
    for (let i = scripts.length - 1; i >= 0; i--) {
      const script = scripts[i];
      if (script && script.src && script.src.includes('main.js')) {
        return script.src.replace(/\/[^/]*$/, '/');
      }
    }
    
    // Fallback: assume we're in the extensions directory
    const currentPath = window.location.pathname;
    if (currentPath.includes('/extensions/')) {
      return `${window.location.origin}${currentPath.split('/extensions/')[0]}/extensions/sd-webui-lobe-theme/javascript/`;
    }
    
    // Final fallback
    return './javascript/';
  }

  /**
   * Load a module with WebUI compatibility
   */
  async loadModule(chunkName: string): Promise<any> {
    // Return cached module if already loaded
    if (moduleRegistry.has(chunkName)) {
      return moduleRegistry.get(chunkName);
    }

    // Return existing loading promise if in progress
    if (loadingPromises.has(chunkName)) {
      return loadingPromises.get(chunkName);
    }

    // Start loading
    const loadingPromise = this.performLoad(chunkName);
    loadingPromises.set(chunkName, loadingPromise);

    try {
      const module = await loadingPromise;
      moduleRegistry.set(chunkName, module);
      loadingPromises.delete(chunkName);
      return module;
    } catch (error) {
      loadingPromises.delete(chunkName);
      console.error(`Failed to load module "${chunkName}":`, error);
      throw error;
    }
  }

  private async performLoad(chunkName: string): Promise<any> {
    const chunkUrl = `${this.baseUrl}${chunkName}`;
    
    try {
      // Try dynamic import first (modern browsers)
      return await import(chunkUrl);
    } catch (error) {
      console.warn(`Dynamic import failed for ${chunkName}, trying script injection:`, error);
    }

    // Fallback: script tag injection for WebUI compatibility
    return this.loadViaScriptTag(chunkUrl, chunkName);
  }

  private loadViaScriptTag(url: string, chunkName: string): Promise<any> {
    return new Promise((resolve, reject) => {
      // Create a unique global variable name for this chunk
      const globalName = `__webui_chunk_${chunkName.replaceAll(/[^\dA-Za-z]/g, '_')}`;
      
      // Create script element
      const script = document.createElement('script');
      script.type = 'module';
      script.src = url;
      
      // Handle successful load
      script.onload = () => {
        // Try to get the module from global scope
        const module = (window as any)[globalName];
        if (module) {
          resolve(module);
        } else {
          // If no global, assume the module loaded successfully
          // and try to access it via import map or other means
          resolve({});
        }
        script.remove();
      };

      // Handle load error
      script.onerror = () => {
        reject(new Error(`Failed to load chunk: ${chunkName}`));
        script.remove();
      };

      // Add to document
      document.head.append(script);
    });
  }

  /**
   * Preload modules for better performance
   */
  preloadModules(chunkNames: string[]): void {
    chunkNames.forEach(chunkName => {
      const chunkUrl = `${this.baseUrl}${chunkName}`;
      
      // Create preload link
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = chunkUrl;
      
      // Add to document head
      document.head.append(link);
    });
  }

  /**
   * Clear module cache
   */
  clearCache(): void {
    moduleRegistry.clear();
    loadingPromises.clear();
  }

  /**
   * Get loading statistics
   */
  getStats(): { cached: number; loading: number } {
    return {
      cached: moduleRegistry.size,
      loading: loadingPromises.size,
    };
  }
}

// Global instance
export const webUILoader = WebUIModuleLoader.getInstance();

/**
 * WebUI-compatible dynamic import function
 */
export async function webUIImport(chunkName: string): Promise<any> {
  return webUILoader.loadModule(chunkName);
}

/**
 * Initialize WebUI compatibility layer
 */
export function initWebUICompat(): void {
  // Detect known chunk files and preload them
  const knownChunks = [
    'features-advanced-CuirTiI3.js',
    'core-jkSX95V2.js',
    'ui-lib-DJDOGt1z.js',
    'heavy-utils-CnT3T5QD.js',
  ];

  // Preload critical chunks
  webUILoader.preloadModules(knownChunks);

  // Add global reference for debugging
  (window as any).__webui_compat = {
    import: webUIImport,
    loader: webUILoader,
  };

  console.log('🔧 WebUI compatibility layer initialized');
}
