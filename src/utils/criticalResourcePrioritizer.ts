/**
 * Phase 4: Critical Resource Prioritization System
 * Ensures critical theme assets load first while maintaining IIFE format compatibility
 */

interface CriticalResource {
  condition?: () => boolean;
  content?: string;
  id: string;
  // 1 = highest, 10 = lowest
  inline: boolean;
  priority: number; 
  type: 'css' | 'js' | 'font' | 'image';
  url?: string;
}

interface ResourceLoadMetrics {
  cached: boolean;
  loadTime: number;
  resourceId: string;
  size: number;
  timestamp: number;
}

class CriticalResourcePrioritizer {
  private criticalResources: Map<string, CriticalResource> = new Map();
  private loadedResources = new Set<string>();
  private loadMetrics: ResourceLoadMetrics[] = [];
  private isInitialized = false;

  constructor() {
    this.setupCriticalResources();
  }

  private setupCriticalResources(): void {
    // Critical CSS for immediate rendering
    this.criticalResources.set('critical-layout', {
      content: `
        /* Critical layout styles for immediate rendering */
        body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .ant-layout { min-height: 100vh; }
        .ant-layout-header { background: #fff; border-bottom: 1px solid #f0f0f0; }
        .ant-layout-content { background: #fff; }
        .ant-layout-sider { background: #fff; border-right: 1px solid #f0f0f0; }
        .ant-skeleton { animation: ant-skeleton-loading 1.4s ease-in-out infinite; }
        @keyframes ant-skeleton-loading {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }
      `,
      id: 'critical-layout',
      inline: true,
      priority: 1,
      type: 'css',
    });

    // Critical theme variables
    this.criticalResources.set('critical-theme', {
      content: `
        /* Critical theme variables */
        :root {
          --lobe-primary-color: #1677ff;
          --lobe-bg-color: #ffffff;
          --lobe-text-color: rgba(0, 0, 0, 0.88);
          --lobe-border-color: #f0f0f0;
          --lobe-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          --lobe-border-radius: 6px;
          --lobe-font-size: 14px;
          --lobe-line-height: 1.5715;
        }
        
        /* Critical component styles */
        .lobe-theme-loading {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
          color: var(--lobe-text-color);
        }
      `,
      id: 'critical-theme',
      inline: true,
      priority: 2,
      type: 'css',
    });

    // Critical fonts
    this.criticalResources.set('critical-font', {
      content: `
        /* Critical font loading */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/dev/fonts/inter-var.woff2') format('woff2');
        }
      `,
      id: 'critical-font',
      inline: true,
      priority: 3,
      type: 'css',
    });

    // Critical JavaScript for WebUI compatibility
    this.criticalResources.set('critical-webui-compat', {
      content: `
        // Critical WebUI compatibility layer
        window.__LOBE_THEME_READY__ = false;
        window.__LOBE_THEME_VERSION__ = '3.7.1';
        
        // Ensure gradio compatibility
        if (typeof gradio !== 'undefined') {
          console.log('🔗 Gradio detected, initializing compatibility layer');
        }
        
        // Critical error handling
        window.addEventListener('error', function(e) {
          console.error('🚨 Critical error in Lobe Theme:', e.error);
        });
        
        // Performance monitoring setup
        if (typeof performance !== 'undefined' && performance.mark) {
          performance.mark('lobe-theme-critical-start');
        }
      `,
      id: 'critical-webui-compat',
      inline: true,
      priority: 4,
      type: 'js',
    });

    // Conditional resources based on settings
    this.criticalResources.set('sidebar-critical', {
      condition: () => this.isFeatureEnabled('enableSidebar'),
      content: `
        /* Critical sidebar styles */
        .ant-layout-sider-collapsed { width: 48px !important; min-width: 48px !important; }
        .ant-layout-sider-trigger { background: var(--lobe-bg-color); border-top: 1px solid var(--lobe-border-color); }
      `,
      id: 'sidebar-critical',
      inline: true,
      priority: 5,
      type: 'css',
    });

    this.criticalResources.set('extra-network-critical', {
      condition: () => this.isFeatureEnabled('enableExtraNetworkSidebar'),
      content: `
        /* Critical extra network styles */
        .extra-network-pane { height: 100%; resize: none; }
        .extra-network-card { transition: transform 0.2s ease; }
        .extra-network-card:hover { transform: translateY(-2px); }
      `,
      id: 'extra-network-critical',
      inline: true,
      priority: 6,
      type: 'css',
    });
  }

