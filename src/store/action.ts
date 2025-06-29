import { consola } from 'consola';
import { debounce } from 'lodash-es';
import type { StateCreator } from 'zustand/vanilla';

import { getLatestVersion, getLocaleOptions, getSetting, getVersion, postSetting } from './api';
import { DEFAULT_SETTING, type WebuiSetting } from './initialState';
import type { Store } from './store';

export const SETTING_KEY = 'SD-LOBE-SETTING';
export const FALLBACK_SETTING_KEY = 'SD-KITCHEN-SETTING';

// Cache for localStorage operations to reduce redundant reads
const localStorageCache = new Map<string, Partial<WebuiSetting>>();

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
  // New optimized methods
  onBatchUpdateSetting: (settings: Partial<WebuiSetting>[]) => Promise<void>;
  onInit: () => Promise<void>;
  onLoadLatestVersion: () => Promise<void>;
  onLoadLocalOptions: () => Promise<void>;
  onLoadSetting: () => Promise<void>;
  onLoadVersion: () => Promise<void>;
  onSetSetting: (setting: Partial<WebuiSetting>) => Promise<void>;

  onSetThemeMode: (themeMode: 'light' | 'dark') => void;
  setCurrentTab: () => void;
}

export const createSettings: StateCreator<Store, [['zustand/devtools', never]], [], StoreAction> = (
  set,
  get,
) => ({
  clearCache: () => {
    localStorageCache.clear();
    consola.info('🤯 [cache] cleared localStorage cache');
  },

  // New method for batch updates
  onBatchUpdateSetting: async (settingUpdates) => {
    const oldSetting = get().setting;
    const newSetting = settingUpdates.reduce<WebuiSetting>(
      (acc, update) => mergeSettings(acc, update),
      oldSetting,
    );

    set(() => ({ setting: newSetting }), false, 'onBatchUpdateSetting');

    debouncedLocalStorageSet(SETTING_KEY, JSON.stringify(newSetting));

    try {
      await postSetting(newSetting);
    } catch (error) {
      consola.error('Failed to post batch setting update:', error);
    }
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
});
