/**
 * Phase 3: Memory Management System
 * Handles cleanup and disposal of loaded components to prevent memory leaks
 */
import { ComponentType } from 'react';

interface ComponentMemoryInfo {
  component: ComponentType<any>;
  // Estimated memory usage in KB
  isActive: boolean;
  lastUsed: number;
  loadTime: number;
  memoryEstimate: number;
  name: string;
  usageCount: number;
}

interface MemoryManagementConfig {
  cleanupInterval: number;
  inactiveThreshold: number;
  maxComponents: number;
  maxMemoryMB: number; // Time in ms before component is considered inactive
}

class ComponentMemoryManager {
  private components = new Map<string, ComponentMemoryInfo>();
  private config: MemoryManagementConfig;
  private cleanupTimer: number | null = null;
  private memoryObserver: PerformanceObserver | null = null;

  constructor(config: MemoryManagementConfig) {
    this.config = config;
    this.startMemoryMonitoring();
    this.startCleanupTimer();
  }

  private startMemoryMonitoring(): void {
    // Monitor memory usage if available
    if ('memory' in performance) {
      setInterval(() => {
        const memInfo = (performance as any).memory;
        if (memInfo) {
          const usedMB = memInfo.usedJSHeapSize / 1024 / 1024;
          if (usedMB > this.config.maxMemoryMB * 0.8) {
            console.warn(`🧠 Memory usage high: ${usedMB.toFixed(2)}MB, triggering cleanup`);
            this.performCleanup();
          }
        }
      }, 30_000); // Check every 30 seconds
    }

    // Monitor performance entries for component loading
    if ('PerformanceObserver' in window) {
      try {
        this.memoryObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.name.includes('component-load')) {
              this.updateComponentUsage(entry.name.replace('component-load-', ''));
            }
          }
        });
        this.memoryObserver.observe({ entryTypes: ['measure'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }
  }

  private startCleanupTimer(): void {
    this.cleanupTimer = window.setInterval(() => {
      this.performCleanup();
    }, this.config.cleanupInterval);
  }

  public registerComponent(
    name: string,
    component: ComponentType<any>,
    memoryEstimate: number = 50, // Default 50KB estimate
  ): void {
    const now = Date.now();
    this.components.set(name, {
      component,
      isActive: true,
      lastUsed: now,
      loadTime: now,
      memoryEstimate,
      name,
      usageCount: 1,
    });

    console.log(`📦 Registered component: ${name} (estimated ${memoryEstimate}KB)`);
    this.checkMemoryLimits();
  }

  public useComponent(name: string): ComponentType<any> | null {
    const componentInfo = this.components.get(name);
    if (!componentInfo) {
      return null;
    }

    // Update usage statistics
    componentInfo.lastUsed = Date.now();
    componentInfo.usageCount++;
    componentInfo.isActive = true;

    return componentInfo.component;
  }

  public markComponentInactive(name: string): void {
    const componentInfo = this.components.get(name);
    if (componentInfo) {
      componentInfo.isActive = false;
      if (process.env.NODE_ENV === 'development') {
        console.log(`😴 Component marked inactive: ${name}`);
      }
    }
  }

  private updateComponentUsage(name: string): void {
    const componentInfo = this.components.get(name);
    if (componentInfo) {
      componentInfo.lastUsed = Date.now();
      componentInfo.usageCount++;
    }
  }

  private performCleanup(): void {
    const now = Date.now();
    const componentsToRemove: string[] = [];

    // Find inactive components
    for (const [name, info] of this.components) {
      const timeSinceLastUse = now - info.lastUsed;
      if (!info.isActive && timeSinceLastUse > this.config.inactiveThreshold) {
        componentsToRemove.push(name);
      }
    }

    // Remove least recently used components if over limits
    if (this.components.size > this.config.maxComponents) {
      const sortedComponents = Array.from(this.components.entries()).sort(
        ([, a], [, b]) => a.lastUsed - b.lastUsed,
      );

      const excessCount = this.components.size - this.config.maxComponents;
      for (let i = 0; i < excessCount && i < sortedComponents.length; i++) {
        const entry = sortedComponents[i];
        if (entry) {
          const [name] = entry;
          if (!componentsToRemove.includes(name)) {
            componentsToRemove.push(name);
          }
        }
      }
    }

    // Perform cleanup
    if (componentsToRemove.length > 0) {
      const freedMemory = this.removeComponents(componentsToRemove);
      console.log(`🧹 Cleaned up ${componentsToRemove.length} components, freed ~${freedMemory}KB`);
    }
  }

  private removeComponents(names: string[]): number {
    let freedMemory = 0;

    for (const name of names) {
      const componentInfo = this.components.get(name);
      if (componentInfo) {
        freedMemory += componentInfo.memoryEstimate;
        this.components.delete(name);

        // Dispatch cleanup event for external listeners
        window.dispatchEvent(
          new CustomEvent('component-cleanup', {
            detail: { componentName: name, memoryFreed: componentInfo.memoryEstimate },
          }),
        );
      }
    }

    return freedMemory;
  }

  private checkMemoryLimits(): void {
    const totalEstimatedMemory = Array.from(this.components.values()).reduce(
      (sum, info) => sum + info.memoryEstimate,
      0,
    );

    if (totalEstimatedMemory > this.config.maxMemoryMB * 1024) {
      console.warn(`🧠 Estimated memory usage high: ${totalEstimatedMemory}KB`);
      this.performCleanup();
    }
  }

  public getMemoryStats(): {
    activeComponents: number;
    averageUsage: number;
    estimatedMemoryKB: number;
    totalComponents: number;
  } {
    const components = Array.from(this.components.values());
    const activeComponents = components.filter((c) => c.isActive);
    const totalMemory = components.reduce((sum, c) => sum + c.memoryEstimate, 0);
    const averageUsage =
      components.length > 0
        ? components.reduce((sum, c) => sum + c.usageCount, 0) / components.length
        : 0;

    return {
      activeComponents: activeComponents.length,
      averageUsage: Math.round(averageUsage * 100) / 100,
      estimatedMemoryKB: totalMemory,
      totalComponents: components.length,
    };
  }

  public dispose(): void {
    if (this.cleanupTimer) {
      clearInterval(this.cleanupTimer);
    }
    if (this.memoryObserver) {
      this.memoryObserver.disconnect();
    }
    this.components.clear();
  }
}

// Default configuration
const defaultConfig: MemoryManagementConfig = {
  cleanupInterval: 60_000,
  // 1 minute
  inactiveThreshold: 300_000,

  maxComponents: 20,
  maxMemoryMB: 50, // 5 minutes
};

// Global instance
let memoryManager: ComponentMemoryManager | null = null;

export function initMemoryManagement(
  config: MemoryManagementConfig = defaultConfig,
): ComponentMemoryManager {
  if (!memoryManager) {
    memoryManager = new ComponentMemoryManager(config);
    console.log('🧠 Component memory management initialized');
  }
  return memoryManager;
}

export function getMemoryManager(): ComponentMemoryManager | null {
  return memoryManager;
}

export { ComponentMemoryManager, type MemoryManagementConfig };
