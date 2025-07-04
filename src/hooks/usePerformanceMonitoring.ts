import { consola } from 'consola';
import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Advanced performance monitoring hooks for React components
 */

// =============================================================================
// PERFORMANCE MONITORING TYPES
// =============================================================================

interface PerformanceMetrics {
  averageRenderTime: number;
  lastUpdate: number;
  mountTime: number;
  renderTime: number;
  updateCount: number;
}

interface ComponentPerformanceData {
  metrics: PerformanceMetrics;
  name: string;
  warnings: string[];
}

interface BundleLoadMetrics {
  cached: boolean;
  componentName: string;
  loadTime: number;
  size?: number;
}

interface UserInteractionMetrics {
  duration?: number;
  target: string;
  timestamp: number;
  type: 'click' | 'scroll' | 'input' | 'navigation';
}

// =============================================================================
// PERFORMANCE THRESHOLDS
// =============================================================================

const PERFORMANCE_THRESHOLDS = {
  BUNDLE_LOAD_ERROR: 3000,

  // Too many updates in short time
  BUNDLE_LOAD_WARNING: 1000,

  MOUNT_TIME_ERROR: 500,

  // Severe performance issue
  MOUNT_TIME_WARNING: 100,

  // 60fps threshold
  RENDER_TIME_ERROR: 50,

  RENDER_TIME_WARNING: 16,
  UPDATE_COUNT_WARNING: 10,
} as const;

// =============================================================================
// COMPONENT PERFORMANCE MONITORING
// =============================================================================

/**
 * Enhanced performance monitoring hook for React components
 */
export const useComponentPerformance = (componentName: string, enabled = __DEV__) => {
  const metricsRef = useRef<PerformanceMetrics>({
    averageRenderTime: 0,
    lastUpdate: 0,
    mountTime: 0,
    renderTime: 0,
    updateCount: 0,
  });

  const renderStartRef = useRef<number>();
  const mountStartRef = useRef<number>();
  const renderTimesRef = useRef<number[]>([]);

  // Track component mount
  useEffect(() => {
    if (!enabled) return;

    mountStartRef.current = performance.now();

    return () => {
      if (mountStartRef.current) {
        const mountTime = performance.now() - mountStartRef.current;
        metricsRef.current.mountTime = mountTime;

        // Log mount performance
        if (mountTime > PERFORMANCE_THRESHOLDS.MOUNT_TIME_ERROR) {
          consola.error(`🐌 ${componentName}: Slow mount (${mountTime.toFixed(2)}ms)`);
        } else if (mountTime > PERFORMANCE_THRESHOLDS.MOUNT_TIME_WARNING) {
          consola.warn(`⚠️ ${componentName}: Mount time (${mountTime.toFixed(2)}ms)`);
        }
      }
    };
  }, [componentName, enabled]);

  // Track render performance
  useEffect(() => {
    if (!enabled) return;

    if (renderStartRef.current) {
      const renderTime = performance.now() - renderStartRef.current;

      // Update metrics
      metricsRef.current.renderTime = renderTime;
      metricsRef.current.updateCount++;
      metricsRef.current.lastUpdate = Date.now();

      // Track render times for average calculation
      renderTimesRef.current.push(renderTime);
      if (renderTimesRef.current.length > 10) {
        renderTimesRef.current.shift(); // Keep only last 10 renders
      }

      // Calculate average render time
      metricsRef.current.averageRenderTime =
        renderTimesRef.current.reduce((sum, time) => sum + time, 0) / renderTimesRef.current.length;

      // Log performance issues
      if (renderTime > PERFORMANCE_THRESHOLDS.RENDER_TIME_ERROR) {
        consola.error(`🐌 ${componentName}: Slow render (${renderTime.toFixed(2)}ms)`);
      } else if (renderTime > PERFORMANCE_THRESHOLDS.RENDER_TIME_WARNING) {
        consola.warn(`⚠️ ${componentName}: Render time (${renderTime.toFixed(2)}ms)`);
      }
    }

    renderStartRef.current = performance.now();
  });

  // Get current metrics
  const getMetrics = useCallback((): ComponentPerformanceData => {
    const warnings: string[] = [];
    const metrics = metricsRef.current;

    if (metrics.renderTime > PERFORMANCE_THRESHOLDS.RENDER_TIME_WARNING) {
      warnings.push(`Slow render time: ${metrics.renderTime.toFixed(2)}ms`);
    }

    if (metrics.mountTime > PERFORMANCE_THRESHOLDS.MOUNT_TIME_WARNING) {
      warnings.push(`Slow mount time: ${metrics.mountTime.toFixed(2)}ms`);
    }

    if (metrics.updateCount > PERFORMANCE_THRESHOLDS.UPDATE_COUNT_WARNING) {
      const timeSinceMount = Date.now() - (mountStartRef.current || Date.now());
      if (timeSinceMount < 5000) {
        // 5 seconds
        warnings.push(`High update frequency: ${metrics.updateCount} updates`);
      }
    }

    return {
      metrics: { ...metrics },
      name: componentName,
      warnings,
    };
  }, [componentName]);

  return {
    averageRenderTime: metricsRef.current.averageRenderTime,
    getMetrics,
    renderTime: metricsRef.current.renderTime,
  };
};

