import { LayoutHeader, LayoutMain, LayoutSidebar } from '@lobehub/ui';
import { Suspense, lazy, memo, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import StructuredData from '@/components/StructuredData';
import PromptFormator from '@/features/PromptFormator';
import { warmShikiCache } from '@/hooks/usePerformanceOptimized';
import '@/locales/config';
import ImageInfo from '@/modules/ImageInfo/page';
import PromptHighlight from '@/modules/PromptHighlight/page';
import replaceIcon from '@/scripts/replaceIcon';
import { useAppStore } from '@/store';
import GlobalStyle from '@/styles';
import { getBrowserCompatibilityReport } from '@/utils/browserCompat';

import Content from '../features/Content';
import ExtraNetworkSidebar from '../features/ExtraNetworkSidebar';
import Footer from '../features/Footer';
import Header from '../features/Header';
import QuickSettingSidebar from '../features/QuickSettingSidebar';
import { useStyles } from './style';

// Lazy load non-critical components
const Share = lazy(() => import('../features/Share'));

export const HEADER_HEIGHT = 64;

// =============================================================================
// DEBUG SYSTEM - SHARED WITH HIGHLIGHT COMPONENTS
// =============================================================================

// Access the shared debug state from useHighlight
const getDebugState = (): boolean => {
  try {
    return (window as any).HIGHLIGHT_DEBUG_STATE?.get() || false;
  } catch {
    return false;
  }
};

// Debug utilities that check the shared state
const debugLog = (message: string, data?: any) => {
  if (getDebugState()) {
    if (data) {
      console.log(message, data);
    } else {
      console.log(message);
    }
  }
};

// Optimized selectors
const selectLayoutSettings = (state: any) => ({
  enableExtraNetworkSidebar: state.setting.enableExtraNetworkSidebar,
  enableHighlight: state.setting.enableHighlight,
  enableImageInfo: state.setting.enableImageInfo,
  enableSidebar: state.setting.enableSidebar,
  liteAnimation: state.setting.liteAnimation,
  primaryColor: state.setting.primaryColor,
  svgIcon: state.setting.svgIcon,
});

const Index = memo(() => {
  // Use optimized selectors
  const {
    enableSidebar,
    enableExtraNetworkSidebar,
    enableHighlight,
    enableImageInfo,
    svgIcon,
    liteAnimation,
    primaryColor,
  } = useAppStore(selectLayoutSettings, shallow);

  const { cx, styles } = useStyles({
    headerHeight: HEADER_HEIGHT,
    isPrimaryColor: Boolean(primaryColor),
  });

  // Initialize Shiki cache warming and other optimizations
  useEffect(() => {
    debugLog('🚀 App initialization started');
    debugLog('Current settings:', {
      enableExtraNetworkSidebar,
      enableHighlight,
      enableImageInfo,
      enableSidebar,
      svgIcon,
    });

    // Check browser compatibility
    getBrowserCompatibilityReport();

    // Always warm Shiki cache if highlighting is enabled
    if (enableHighlight) {
      debugLog('🔥 Highlighting enabled - triggering Shiki cache warming...');
      warmShikiCache().catch((error) => {
        console.error('❌ Failed to warm Shiki cache:', error);
      });
    } else {
      debugLog('⚠️ Prompt highlighting is DISABLED in settings');
      debugLog('💡 Enable it in: Settings → Prompt Syntax Highlighting');
    }
  }, [enableHighlight]);

  // Add a one-time initialization log
  useEffect(() => {
    debugLog('🎨 LobeHub Theme initialized');
    debugLog('📖 Debug utilities available:');
    debugLog('  - debugShikiSetup() - Full diagnostics');
    debugLog('  - testBasicHighlighting() - Test core highlighting function');
    debugLog('  - testHighlightResponsiveness() - Test highlighting speed');
    debugLog('  - clearHighlightCache() - Clear cache for immediate updates');
    debugLog('  - forceRefreshHighlighting() - Force refresh all highlighting');
    debugLog('  - forceCompleteAllHighlighting() - EMERGENCY: Force stop all loading');
    debugLog('  - adjustHighlightAlignment(x, y) - Fine-tune positioning');
  }, []);

  useEffect(() => {
    // Batch DOM operations to avoid blocking the main thread
    const tasks: Array<() => void> = [];

    if (enableHighlight) {
      tasks.push(() => PromptHighlight());
    }

    if (enableImageInfo) {
      tasks.push(() => ImageInfo());
    }

    if (svgIcon) {
      tasks.push(() => replaceIcon());
    }

    // Execute all tasks in the next frame to avoid blocking rendering
    if (tasks.length > 0) {
      requestAnimationFrame(() => {
        tasks.forEach((task) => {
          try {
            task();
          } catch (error) {
            console.error('Failed to execute initialization task:', error);
          }
        });
      });
    }
  }, [enableHighlight, enableImageInfo, svgIcon]);

  return (
    <>
      <StructuredData />
      <GlobalStyle />
      <LayoutHeader headerHeight={HEADER_HEIGHT}>
        <Header />
      </LayoutHeader>
      <LayoutMain>
        <div className={liteAnimation ? styles.backgroundLite : styles.background} />
        {enableSidebar && (
          <LayoutSidebar
            className={styles.sidebar}
            headerHeight={HEADER_HEIGHT}
            style={{ flex: 0, zIndex: 50 }}
          >
            <QuickSettingSidebar headerHeight={HEADER_HEIGHT} />
          </LayoutSidebar>
        )}
        <Content className={cx(!enableSidebar && styles.quicksettings)} />
        <PromptFormator />
        <Suspense fallback={null}>
          <Share />
        </Suspense>
        {enableExtraNetworkSidebar && (
          <LayoutSidebar
            className={styles.sidebar}
            headerHeight={HEADER_HEIGHT}
            style={{ flex: 0, zIndex: 50 }}
          >
            <ExtraNetworkSidebar headerHeight={HEADER_HEIGHT} />
          </LayoutSidebar>
        )}
      </LayoutMain>
      <Footer />
    </>
  );
});

Index.displayName = 'App';

export default Index;
