/**
 * Bundle Analysis and Optimization Utilities
 * Provides runtime analysis of bundle composition and optimization opportunities
 */
import { webUIImport } from './webUICompat';

// Track imported modules for analysis
const moduleRegistry = new Map<
  string,
  {
    lastUsed: number;
    loadTime?: number;
    name: string;
    size?: number | undefined;
    usage: number;
  }
>();

/**
 * Register module usage for analysis
 */
export function registerModuleUsage(moduleName: string, size?: number): void {
  const existing = moduleRegistry.get(moduleName);
  const now = Date.now();

  if (existing) {
    existing.usage += 1;
    existing.lastUsed = now;
  } else {
    moduleRegistry.set(moduleName, {
      lastUsed: now,
      name: moduleName,
      size,
      usage: 1,
    });
  }
}

/**
 * WebUI-compatible dynamic import with fallback mechanisms
 */
export function webUICompatibleImport<T>(
  moduleName: string,
  importFn: () => Promise<T>,
  fallbackFn?: () => Promise<T>,
): Promise<T> {
  const startTime = performance.now();

  const handleSuccess = (result: T, isFallback = false) => {
    const loadTime = performance.now() - startTime;
    const existing = moduleRegistry.get(moduleName);

    if (existing) {
      existing.loadTime = loadTime;
      existing.usage += 1;
      existing.lastUsed = Date.now();
    } else {
      moduleRegistry.set(moduleName, {
        lastUsed: Date.now(),
        loadTime,
        name: moduleName,
        usage: 1,
      });
    }

    if (process.env.NODE_ENV === 'development') {
      const prefix = isFallback ? '🔄 Fallback' : '📦';
      console.log(`${prefix} Module "${moduleName}" loaded in ${loadTime.toFixed(2)}ms`);
    }

    return result;
  };

  const handleError = (error: any, isFallback = false) => {
    const loadTime = performance.now() - startTime;

    if (process.env.NODE_ENV === 'development') {
      const prefix = isFallback ? '❌ Fallback failed' : '⚠️ Primary import failed';
      console.error(`${prefix} for "${moduleName}" after ${loadTime.toFixed(2)}ms:`, error);
    }

    return error;
  };

  // Try primary import with WebUI compatibility
  return importFn()
    .then((result) => handleSuccess(result, false))
    .catch(async (error) => {
      handleError(error, false);

      // Try WebUI-compatible import as first fallback
      if (moduleName && typeof webUIImport === 'function') {
        try {
          const webUIResult = await webUIImport(moduleName);
          return handleSuccess(webUIResult, true);
        } catch (webUIError) {
          console.warn(`WebUI import also failed for ${moduleName}:`, webUIError);
        }
      }

      // Try custom fallback if available
      if (fallbackFn) {
        return fallbackFn()
          .then((result) => handleSuccess(result, true))
          .catch((fallbackError) => {
            handleError(fallbackError, true);
            throw fallbackError;
          });
      }

      throw error;
    });
}

/**
 * Get bundle analysis report
 */
export function getBundleAnalysis(): {
  frequentModules: Array<{ name: string; usage: number }>;
  heavyModules: Array<{ loadTime?: number; name: string }>;
  totalModules: number;
  unusedModules: Array<{ lastUsed: number; name: string }>;
} {
  const modules = Array.from(moduleRegistry.values());
  const now = Date.now();
  const oneHourAgo = now - 60 * 60 * 1000;

  return {
    frequentModules: modules
      .filter((m) => m.usage > 5)
      .sort((a, b) => b.usage - a.usage)
      .slice(0, 10),
    heavyModules: modules
      .filter((m) => m.loadTime && m.loadTime > 100)
      .sort((a, b) => (b.loadTime || 0) - (a.loadTime || 0))
      .slice(0, 10),
    totalModules: modules.length,
    unusedModules: modules
      .filter((m) => m.lastUsed < oneHourAgo)
      .sort((a, b) => a.lastUsed - b.lastUsed)
      .slice(0, 10),
  };
}

/**
 * Tree-shaking analysis utilities
 */
export const treeShakingAnalysis = {
  /**
   * Identify potentially unused exports
   */
  getUnusedExports: (): string[] => {
    const analysis = getBundleAnalysis();
    return analysis.unusedModules.map((m) => m.name);
  },

  /**
   * Track which exports are actually used from a module
   */
  trackExportUsage: (moduleName: string, exportName: string): void => {
    const key = `${moduleName}:${exportName}`;
    registerModuleUsage(key);
  },
};