// =============================================================================
// BUNDLE LOAD MONITORING
// =============================================================================

/**
 * Monitor bundle loading performance
 */
export const useBundleLoadMonitoring = (enabled = __DEV__) => {
  const [loadMetrics, setLoadMetrics] = useState<BundleLoadMetrics[]>([]);

  const trackBundleLoad = useCallback(
    (componentName: string, loadPromise: Promise<any>, size?: number) => {
      if (!enabled) return loadPromise;

      const startTime = performance.now();

      return loadPromise
        .then((result) => {
          const loadTime = performance.now() - startTime;
          const metrics: BundleLoadMetrics = {
            cached: loadTime < 10,
            componentName,
            loadTime,
            size: size || 0, // Default to 0 if size is undefined
          };

          setLoadMetrics((prev) => [...prev.slice(-9), metrics]); // Keep last 10

          // Log performance
          if (loadTime > PERFORMANCE_THRESHOLDS.BUNDLE_LOAD_ERROR) {
            consola.error(`📦 ${componentName}: Slow bundle load (${loadTime.toFixed(2)}ms)`);
          } else if (loadTime > PERFORMANCE_THRESHOLDS.BUNDLE_LOAD_WARNING) {
            consola.warn(`📦 ${componentName}: Bundle load time (${loadTime.toFixed(2)}ms)`);
          } else {
            consola.info(`📦 ${componentName}: Loaded in ${loadTime.toFixed(2)}ms`);
          }

          return result;
        })
        .catch((error) => {
          const loadTime = performance.now() - startTime;
          consola.error(
            `📦 ${componentName}: Failed to load after ${loadTime.toFixed(2)}ms`,
            error,
          );
          throw error;
        });
    },
    [enabled],
  );

  return {
    averageLoadTime:
      loadMetrics.length > 0
        ? loadMetrics.reduce((sum, m) => sum + m.loadTime, 0) / loadMetrics.length
        : 0,
    loadMetrics,
    trackBundleLoad,
  };
};

// =============================================================================
// USER INTERACTION MONITORING
// =============================================================================

/**
 * Monitor user interaction performance
 */
