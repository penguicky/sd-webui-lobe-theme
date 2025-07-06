import { consola } from 'consola';
import { shallow } from 'zustand/shallow';

import type { WebuiSetting } from './initialState';
import type { Store } from './store';

/**
 * State normalization utilities for complex nested data
 */
export class StateNormalizer {
  /**
   * Normalize theme-related settings
   */
  static normalizeThemeSettings(settings: Partial<WebuiSetting>): Partial<WebuiSetting> {
    const normalized: Partial<WebuiSetting> = { ...settings };

    // Validate color values
    if (normalized.primaryColor && !this.isValidColor(normalized.primaryColor)) {
      delete normalized.primaryColor;
    }
    if (normalized.neutralColor && !this.isValidColor(normalized.neutralColor)) {
      delete normalized.neutralColor;
    }

    return normalized;
  }

  /**
   * Normalize layout-related settings
   */
  static normalizeLayoutSettings(settings: Partial<WebuiSetting>): Partial<WebuiSetting> {
    const normalized: Partial<WebuiSetting> = { ...settings };

    // Validate numeric ranges
    if (normalized.sidebarWidth !== undefined) {
      normalized.sidebarWidth = Math.max(200, Math.min(500, normalized.sidebarWidth));
    }
    if (normalized.extraNetworkSidebarWidth !== undefined) {
      normalized.extraNetworkSidebarWidth = Math.max(
        200,
        Math.min(600, normalized.extraNetworkSidebarWidth),
      );
    }
    if (normalized.extraNetworkCardSize !== undefined) {
      normalized.extraNetworkCardSize = Math.max(
        50,
        Math.min(200, normalized.extraNetworkCardSize),
      );
    }

    return normalized;
  }

  /**
   * Validate color string format
   */
  private static isValidColor(color: string): boolean {
    // Basic hex color validation
    return /^#([\dA-Fa-f]{6}|[\dA-Fa-f]{3})$/.test(color);
  }
}

/**
 * Enhanced state persistence with compression and migration
 */
export class StatePersistence {
  private static readonly COMPRESSION_THRESHOLD = 1000; // bytes
  private static readonly CURRENT_VERSION = '1.0.0';

  /**
   * Persist state with optional compression
   */
  static persist<T>(
    key: string,
    data: T,
    options: { compress?: boolean; version?: string } = {},
  ): void {
    try {
      const { compress = false, version = this.CURRENT_VERSION } = options;

      const payload = {
        data,
        timestamp: Date.now(),
        version,
      };

      let serialized = JSON.stringify(payload);

      if (compress && serialized.length > this.COMPRESSION_THRESHOLD) {
        // Simple compression by removing whitespace
        serialized = JSON.stringify(payload, null, 0);
      }

      localStorage.setItem(key, serialized);

      if (process.env.NODE_ENV === 'development') {
        consola.info(`📦 Persisted ${key} (${serialized.length} bytes)`);
      }
    } catch (error) {
      consola.error(`Failed to persist ${key}:`, error);
    }
  }

  /**
   * Restore state with migration support
   */
  static restore<T>(key: string, defaultValue: T): T {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return defaultValue;

      const payload = JSON.parse(stored);

      // Handle legacy data without version
      if (!payload.version) {
        return this.migrateLegacyData(payload, defaultValue);
      }

      // Handle version migrations
      if (payload.version !== this.CURRENT_VERSION) {
        return this.migrateData(payload, defaultValue);
      }

      return payload.data;
    } catch (error) {
      consola.error(`Failed to restore ${key}:`, error);
      return defaultValue;
    }
  }

  /**
   * Migrate legacy data format
   */
  private static migrateLegacyData<T>(legacyData: any, defaultValue: T): T {
    consola.info('🔄 Migrating legacy state data');

    // If legacy data looks like our expected format, use it
    if (legacyData && typeof legacyData === 'object') {
      return { ...defaultValue, ...legacyData };
    }

    return defaultValue;
  }

  /**
   * Migrate data between versions
   */
  private static migrateData<T>(payload: any, defaultValue: T): T {
    consola.info(`🔄 Migrating state data from ${payload.version} to ${this.CURRENT_VERSION}`);

    // Add migration logic here as needed
    return { ...defaultValue, ...payload.data };
  }
}

/**
 * Computed state selectors with memoization
 */
export class ComputedSelectors {
  private static selectorCache = new Map<string, { deps: any[]; result: any }>();

