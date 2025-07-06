/**
 * Phase 4: Intelligent Resource Preloading System
 * WebUI-compatible resource preloading that works with IIFE format
 */

interface PreloadResource {
  condition?: () => boolean;
  crossOrigin?: 'anonymous' | 'use-credentials';
  priority: 'high' | 'medium' | 'low';
  type: 'script' | 'style' | 'image' | 'font';
  url: string;
}

interface PreloadStrategy {
  delay?: number;
  name: string;
  resources: PreloadResource[];
  trigger: 'immediate' | 'idle' | 'interaction' | 'visible';
}

class ResourcePreloader {
  private preloadedResources = new Set<string>();
  private preloadQueue: PreloadResource[] = [];
  private isProcessing = false;
  private strategies: Map<string, PreloadStrategy> = new Map();

  constructor() {
    this.setupDefaultStrategies();
    this.initializePreloading();
  }

  private setupDefaultStrategies(): void {
    // Critical theme assets - load immediately
    this.strategies.set('critical', {
      name: 'critical',
      resources: [
        {
          priority: 'high',
          type: 'style',
          url: '/dev/src/styles/critical.css',
        },
        {
          crossOrigin: 'anonymous',
          priority: 'high',
          type: 'font',
          url: '/dev/fonts/inter-var.woff2',
        },
      ],
      trigger: 'immediate',
    });

    // Secondary theme assets - load on idle
    this.strategies.set('secondary', {
      delay: 500,
      name: 'secondary',
      resources: [
        {
          priority: 'medium',
          type: 'style',
          url: '/dev/src/styles/components.css',
        },
        {
          priority: 'medium',
          type: 'style',
          url: '/dev/src/styles/animations.css',
        },
      ],
      trigger: 'idle',
    });

    // Advanced features - load on interaction
    this.strategies.set('advanced', {
      delay: 200,
      name: 'advanced',
      resources: [
        {
          condition: () => this.isFeatureEnabled('enableExtraNetworkSidebar'),
          priority: 'medium',
          type: 'style',
          url: '/dev/src/features/ExtraNetworkSidebar/style.css',
        },
        {
          condition: () => this.isFeatureEnabled('enableQuickSettingsSidebar'),
          priority: 'medium',
          type: 'style',
          url: '/dev/src/features/QuickSettingsSidebar/style.css',
        },
      ],
      trigger: 'interaction',
    });

    // Icon assets - load progressively
    this.strategies.set('icons', {
      delay: 1000,
      name: 'icons',
      resources: [
        {
          priority: 'low',
          type: 'script',
          url: '/dev/src/components/OptimizedIcon/index.js',
        },
      ],
      trigger: 'visible',
    });
  }

  private initializePreloading(): void {
    // Start immediate preloading
    this.executeStrategy('critical');

    // Setup idle preloading
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.executeStrategy('secondary');
      }, { timeout: 2000 });
    } else {
      setTimeout(() => this.executeStrategy('secondary'), 1000);
    }

    // Setup interaction-based preloading
    this.setupInteractionPreloading();

    // Setup visibility-based preloading
    this.setupVisibilityPreloading();
  }

  private setupInteractionPreloading(): void {
    const events = ['mousedown', 'touchstart', 'keydown'];
    const handler = () => {
      this.executeStrategy('advanced');
      events.forEach(event => {
        document.removeEventListener(event, handler);
      });
    };

    events.forEach(event => {
      document.addEventListener(event, handler, { once: true, passive: true });
    });
  }

  private setupVisibilityPreloading(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.executeStrategy('icons');
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the main content area
    const mainContent = document.querySelector('main') || document.body;
    if (mainContent) {
      observer.observe(mainContent);
    }
  }

  private async executeStrategy(strategyName: string): Promise<void> {
    const strategy = this.strategies.get(strategyName);
    if (!strategy) return;

    console.log(`🚀 Executing preload strategy: ${strategyName}`);

    const delay = strategy.delay || 0;
    if (delay > 0) {
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined);
        }, delay);
      });
    }

    for (const resource of strategy.resources) {
      if (resource.condition && !resource.condition()) {
        continue;
      }

      this.preloadQueue.push(resource);
    }

    this.processPreloadQueue();
  }

  private async processPreloadQueue(): Promise<void> {
    if (this.isProcessing || this.preloadQueue.length === 0) return;

    this.isProcessing = true;

    // Sort by priority
    this.preloadQueue.sort((a, b) => {
      const priorityOrder = { high: 3, low: 1, medium: 2 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    while (this.preloadQueue.length > 0) {
      const resource = this.preloadQueue.shift()!;
      await this.preloadResource(resource);
    }

    this.isProcessing = false;
  }

  private async preloadResource(resource: PreloadResource): Promise<void> {
    if (this.preloadedResources.has(resource.url)) {
      return;
    }

    try {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.url;

      switch (resource.type) {
        case 'script': {
          link.as = 'script';
          break;
        }
        case 'style': {
          link.as = 'style';
          break;
        }
        case 'image': {
          link.as = 'image';
          break;
        }
        case 'font': {
          link.as = 'font';
          link.type = 'font/woff2';
          break;
        }
      }

      if (resource.crossOrigin) {
        link.crossOrigin = resource.crossOrigin;
      }

      // Add to document head
      document.head.append(link);

      this.preloadedResources.add(resource.url);
      console.log(`✅ Preloaded ${resource.type}: ${resource.url}`);

      // Small delay between preloads to avoid overwhelming the browser
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(undefined);
        }, 50);
      });
    } catch (error) {
      console.warn(`❌ Failed to preload ${resource.url}:`, error);
    }
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

  // Public API for manual preloading
  public preloadCustomResource(resource: PreloadResource): void {
    this.preloadQueue.push(resource);
    this.processPreloadQueue();
  }

  public addStrategy(strategy: PreloadStrategy): void {
    this.strategies.set(strategy.name, strategy);
  }

  public getPreloadedResources(): string[] {
    return Array.from(this.preloadedResources);
  }

  public getQueueStatus(): { pending: number; processed: number } {
    return {
      pending: this.preloadQueue.length,
      processed: this.preloadedResources.size,
    };
  }
}

// Global instance for WebUI compatibility
let resourcePreloader: ResourcePreloader | null = null;

export function initializeResourcePreloader(): ResourcePreloader {
  if (!resourcePreloader) {
    resourcePreloader = new ResourcePreloader();
    
    // Make available globally for WebUI extensions
    (window as any).__LOBE_RESOURCE_PRELOADER__ = resourcePreloader;
  }
  
  return resourcePreloader;
}

export function getResourcePreloader(): ResourcePreloader | null {
  return resourcePreloader;
}

// Utility functions for common preloading scenarios
export const preloadUtils = {
  preloadCriticalCSS: (urls: string[]) => {
    const preloader = getResourcePreloader();
    if (!preloader) return;

    urls.forEach(url => {
      preloader.preloadCustomResource({
        priority: 'high',
        type: 'style',
        url,
      });
    });
  },

  preloadFonts: (urls: string[]) => {
    const preloader = getResourcePreloader();
    if (!preloader) return;

    urls.forEach(url => {
      preloader.preloadCustomResource({
        crossOrigin: 'anonymous',
        priority: 'high',
        type: 'font',
        url,
      });
    });
  },

  preloadImages: (urls: string[]) => {
    const preloader = getResourcePreloader();
    if (!preloader) return;

    urls.forEach(url => {
      preloader.preloadCustomResource({
        priority: 'low',
        type: 'image',
        url,
      });
    });
  },
};