/**
 * Bundle size optimization recommendations
 */
export const optimizationRecommendations = {
  /**
   * Analyze and suggest optimizations
   */
  getRecommendations: (): Array<{
    impact: 'high' | 'medium' | 'low';
    module: string;
    reason: string;
    type: 'lazy-load' | 'tree-shake' | 'replace' | 'remove';
  }> => {
    const analysis = getBundleAnalysis();
    const recommendations: Array<{
      impact: 'high' | 'medium' | 'low';
      module: string;
      reason: string;
      type: 'lazy-load' | 'tree-shake' | 'replace' | 'remove';
    }> = [];

    // Heavy modules that could be lazy-loaded
    analysis.heavyModules.forEach((module) => {
      if (module.loadTime && module.loadTime > 200) {
        recommendations.push({
          impact: 'high',
          module: module.name,
          reason: `Slow loading module (${module.loadTime.toFixed(2)}ms)`,
          type: 'lazy-load',
        });
      }
    });

    // Unused modules that could be removed
    analysis.unusedModules.forEach((module) => {
      recommendations.push({
        impact: 'medium',
        module: module.name,
        reason: 'Module not used recently',
        type: 'remove',
      });
    });

    return recommendations;
  },
};

/**
 * Runtime bundle monitoring
 */
export class BundleMonitor {
  private static instance: BundleMonitor;
  private observers: Array<(_analysis: ReturnType<typeof getBundleAnalysis>) => void> = [];
  private intervalId: number | undefined;

  static getInstance(): BundleMonitor {
    if (!BundleMonitor.instance) {
      BundleMonitor.instance = new BundleMonitor();
    }
    return BundleMonitor.instance;
  }

  /**
   * Start monitoring bundle performance
   */
  startMonitoring(intervalMs: number = 30_000): void {
    if (this.intervalId) {
      this.stopMonitoring();
    }

    this.intervalId = window.setInterval(() => {
      const analysis = getBundleAnalysis();
      this.observers.forEach((observer) => observer(analysis));
    }, intervalMs);
  }

  /**
   * Stop monitoring
   */
  stopMonitoring(): void {
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }

  /**
   * Add observer for bundle analysis updates
   */
  addObserver(observer: (_analysis: ReturnType<typeof getBundleAnalysis>) => void): void {
    this.observers.push(observer);
  }

  /**
   * Remove observer
   */
  removeObserver(observer: (_analysis: ReturnType<typeof getBundleAnalysis>) => void): void {
    const index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }
}

/**
 * Development-only bundle analysis logging
 */
export function logBundleAnalysis(): void {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const analysis = getBundleAnalysis();
  const recommendations = optimizationRecommendations.getRecommendations();

  console.group('📊 Bundle Analysis Report');
  console.log(`Total modules tracked: ${analysis.totalModules}`);

  if (analysis.heavyModules.length > 0) {
    console.group('🐌 Heavy modules (>100ms load time):');
    analysis.heavyModules.forEach((module) => {
      if (module.loadTime) {
        console.log(`  ${module.name}: ${module.loadTime.toFixed(2)}ms`);
      }
    });
    console.groupEnd();
  }

  if (analysis.unusedModules.length > 0) {
    console.group('🗑️ Potentially unused modules:');
    analysis.unusedModules.forEach((module) => {
      const hoursAgo = Math.round((Date.now() - module.lastUsed) / (1000 * 60 * 60));
      console.log(`  ${module.name}: last used ${hoursAgo}h ago`);
    });
    console.groupEnd();
  }

  if (recommendations.length > 0) {
    console.group('💡 Optimization recommendations:');
    recommendations.forEach((rec) => {
      console.log(`  ${rec.impact.toUpperCase()}: ${rec.type} ${rec.module} - ${rec.reason}`);
    });
    console.groupEnd();
  }

  console.groupEnd();
}

// Auto-register common modules
if (typeof window !== 'undefined') {
  // Track initial bundle load
  registerModuleUsage('main-bundle', 0);

  // Log analysis in development after app initialization
  if (process.env.NODE_ENV === 'development') {
    setTimeout(() => {
      logBundleAnalysis();
    }, 5000);
  }
}
