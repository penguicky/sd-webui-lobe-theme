/**
 * Phase 3: Tiered Loading System
 * Implements progressive enhancement with intelligent loading priorities
 */

import { ComponentType } from 'react';

export interface LoadingTier {
  components: Array<{
    loader: () => Promise<{ default: ComponentType<any> }>;
    name: string;
    preload?: boolean;
  }>;
  condition?: () => boolean;
  delay: number;
  name: string;
  priority: number;
}

export interface TieredLoadingConfig {
  idleTimeout: number;
  maxConcurrentLoads: number;
  tiers: LoadingTier[];
}

class TieredLoadingManager {
  private config: TieredLoadingConfig;
  private loadedComponents = new Map<string, ComponentType<any>>();
  private loadingQueue: Array<{ component: string, tier: string; }> = [];
  private activeLoads = 0;
  private isIdle = false;
  private idleTimer: number | null = null;

  constructor(config: TieredLoadingConfig) {
    this.config = config;
    this.setupIdleDetection();
    this.startTieredLoading();
  }

  private resetIdleTimer = (): void => {
    this.isIdle = false;
    if (this.idleTimer) {
      clearTimeout(this.idleTimer);
    }
    this.idleTimer = window.setTimeout(() => {
      this.isIdle = true;
      this.processQueue();
    }, this.config.idleTimeout);
  };

  private setupIdleDetection(): void {

    // Track user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, this.resetIdleTimer, { passive: true });
    });

    // Initial idle timer
    this.resetIdleTimer();
  }

  private startTieredLoading(): void {
    // Sort tiers by priority
    const sortedTiers = [...this.config.tiers].sort((a, b) => a.priority - b.priority);

    sortedTiers.forEach((tier, index) => {
      setTimeout(() => {
        this.loadTier(tier);
      }, tier.delay * (index + 1));
    });
  }

  private async loadTier(tier: LoadingTier): Promise<void> {
    // Check tier condition if specified
    if (tier.condition && !tier.condition()) {
      console.log(`🚫 Tier ${tier.name} condition not met, skipping`);
      return;
    }

    console.log(`🚀 Loading tier: ${tier.name} (priority: ${tier.priority})`);

    // Add components to queue
    tier.components.forEach(component => {
      if (!this.loadedComponents.has(component.name)) {
        this.loadingQueue.push({ component: component.name, tier: tier.name });
      }
    });

    this.processQueue();
  }

  private async processQueue(): Promise<void> {
    while (
      this.loadingQueue.length > 0 &&
      this.activeLoads < this.config.maxConcurrentLoads &&
      (this.isIdle || this.activeLoads === 0) // Load immediately if nothing is loading, otherwise wait for idle
    ) {
      const item = this.loadingQueue.shift();
      if (!item) break;

      this.loadComponent(item.tier, item.component);
    }
  }

  private async loadComponent(tierName: string, componentName: string): Promise<void> {
    if (this.loadedComponents.has(componentName)) {
      return;
    }

    this.activeLoads++;
    const startTime = performance.now();

    try {
      const tier = this.config.tiers.find(t => t.name === tierName);
      const componentConfig = tier?.components.find(c => c.name === componentName);

      if (!componentConfig) {
        throw new Error(`Component ${componentName} not found in tier ${tierName}`);
      }

      console.log(`📦 Loading component: ${componentName} from tier: ${tierName}`);
      
      const result = await componentConfig.loader();
      this.loadedComponents.set(componentName, result.default);

      const loadTime = performance.now() - startTime;
      console.log(`✅ Loaded ${componentName} in ${loadTime.toFixed(2)}ms`);

      // Dispatch custom event for performance monitoring
      window.dispatchEvent(new CustomEvent('tiered-component-loaded', {
        detail: { componentName, loadTime, tierName }
      }));

    } catch (error) {
      console.error(`❌ Failed to load component ${componentName}:`, error);
    } finally {
      this.activeLoads--;
      // Continue processing queue
      setTimeout(() => this.processQueue(), 10);
    }
  }

  public getLoadedComponent(name: string): ComponentType<any> | null {
    return this.loadedComponents.get(name) || null;
  }

  public preloadComponent(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // Find component in tiers
      for (const tier of this.config.tiers) {
        const component = tier.components.find(c => c.name === name);
        if (component) {
          this.loadComponent(tier.name, name).then(() => resolve()).catch(reject);
          return;
        }
      }
      reject(new Error(`Component ${name} not found in any tier`));
    });
  }

  public getLoadingStats(): {
    activeLoads: number;
    loadedComponents: number;
    queuedComponents: number;
    totalComponents: number;
  } {
    const totalComponents = this.config.tiers.reduce((sum, tier) => sum + tier.components.length, 0);
    
    return {
      activeLoads: this.activeLoads,
      loadedComponents: this.loadedComponents.size,
      queuedComponents: this.loadingQueue.length,
      totalComponents,
    };
  }
}

// Default tiered loading configuration
export const defaultTieredConfig: TieredLoadingConfig = {
  idleTimeout: 2000,
  maxConcurrentLoads: 2,
  tiers: [
    {
      components: [
        {
          loader: () => import('../components/PromptEditor'),
          name: 'prompt-editor',
        },
      ],
      delay: 0,
      name: 'critical',
      priority: 1,
    },
    {
      components: [
        {
          loader: () => import('../features/Header/Actions'),
          name: 'header-actions',
        },
      ],
      delay: 1000,
      name: 'secondary',
      priority: 2,
    },
    {
      // Only on desktop
components: [
        {
          loader: () => import('../features/Setting'),
          name: 'settings-modal',
          preload: true,
        },
        {
          loader: () => import('../features/Share'),
          name: 'share-modal',
          preload: true,
        },
      ],
      
condition: () => window.innerWidth > 768,
      
delay: 3000,
      
name: 'advanced', 
      priority: 3,
    },
    {
      components: [
        {
          loader: () => import('../features/Footer/Follow'),
          name: 'footer-social',
        },
        {
          loader: () => import('../components/VersionTag'),
          name: 'version-tag',
        },
      ],
      delay: 5000,
      name: 'background',
      priority: 4,
    },
  ],
};

// Global instance
let tieredLoadingManager: TieredLoadingManager | null = null;

export function initTieredLoading(config: TieredLoadingConfig = defaultTieredConfig): TieredLoadingManager {
  if (!tieredLoadingManager) {
    tieredLoadingManager = new TieredLoadingManager(config);
  }
  return tieredLoadingManager;
}

export function getTieredLoadingManager(): TieredLoadingManager | null {
  return tieredLoadingManager;
}

export { TieredLoadingManager };