  public async initializeCriticalResources(): Promise<void> {
    if (this.isInitialized) return;

    console.log('🚀 Initializing critical resource prioritization');
    const startTime = performance.now();

    // Sort resources by priority
    const sortedResources = Array.from(this.criticalResources.values())
      .filter(resource => !resource.condition || resource.condition())
      .sort((a, b) => a.priority - b.priority);

    // Load critical resources in priority order
    for (const resource of sortedResources) {
      await this.loadCriticalResource(resource);
    }

    const loadTime = performance.now() - startTime;
    console.log(`✅ Critical resources loaded in ${loadTime.toFixed(2)}ms`);

    this.isInitialized = true;
    
    // Mark theme as ready
    (window as any).__LOBE_THEME_READY__ = true;
    
    // Dispatch ready event for WebUI extensions
    window.dispatchEvent(new CustomEvent('lobe-theme-ready', {
      detail: { loadTime, resourceCount: sortedResources.length }
    }));

    // Performance mark
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark('lobe-theme-critical-end');
      performance.measure('lobe-theme-critical-load', 'lobe-theme-critical-start', 'lobe-theme-critical-end');
    }
  }

  private async loadCriticalResource(resource: CriticalResource): Promise<void> {
    if (this.loadedResources.has(resource.id)) return;

    const startTime = performance.now();

    try {
      if (resource.inline && resource.content) {
        await this.inlineResource(resource);
      } else if (resource.url) {
        await this.loadExternalResource(resource);
      }

      const loadTime = performance.now() - startTime;
      this.recordLoadMetrics(resource.id, loadTime, resource.content?.length || 0, false);
      this.loadedResources.add(resource.id);

      console.log(`✅ Loaded critical resource: ${resource.id} (${loadTime.toFixed(2)}ms)`);
    } catch (error) {
      console.error(`❌ Failed to load critical resource ${resource.id}:`, error);
    }
  }

  private async inlineResource(resource: CriticalResource): Promise<void> {
    if (resource.type === 'css') {
      const style = document.createElement('style');
      style.id = `lobe-critical-${resource.id}`;
      style.textContent = resource.content!;
      
      // Insert at the beginning of head for highest priority
      const firstChild = document.head.firstChild;
      if (firstChild) {
        document.head.insertBefore(style, firstChild);
      } else {
        document.head.append(style);
      }
    } else if (resource.type === 'js') {
      const script = document.createElement('script');
      script.id = `lobe-critical-${resource.id}`;
      script.textContent = resource.content!;
      document.head.append(script);
    }
  }

  private async loadExternalResource(resource: CriticalResource): Promise<void> {
    return new Promise((resolve, reject) => {
      if (resource.type === 'css') {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = resource.url!;
        link.onload = () => resolve();
        link.onerror = () => reject(new Error(`Failed to load CSS: ${resource.url}`));
        document.head.append(link);
      } else if (resource.type === 'js') {
        const script = document.createElement('script');
        script.src = resource.url!;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load JS: ${resource.url}`));
        document.head.append(script);
      }
    });
  }

  private recordLoadMetrics(resourceId: string, loadTime: number, size: number, cached: boolean): void {
    this.loadMetrics.push({
      cached,
      loadTime,
      resourceId,
      size,
      timestamp: Date.now(),
    });
  }

  private isFeatureEnabled(feature: string): boolean {
    try {
      // Access WebUI settings or app store
      const appStore = (window as any).__APP_STORE__;
      if (appStore) {
        return appStore.getState().settings[feature] || false;
      }

      // Fallback to localStorage
      const settings = localStorage.getItem('lobe-theme-settings');
      if (settings) {
        const parsed = JSON.parse(settings);
        return parsed[feature] || false;
      }

      return false;
    } catch {
      return false;
    }
  }

  // Public API
  public addCriticalResource(resource: CriticalResource): void {
    this.criticalResources.set(resource.id, resource);
  }

  public getLoadMetrics(): ResourceLoadMetrics[] {
    return [...this.loadMetrics];
  }

  public getCriticalResourcesStatus(): { loaded: number; ready: boolean, total: number; } {
    const total = this.criticalResources.size;
    const loaded = this.loadedResources.size;
    return { loaded, ready: this.isInitialized, total };
  }

  public async preloadNonCriticalResources(): Promise<void> {
    // This can be called after critical resources are loaded
    // to start preloading non-critical resources
    console.log('🔄 Starting non-critical resource preloading');
    
    // Trigger resource preloader for secondary resources
    const resourcePreloader = (window as any).__LOBE_RESOURCE_PRELOADER__;
    if (resourcePreloader) {
      // This will be handled by the resource preloader
      console.log('✅ Non-critical preloading delegated to resource preloader');
    }
  }
}

// Global instance
let criticalResourcePrioritizer: CriticalResourcePrioritizer | null = null;

export function initializeCriticalResourcePrioritizer(): CriticalResourcePrioritizer {
  if (!criticalResourcePrioritizer) {
    criticalResourcePrioritizer = new CriticalResourcePrioritizer();
    
    // Make available globally for WebUI extensions
    (window as any).__LOBE_CRITICAL_PRIORITIZER__ = criticalResourcePrioritizer;
  }
  
  return criticalResourcePrioritizer;
}

export function getCriticalResourcePrioritizer(): CriticalResourcePrioritizer | null {
  return criticalResourcePrioritizer;
}

// Auto-initialize on import for immediate critical resource loading
if (typeof window !== 'undefined') {
  // Initialize immediately for critical resources
  const prioritizer = initializeCriticalResourcePrioritizer();
  
  // Load critical resources as soon as possible
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      prioritizer.initializeCriticalResources();
    });
  } else {
    prioritizer.initializeCriticalResources();
  }
}
