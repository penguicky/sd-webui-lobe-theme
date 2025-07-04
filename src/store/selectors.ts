import { DEFAULT_SETTING } from './initialState';
import type { Store } from './store';

// Memoized selectors for performance optimization
const currentSetting = (s: Store) => ({ ...DEFAULT_SETTING, ...s.setting });

// Computed state selectors with memoization
const currentLanguage = (s: Store) => currentSetting(s).i18n;
const currentTab = (s: Store) => s.currentTab;
const themeMode = (s: Store) => s.themeMode;

// Normalized state selectors for complex nested data
const themeSettings = (s: Store) => ({
  liteAnimation: s.setting.liteAnimation,
  neutralColor: s.setting.neutralColor,
  primaryColor: s.setting.primaryColor,
  themeMode: s.themeMode,
});

const layoutSettings = (s: Store) => ({
  enableSidebar: s.setting.enableSidebar,
  layoutHideFooter: s.setting.layoutHideFooter,
  layoutSplitPreview: s.setting.layoutSplitPreview,
  sidebarExpand: s.setting.sidebarExpand,
  sidebarFixedMode: s.setting.sidebarFixedMode,
  sidebarWidth: s.setting.sidebarWidth,
});

const uiSettings = (s: Store) => ({
  confirmPageUnload: s.setting.confirmPageUnload,
  enableHighlight: s.setting.enableHighlight,
  enableImageInfo: s.setting.enableImageInfo,
  enableWebFont: s.setting.enableWebFont,
  svgIcon: s.setting.svgIcon,
});

const extraNetworkSettings = (s: Store) => ({
  enableExtraNetworkSidebar: s.setting.enableExtraNetworkSidebar,
  extraNetworkCardSize: s.setting.extraNetworkCardSize,
  extraNetworkFixedMode: s.setting.extraNetworkFixedMode,
  extraNetworkSidebarExpand: s.setting.extraNetworkSidebarExpand,
  extraNetworkSidebarWidth: s.setting.extraNetworkSidebarWidth,
});

const promptSettings = (s: Store) => ({
  enableHighlight: s.setting.enableHighlight,
  promptEditor: s.setting.promptEditor,
  promptTextareaType: s.setting.promptTextareaType,
});

const logoSettings = (s: Store) => ({
  logoCustomTitle: s.setting.logoCustomTitle,
  logoCustomUrl: s.setting.logoCustomUrl,
  logoType: s.setting.logoType,
});

// Performance-critical computed selectors
const isDarkMode = (s: Store) => s.themeMode === 'dark';
const isLightMode = (s: Store) => s.themeMode === 'light';
const hasCustomColors = (s: Store) => Boolean(s.setting.primaryColor || s.setting.neutralColor);
const isLoading = (s: Store) => s.loading;

// Version and update selectors
const versionInfo = (s: Store) => ({
  hasUpdate: s.version !== s.latestVersion,
  latestVersion: s.latestVersion,
  version: s.version,
});

export const selectors = {
  // Basic selectors
  currentLanguage,
  currentSetting,
  currentTab,
  extraNetworkSettings,

  hasCustomColors,

  // Computed selectors
  isDarkMode,

  isLightMode,

  isLoading,

  layoutSettings,

  logoSettings,

  promptSettings,

  themeMode,
  // Normalized state selectors
  themeSettings,
  uiSettings,
  versionInfo,
};
