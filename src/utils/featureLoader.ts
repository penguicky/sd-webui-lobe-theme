import { type ComponentType } from 'react';



/**
 * Feature-based loading system for Phase 2 optimizations
 * Intelligently loads components based on user settings and usage patterns
 */

interface FeatureConfig {
  // Conditions for loading
  conditions?: {
    // Custom condition function
    customCondition?: () => boolean;
    // Load only when user interacts with related UI
    onInteraction?: boolean;
    // Load when component becomes visible
    onVisible?: boolean;
    // Setting key that must be enabled
    settingEnabled?: string;
  };
  // Component loader function
  loader: () => Promise<{ default: ComponentType<any> }>;
  // Feature identifier
  name: string;
  // Preloading strategy
  preload?: {
    // Delay before preloading (ms)
    delay?: number;
    // Preload on app idle
    onIdle?: boolean;
    // Preload on user intent (hover, focus)
    onIntent?: boolean;
  };
  // Priority level affects loading order
  priority: 'critical' | 'high' | 'medium' | 'low';
}

class FeatureLoadingManager {
  private features = new Map<string, FeatureConfig>();
  private loadedComponents = new Map<string, ComponentType<any>>();
  private loadingPromises = new Map<string, Promise<ComponentType<any>>>();
  private preloadQueue: string[] = [];
  private isProcessingQueue = false;

  /**
   * Register a feature for managed loading
   */
  registerFeature(config: FeatureConfig): void {
    this.features.set(config.name, config);
    
    // Schedule preloading based on priority and conditions
    this.schedulePreload(config);
  }

  /**
   * Load a feature component
   */
  async loadFeature(featureName: string): Promise<ComponentType<any> | null> {
    const feature = this.features.get(featureName);
    if (!feature) {
      console.warn(`Feature "${featureName}" not registered`);
      return null;
    }

    // Return cached component if already loaded
    if (this.loadedComponents.has(featureName)) {
      return this.loadedComponents.get(featureName)!;
    }

    // Return existing loading promise if in progress
    if (this.loadingPromises.has(featureName)) {
      return this.loadingPromises.get(featureName)!;
    }

    // Check loading conditions
    if (!this.shouldLoad(feature)) {
      return null;
    }

    // Start loading
    const loadingPromise = this.performLoad(feature);
    this.loadingPromises.set(featureName, loadingPromise);

    try {
      const component = await loadingPromise;
      this.loadedComponents.set(featureName, component);
      this.loadingPromises.delete(featureName);
      return component;
    } catch (error) {
      this.loadingPromises.delete(featureName);
      console.error(`Failed to load feature "${featureName}":`, error);
      throw error;
    }
  }

  /**
   * Preload a feature without blocking
   */
  async preloadFeature(featureName: string): Promise<void> {
    try {
      await this.loadFeature(featureName);
    } catch (error) {
      // Silently handle preload failures
      console.debug(`Preload failed for feature "${featureName}":`, error);
    }
  }

  /**
   * Get loading status of a feature
   */
  getFeatureStatus(featureName: string): 'not-registered' | 'pending' | 'loading' | 'loaded' | 'error' {
    if (!this.features.has(featureName)) {
      return 'not-registered';
    }
    
    if (this.loadedComponents.has(featureName)) {
      return 'loaded';
    }
    
    if (this.loadingPromises.has(featureName)) {
      return 'loading';
    }
    
    return 'pending';
  }

  /**
   * Get performance metrics
   */
  getMetrics(): {
    loadedFeatures: number;
    loadingFeatures: number;
    pendingFeatures: number;
    totalFeatures: number;
  } {
    return {
      loadedFeatures: this.loadedComponents.size,
      loadingFeatures: this.loadingPromises.size,
      pendingFeatures: this.features.size - this.loadedComponents.size - this.loadingPromises.size,
      totalFeatures: this.features.size,
    };
  }