  /**
   * Create a memoized selector
   */
  static createMemoizedSelector<T, R>(
    selector: (state: T) => R,
    dependencies: (state: T) => any[],
    key: string,
  ): (state: T) => R {
    return (state: T) => {
      const deps = dependencies(state);
      const cached = this.selectorCache.get(key);

      if (cached && shallow(cached.deps, deps)) {
        return cached.result;
      }

      const result = selector(state);
      this.selectorCache.set(key, { deps, result });
      return result;
    };
  }

  /**
   * Clear selector cache
   */
  static clearCache(): void {
    this.selectorCache.clear();
  }

  /**
   * Get cache statistics
   */
  static getCacheStats(): { keys: string[]; size: number } {
    return {
      keys: Array.from(this.selectorCache.keys()),
      size: this.selectorCache.size,
    };
  }
}

/**
 * Performance-optimized selectors for common use cases
 */
export const optimizedSelectors = {
  // Layout-related computed selectors
  layoutConfig: ComputedSelectors.createMemoizedSelector(
    (state: Store) => ({
      extraNetworkEnabled: state.setting.enableExtraNetworkSidebar,
      extraNetworkExpanded: state.setting.extraNetworkSidebarExpand,
      hideFooter: state.setting.layoutHideFooter,
      sidebarEnabled: state.setting.enableSidebar,
      sidebarExpanded: state.setting.sidebarExpand,
      sidebarWidth: state.setting.sidebarWidth,
      splitPreview: state.setting.layoutSplitPreview,
    }),
    (state: Store) => [
      state.setting.enableSidebar,
      state.setting.sidebarExpand,
      state.setting.sidebarWidth,
      state.setting.enableExtraNetworkSidebar,
      state.setting.extraNetworkSidebarExpand,
      state.setting.layoutHideFooter,
      state.setting.layoutSplitPreview,
    ],
    'layoutConfig',
  ),

  // UI performance selectors
  performanceConfig: ComputedSelectors.createMemoizedSelector(
    (state: Store) => ({
      enableHighlight: state.setting.enableHighlight,
      enableImageInfo: state.setting.enableImageInfo,
      enableWebFont: state.setting.enableWebFont,
      liteAnimation: state.setting.liteAnimation,
      svgIcon: state.setting.svgIcon,
    }),
    (state: Store) => [
      state.setting.liteAnimation,
      state.setting.enableHighlight,
      state.setting.enableImageInfo,
      state.setting.svgIcon,
      state.setting.enableWebFont,
    ],
    'performanceConfig',
  ),

  // Theme-related computed selectors
  themeConfig: ComputedSelectors.createMemoizedSelector(
    (state: Store) => ({
      hasCustomColors: Boolean(state.setting.primaryColor || state.setting.neutralColor),
      mode: state.themeMode,
      neutralColor: state.setting.neutralColor,
      primaryColor: state.setting.primaryColor,
    }),
    (state: Store) => [state.themeMode, state.setting.primaryColor, state.setting.neutralColor],
    'themeConfig',
  ),
};

/**
 * State change batching utilities
 */
export class StateBatcher {
  private static batchQueue = new Map<string, any>();
  private static batchTimeout: NodeJS.Timeout | null = null;
  private static readonly BATCH_DELAY = 50; // 50ms

  /**
   * Add a state change to the batch
   */
  static addToBatch(key: string, value: any): void {
    this.batchQueue.set(key, value);

    if (this.batchTimeout) {
      clearTimeout(this.batchTimeout);
    }

    this.batchTimeout = setTimeout(() => {
      this.processBatch();
    }, this.BATCH_DELAY);
  }

  /**
   * Process the batched changes
   */
  private static processBatch(): void {
    if (this.batchQueue.size === 0) return;

    const changes = Object.fromEntries(this.batchQueue);
    this.batchQueue.clear();
    this.batchTimeout = null;

    // Emit batched changes event
    if (this.onBatchProcess) {
      this.onBatchProcess(changes);
    }
  }

  /**
   * Callback for processing batched changes
   */
  static onBatchProcess: ((changes: Record<string, any>) => void) | null = null;

  /**
   * Clear the batch queue
   */
  static clearBatch(): void {
    if (this.batchTimeout) {
      clearTimeout(this.batchTimeout);
      this.batchTimeout = null;
    }
    this.batchQueue.clear();
  }
}
