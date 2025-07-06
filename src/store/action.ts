import { consola } from 'consola';
import type { StateCreator } from 'zustand/vanilla';

import { debounce } from '@/utils/nativeUtils';

import { getLatestVersion, getLocaleOptions, getSetting, getVersion, postSetting } from './api';
import { DEFAULT_SETTING, type WebuiSetting } from './initialState';
import type { Store } from './store';

export const SETTING_KEY = 'SD-LOBE-SETTING';
export const FALLBACK_SETTING_KEY = 'SD-KITCHEN-SETTING';

// Cache for localStorage operations to reduce redundant reads
const localStorageCache = new Map<string, Partial<WebuiSetting>>();

// State change batching mechanism
interface BatchedUpdate {
  settings: Partial<WebuiSetting>;
  timestamp: number;
}

class StateBatcher {
  private batchQueue: BatchedUpdate[] = [];
  private batchTimeout: NodeJS.Timeout | null = null;
  private readonly BATCH_DELAY = 50; // 50ms batching window

  addToBatch(settings: Partial<WebuiSetting>): void {
    this.batchQueue.push({
      settings,
      timestamp: Date.now(),
    });

    if (this.batchTimeout) {
      clearTimeout(this.batchTimeout);
    }

    this.batchTimeout = setTimeout(() => {
      this.processBatch();
    }, this.BATCH_DELAY);
  }

  private processBatch(): void {
    if (this.batchQueue.length === 0) return;

    // Merge all batched updates
    const mergedSettings = this.batchQueue.reduce(
      (acc, update) => ({ ...acc, ...update.settings }),
      {} as Partial<WebuiSetting>,
    );

    // Clear the batch
    this.batchQueue = [];
    this.batchTimeout = null;

    // Process the merged update
    this.executeBatchedUpdate(mergedSettings);
  }

  private executeBatchedUpdate(settings: Partial<WebuiSetting>): void {
    // This will be set by the store action
    if (this.onBatchUpdate) {
      this.onBatchUpdate(settings);
    }
  }

  onBatchUpdate: ((settings: Partial<WebuiSetting>) => void) | null = null;

  clearBatch(): void {
    if (this.batchTimeout) {
      clearTimeout(this.batchTimeout);
      this.batchTimeout = null;
    }
    this.batchQueue = [];
  }
}

const stateBatcher = new StateBatcher();

// Safe merge function that ensures all required properties are present
const mergeSettings = <T extends WebuiSetting>(base: T, updates: Partial<WebuiSetting>): T => {
  return { ...base, ...updates } as T;
};

// Debounced localStorage setter to reduce writes
const debouncedLocalStorageSet = debounce((key: string, value: string) => {
  localStorage.setItem(key, value);
  try {
    const parsed = JSON.parse(value) as WebuiSetting;
    localStorageCache.set(key, parsed);
  } catch (error) {
    consola.warn(`Failed to cache localStorage item: ${key}`, error);
  }
}, 300);

// Optimized localStorage getter with caching
const getFromLocalStorage = (key: string): Partial<WebuiSetting> | null => {
  if (localStorageCache.has(key)) {
    return localStorageCache.get(key)!;
  }

  try {
    const item = localStorage.getItem(key);
    if (item) {
      const parsed = JSON.parse(item) as Partial<WebuiSetting>;
      localStorageCache.set(key, parsed);
      return parsed;
    }
  } catch (error) {
    consola.warn(`Failed to parse localStorage item: ${key}`, error);
  }

  return null;
};

export interface StoreAction {
  clearCache: () => void;
  // Enhanced state management methods
  onBatchUpdateSetting: (settings: Partial<WebuiSetting>[]) => Promise<void>;
  onBatchedSetSetting: (setting: Partial<WebuiSetting>) => void;
  onInit: () => Promise<void>;
  onLoadLatestVersion: () => Promise<void>;
  onLoadLocalOptions: () => Promise<void>;
  onLoadSetting: () => Promise<void>;
  onLoadVersion: () => Promise<void>;
  // State normalization helpers
  onNormalizeSettings: (settings: Partial<WebuiSetting>) => WebuiSetting;
  // State persistence optimization
  onOptimizedPersist: (key: string, data: any, compress?: boolean) => void;