  private shouldLoad(feature: FeatureConfig): boolean {
    const { conditions } = feature;
    if (!conditions) return true;

    // Check setting-based condition
    if (conditions.settingEnabled) {
      // This would integrate with the actual settings store
      // For now, assume all settings are enabled
      // const settings = useAppStore.getState().setting;
      // return settings[conditions.settingEnabled];
    }

    // Check custom condition
    if (conditions.customCondition) {
      return conditions.customCondition();
    }

    return true;
  }

  private async performLoad(feature: FeatureConfig): Promise<ComponentType<any>> {
    // Direct import (IIFE format)
    const result = await feature.loader();
    return result.default;
  }

  private schedulePreload(feature: FeatureConfig): void {
    const { preload, priority } = feature;
    if (!preload) return;

    // Add to preload queue based on priority
    const priorityOrder = { critical: 0, high: 1, low: 3, medium: 2 };
    const insertIndex = this.preloadQueue.findIndex(name => {
      const existingFeature = this.features.get(name);
      return existingFeature && priorityOrder[existingFeature.priority] > priorityOrder[priority];
    });

    if (insertIndex === -1) {
      this.preloadQueue.push(feature.name);
    } else {
      this.preloadQueue.splice(insertIndex, 0, feature.name);
    }

    // Process queue if not already processing
    if (!this.isProcessingQueue) {
      this.processPreloadQueue();
    }
  }

  private async processPreloadQueue(): Promise<void> {
    if (this.isProcessingQueue || this.preloadQueue.length === 0) return;

    this.isProcessingQueue = true;

    while (this.preloadQueue.length > 0) {
      const featureName = this.preloadQueue.shift()!;
      const feature = this.features.get(featureName);
      
      if (!feature || !feature.preload) continue;

      // Wait for delay if specified
      if (feature.preload?.delay) {
        await new Promise(resolve => {
          setTimeout(() => {
            resolve(undefined);
          }, feature.preload!.delay!);
        });
      }

      // Wait for idle if specified
      if (feature.preload?.onIdle) {
        await this.waitForIdle();
      }

      // Preload the feature
      await this.preloadFeature(featureName);

      // Small delay between preloads to avoid blocking
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(undefined);
        }, 50);
      });
    }

    this.isProcessingQueue = false;
  }

  private waitForIdle(): Promise<void> {
    return new Promise(resolve => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          resolve();
        }, { timeout: 5000 });
      } else {
        setTimeout(() => {
          resolve();
        }, 100);
      }
    });
  }
}

// Global feature loading manager instance
export const featureLoader = new FeatureLoadingManager();

/**
 * Hook for using feature loading in components
 */
export function useFeatureLoader(featureName: string) {
  const status = featureLoader.getFeatureStatus(featureName);
  
  const loadFeature = async () => {
    return featureLoader.loadFeature(featureName);
  };

  const preloadFeature = async () => {
    return featureLoader.preloadFeature(featureName);
  };

  return {
    loadFeature,
    preloadFeature,
    status,
  };
}

/**
 * Register common features
 */
export function registerCommonFeatures(): void {
  // Share feature
  featureLoader.registerFeature({
    loader: () => import('../features/Share'),
    name: 'share',
    preload: {
      delay: 3000,
      onIdle: true,
      onIntent: true,
    },
    priority: 'low',
  });

  // Extra Network Sidebar
  featureLoader.registerFeature({
    conditions: {
      settingEnabled: 'enableExtraNetworkSidebar',
    },
    loader: () => import('../features/ExtraNetworkSidebar'),
    name: 'extra-network-sidebar',
    preload: {
      delay: 1000,
    },
    priority: 'high',
  });

  // Quick Settings Sidebar
  featureLoader.registerFeature({
    conditions: {
      settingEnabled: 'enableSidebar',
    },
    loader: () => import('../features/QuickSettingSidebar'),
    name: 'quick-settings-sidebar',
    preload: {
      delay: 500,
    },
    priority: 'high',
  });
}
