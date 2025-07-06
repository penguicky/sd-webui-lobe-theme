import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { optimizedSelectors } from './stateOptimization';
import { type Store, createStore } from './store';

// Create optimized store with devtools only in development
export const useAppStore = createWithEqualityFn<Store>()(
  devtools(createStore, {
    enabled: typeof window !== 'undefined' && (window as any).__DEV__,
    name: 'sd-webui-lobe-theme-store',
  }),
  shallow,
);

export * from './action';
export * from './initialState';
export { selectors } from './selectors';
export * from './stateOptimization';
export { type Store } from './store';

// Performance optimized hook with proper typing
export function useOptimizedSelector<T>(selector: (state: Store) => T, equalityFn = shallow): T {
  return useAppStore(selector, equalityFn);
}

// Enhanced selectors with performance optimizations
export const commonSelectors = {
  // Basic selectors
  currentTab: (state: Store) => state.currentTab,
  latestVersion: (state: Store) => state.latestVersion,
  layoutConfig: optimizedSelectors.layoutConfig,

  // Legacy selectors for backward compatibility
  layoutSettings: (state: Store) => ({
    layoutHideFooter: state.setting.layoutHideFooter,
    layoutSplitPreview: state.setting.layoutSplitPreview,
  }),

  loading: (state: Store) => state.loading,

  performanceConfig: optimizedSelectors.performanceConfig,

  promptSettings: (state: Store) => ({
    promptEditor: state.setting.promptEditor,
    promptTextareaType: state.setting.promptTextareaType,
  }),

  sidebarSettings: (state: Store) => ({
    enableExtraNetworkSidebar: state.setting.enableExtraNetworkSidebar,
    enableSidebar: state.setting.enableSidebar,
    sidebarExpand: state.setting.sidebarExpand,
    sidebarFixedMode: state.setting.sidebarFixedMode,
    sidebarWidth: state.setting.sidebarWidth,
  }),

  // Optimized computed selectors
  themeConfig: optimizedSelectors.themeConfig,

  themeMode: (state: Store) => state.themeMode,

  uiSettings: (state: Store) => ({
    enableHighlight: state.setting.enableHighlight,
    enableImageInfo: state.setting.enableImageInfo,
    liteAnimation: state.setting.liteAnimation,
    neutralColor: state.setting.neutralColor,
    primaryColor: state.setting.primaryColor,
    svgIcon: state.setting.svgIcon,
  }),

  version: (state: Store) => state.version,
};

// Performance-optimized hooks for common use cases
export const useThemeConfig = () => useAppStore(optimizedSelectors.themeConfig);
export const useLayoutConfig = () => useAppStore(optimizedSelectors.layoutConfig);
export const usePerformanceConfig = () => useAppStore(optimizedSelectors.performanceConfig);