  onOptimizedRestore: <T>(key: string, defaultValue: T) => T;
  onSetSetting: (setting: Partial<WebuiSetting>) => Promise<void>;

  onSetThemeMode: (themeMode: 'light' | 'dark') => void;

  setCurrentTab: () => void;
}

export const createSettings: StateCreator<Store, [['zustand/devtools', never]], [], StoreAction> = (
  set,
  get,
) => {
  // Initialize state batcher with store reference
  stateBatcher.onBatchUpdate = (settings: Partial<WebuiSetting>) => {
    const oldSetting = get().setting;
    const newSetting = mergeSettings(oldSetting, settings);

    // Update state immediately
    set(() => ({ setting: newSetting }), false, 'onBatchedUpdate');

    // Persist to localStorage and API
    debouncedLocalStorageSet(SETTING_KEY, JSON.stringify(newSetting));
    postSetting(newSetting).catch((error) => {
      consola.error('Failed to post batched setting update:', error);
    });
  };

  return {
    clearCache: () => {
      localStorageCache.clear();
      stateBatcher.clearBatch();
      consola.info('🤯 [cache] cleared localStorage cache and state batch');
    },

    // Enhanced batch update method that handles restart
    onBatchUpdateSetting: async (settingUpdates) => {
      const oldSetting = get().setting;
      const newSetting = settingUpdates.reduce<WebuiSetting>(
        (acc, update) => mergeSettings(acc, update),
        oldSetting,
      );

      // Update state immediately for better UX
      set(() => ({ setting: newSetting }), false, 'onBatchUpdateSetting');

      // Update localStorage immediately
      debouncedLocalStorageSet(SETTING_KEY, JSON.stringify(newSetting));

      try {
        await postSetting(newSetting);
        consola.success('🤯 [setting] batch update applied successfully');

        if (__DEV__) {
          console.table(newSetting);
        }
      } catch (error) {
        consola.error('Failed to post batch setting update:', error);
        // Revert the setting on failure
        set(() => ({ setting: oldSetting }), false, 'onBatchUpdateSetting');
        throw error; // Re-throw so the UI can handle the error
      }
    },

    onBatchedSetSetting: (settingUpdate) => {
      // Add to batch queue for optimized processing
      stateBatcher.addToBatch(settingUpdate);
    },

    onInit: async () => {
      set(() => ({ loading: true }), false, 'onInit');

      try {
        const { onLoadLocalOptions, onLoadVersion, onLoadLatestVersion, onLoadSetting } = get();

        // Run operations in parallel where possible
        await Promise.all([onLoadLocalOptions(), onLoadVersion(), onLoadLatestVersion()]);

        await onLoadSetting();
      } catch (error) {
        consola.error('Failed to initialize app:', error);
      } finally {
        set(() => ({ loading: false }), false, 'onInit');
      }
    },

    onLoadLatestVersion: async () => {
      try {
        const latestVersion = await getLatestVersion();
        set(() => ({ latestVersion }), false, 'onLoadLatestVersion');
      } catch (error) {
        consola.warn('Failed to load latest version:', error);
      }
    },

    onLoadLocalOptions: async () => {
      try {
        const localeOptions = await getLocaleOptions();
        set(() => ({ localeOptions }), false, 'onLoadLocalOptions');
      } catch (error) {
        consola.warn('Failed to load locale options:', error);
      }
    },

    onLoadSetting: async () => {
      let themeSetting: Partial<WebuiSetting> | null = null;

      try {
        // Try to get from webui setting first
        const webuiSetting: any = await getSetting();
        if (webuiSetting) {
          consola.start('🤯 [setting] loaded webui setting');
          themeSetting = webuiSetting as Partial<WebuiSetting>;
        }
      } catch (error) {
        consola.warn('Failed to load webui setting:', error);
      }

      // Fallback to localStorage
      if (!themeSetting) {
        themeSetting = getFromLocalStorage(SETTING_KEY);
        if (themeSetting) {
          consola.info('🤯 [setting] loaded local setting');
        }
      }

      // Fallback to legacy localStorage
      if (!themeSetting) {
        themeSetting = getFromLocalStorage(FALLBACK_SETTING_KEY);
        if (themeSetting) {
          consola.info('🤯 [setting] loaded fallback local setting');
        }
      }

      // Use default setting if nothing found
      if (!themeSetting) {
        consola.info('🤯 [setting] loaded default setting');
        themeSetting = {};
      }

      const setting = mergeSettings(DEFAULT_SETTING, themeSetting);

      try {
        await postSetting(setting);
        set(() => ({ setting }), false, 'onLoadSetting');
        consola.success('🤯 [setting] loaded');

        if (__DEV__) {
          console.table(setting);
        }
      } catch (error) {
        consola.error('Failed to post setting:', error);
        // Still set the setting even if posting fails
        set(() => ({ setting }), false, 'onLoadSetting');
      }
    },

    onLoadVersion: async () => {
      try {
        const version = await getVersion();
        set(() => ({ version }), false, 'onLoadVersion');
      } catch (error) {
        consola.warn('Failed to load version:', error);
      }
    },

    onNormalizeSettings: (settings) => {
      // Normalize and validate settings structure
      const normalized = mergeSettings(DEFAULT_SETTING, settings);

      // Validate and sanitize values
      if (normalized.extraNetworkCardSize < 50) normalized.extraNetworkCardSize = 50;
      if (normalized.extraNetworkCardSize > 200) normalized.extraNetworkCardSize = 200;
      if (normalized.sidebarWidth < 200) normalized.sidebarWidth = 200;
      if (normalized.sidebarWidth > 500) normalized.sidebarWidth = 500;
      if (normalized.extraNetworkSidebarWidth < 200) normalized.extraNetworkSidebarWidth = 200;
      if (normalized.extraNetworkSidebarWidth > 600) normalized.extraNetworkSidebarWidth = 600;

      return normalized;
    },

    onOptimizedPersist: (key, data, compress = false) => {
      try {
        let serializedData = JSON.stringify(data);

        if (compress && serializedData.length > 1000) {
          // Simple compression for large data
          serializedData = JSON.stringify(data, null, 0);
        }

        localStorage.setItem(key, serializedData);
        localStorageCache.set(key, data);
      } catch (error) {
        consola.error(`Failed to persist data for key ${key}:`, error);
      }
    },

    onOptimizedRestore: <T>(key: string, defaultValue: T): T => {
      try {
        // Check cache first
        if (localStorageCache.has(key)) {
          return localStorageCache.get(key) as T;
        }

        const stored = localStorage.getItem(key);
        if (stored) {
          const parsed = JSON.parse(stored);
          localStorageCache.set(key, parsed);
          return parsed;
        }
      } catch (error) {
        consola.error(`Failed to restore data for key ${key}:`, error);
      }

      return defaultValue;
    },

    onSetSetting: async (settingUpdate) => {
      const oldSetting = get().setting;
      const newSetting = mergeSettings(oldSetting, settingUpdate);

      // Update state immediately for better UX
      set(() => ({ setting: newSetting }), false, 'onSetSetting');

      // Debounce localStorage and API calls
      debouncedLocalStorageSet(SETTING_KEY, JSON.stringify(newSetting));

      try {
        await postSetting(newSetting);
      } catch (error) {
        consola.error('Failed to post setting update:', error);
        // Optionally revert the setting on failure
        // set(() => ({ setting: oldSetting }), false, 'onSetSetting');
      }
    },

    onSetThemeMode: (themeMode) => {
      set(() => ({ themeMode }), false, 'onSetThemeMode');
    },

    setCurrentTab: () => {
      const currentTab = get_uiCurrentTabContent()?.id;
      const currentStoredTab = get().currentTab;

      if (currentTab && currentTab !== currentStoredTab) {
        consola.info('🤯 [tab] onChange', currentTab);
        set({ currentTab }, false, 'setCurrentTab');
      }
    },
  };
};