export const useUserInteractionMonitoring = (enabled = __DEV__) => {
  const [interactions, setInteractions] = useState<UserInteractionMetrics[]>([]);
  const interactionStartRef = useRef<{ [key: string]: number }>({});

  const trackInteractionStart = useCallback(
    (type: UserInteractionMetrics['type'], target: string) => {
      if (!enabled) return;

      const key = `${type}-${target}`;
      interactionStartRef.current[key] = performance.now();
    },
    [enabled],
  );

  const trackInteractionEnd = useCallback(
    (type: UserInteractionMetrics['type'], target: string) => {
      if (!enabled) return;

      const key = `${type}-${target}`;
      const startTime = interactionStartRef.current[key];

      if (startTime) {
        const duration = performance.now() - startTime;
        const interaction: UserInteractionMetrics = {
          duration,
          target,
          timestamp: Date.now(),
          type,
        };

        setInteractions((prev) => [...prev.slice(-19), interaction]); // Keep last 20

        // Log slow interactions
        if (duration > 100) {
          consola.warn(`🖱️ Slow ${type} interaction on ${target}: ${duration.toFixed(2)}ms`);
        }

        delete interactionStartRef.current[key];
      }
    },
    [enabled],
  );

  const trackClick = useCallback(
    (target: string) => {
      if (!enabled) return { onMouseDown: undefined, onMouseUp: undefined };

      return {
        onMouseDown: () => trackInteractionStart('click', target),
        onMouseUp: () => trackInteractionEnd('click', target),
      };
    },
    [enabled, trackInteractionStart, trackInteractionEnd],
  );

  return {
    averageInteractionTime:
      interactions.length > 0
        ? interactions
            .filter((i) => i.duration !== undefined)
            .reduce((sum, i) => sum + (i.duration || 0), 0) / interactions.length
        : 0,
    interactions,
    trackClick,
    trackInteractionEnd,
    trackInteractionStart,
  };
};

// =============================================================================
// MEMORY USAGE MONITORING
// =============================================================================

/**
 * Monitor memory usage (when available)
 */
export const useMemoryMonitoring = (enabled = __DEV__) => {
  const [memoryInfo, setMemoryInfo] = useState<{
    jsHeapSizeLimit?: number;
    totalJSHeapSize?: number;
    usedJSHeapSize?: number;
  }>({});

  useEffect(() => {
    if (!enabled) return;

    const updateMemoryInfo = () => {
      // @ts-ignore - performance.memory is not in all browsers
      if (performance.memory) {
        // @ts-ignore
        const { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit } = performance.memory;
        setMemoryInfo({
          jsHeapSizeLimit,
          totalJSHeapSize,
          usedJSHeapSize,
        });

        // Warn about high memory usage
        const usagePercent = (usedJSHeapSize / jsHeapSizeLimit) * 100;
        if (usagePercent > 80) {
          consola.warn(`🧠 High memory usage: ${usagePercent.toFixed(1)}%`);
        }
      }
    };

    updateMemoryInfo();
    const interval = setInterval(updateMemoryInfo, 10_000); // Check every 10 seconds

    return () => clearInterval(interval);
  }, [enabled]);

  return memoryInfo;
};

// =============================================================================
// COMPREHENSIVE PERFORMANCE DASHBOARD
// =============================================================================

/**
 * Comprehensive performance monitoring dashboard
 */
export const usePerformanceDashboard = (enabled = __DEV__) => {
  const bundleMonitoring = useBundleLoadMonitoring(enabled);
  const interactionMonitoring = useUserInteractionMonitoring(enabled);
  const memoryInfo = useMemoryMonitoring(enabled);

  const generateReport = useCallback(() => {
    if (!enabled) return null;

    return {
      bundle: {
        averageLoadTime: bundleMonitoring.averageLoadTime,
        recentLoads: bundleMonitoring.loadMetrics.slice(-5),
      },
      interactions: {
        averageTime: interactionMonitoring.averageInteractionTime,
        recentInteractions: interactionMonitoring.interactions.slice(-5),
      },
      memory: memoryInfo,
      timestamp: new Date().toISOString(),
    };
  }, [enabled, bundleMonitoring, interactionMonitoring, memoryInfo]);

  const logReport = useCallback(() => {
    const report = generateReport();
    if (report) {
      consola.info('📊 Performance Dashboard:', report);
    }
  }, [generateReport]);

  return {
    ...bundleMonitoring,
    ...interactionMonitoring,
    generateReport,
    logReport,
    memoryInfo,
  };
};
