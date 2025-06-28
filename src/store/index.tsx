import { devtools } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

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
export { type Store } from './store';

// Performance optimized hook with proper typing
export function useOptimizedSelector<T>(selector: (state: Store) => T, equalityFn = shallow): T {
  return useAppStore(selector, equalityFn);
}

// Common selectors for better reusability
export const commonSelectors = {
  currentTab: (state: Store) => state.currentTab,
  latestVersion: (state: Store) => state.latestVersion,
  // Settings selectors
  layoutSettings: (state: Store) => ({
    layoutHideFooter: state.setting.layoutHideFooter,
    layoutSplitPreview: state.setting.layoutSplitPreview,
  }),

  loading: (state: Store) => state.loading,

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
