import { LayoutHeader, LayoutMain, LayoutSidebar } from '@lobehub/ui';
import { lazy, memo, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import { AppErrorBoundary, FeatureErrorBoundary } from '@/components/ErrorBoundary';
import StructuredData from '@/components/StructuredData';
import PromptFormator from '@/features/PromptFormator';
import { useComponentPerformance, usePerformanceDashboard } from '@/hooks/usePerformanceMonitoring';
import { warmShikiCache } from '@/hooks/usePerformanceOptimized';
import { preWarmStyleCache } from '@/utils/styleCache';
import '@/locales/config';
import ImageInfo from '@/modules/ImageInfo/page';
import PromptHighlight from '@/modules/PromptHighlight/page';
import replaceIcon from '@/scripts/replaceIcon';
import { useAppStore } from '@/store';
import GlobalStyle from '@/styles';
import { auditAccessibility } from '@/utils/accessibilityTesting';
import { getBrowserCompatibilityReport } from '@/utils/browserCompat';
import { logChunkPerformance } from '@/utils/lazyOptimized';
import { registerCommonFeatures } from '@/utils/featureLoader';
import { ProgressiveLoader, SuspenseLoader } from '@/components/ProgressiveLoader';

import Content from '../features/Content';
import { useStyles } from './style';
// Lazy load non-critical components for Phase 3 optimization
const Footer = lazy(() => import('../features/Footer'));
const Header = lazy(() => import('../features/Header'));

// Phase 2: Advanced code splitting with progressive loading
// Components are now loaded dynamically using ProgressiveLoader

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

  // Performance monitoring
  const { getMetrics } = useComponentPerformance('App');
  const performanceDashboard = usePerformanceDashboard();

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

    // Register common features for progressive loading
    registerCommonFeatures();

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

    // Pre-warm style cache with current theme for better performance
    const mockTheme = {
      borderRadius: 6,
      colorBgContainer: '#ffffff',
      colorBgElevated: '#ffffff',
      colorPrimary: '#1677ff',
      colorPrimaryActive: '#0958d9',
      colorPrimaryHover: '#4096ff',
      colorText: 'rgba(0, 0, 0, 0.88)',
      colorTextSecondary: 'rgba(0, 0, 0, 0.65)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      fontSize: 14,
    } as any;
    preWarmStyleCache(mockTheme);
    debugLog('🎨 Style cache pre-warmed for better performance');
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

    // Run accessibility audit in development
    if (process.env.NODE_ENV === 'development') {
      setTimeout(() => {
        auditAccessibility().then(() => {
          debugLog('🧪 Accessibility audit completed');
        });
      }, 3000); // Wait for components to render

      // Log chunk performance after initialization
      setTimeout(() => {
        logChunkPerformance();
      }, 5000);
    }
  }, []);

  // Performance monitoring in development
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const interval = setInterval(() => {
        const metrics = getMetrics();
        if (metrics.warnings.length > 0) {
          console.warn('📊 App Performance Issues:', metrics.warnings);
        }

        // Log performance dashboard every 60 seconds
        performanceDashboard.logReport();
      }, 60_000);

      return () => clearInterval(interval);
    }

    return undefined;
  }, [getMetrics, performanceDashboard]);

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
    <AppErrorBoundary>
      <StructuredData />
      <GlobalStyle />
      <LayoutHeader aria-label="Main navigation header" headerHeight={HEADER_HEIGHT} role="banner">
        <SuspenseLoader minHeight={HEADER_HEIGHT}>
          <FeatureErrorBoundary feature="Header">
            <Header />
          </FeatureErrorBoundary>
        </SuspenseLoader>
      </LayoutHeader>
      <LayoutMain aria-label="Main content area" role="main">
        <div
          aria-hidden="true"
          className={liteAnimation ? styles.backgroundLite : styles.background}
        />
        {enableSidebar && (
          <LayoutSidebar
            aria-label="Quick settings sidebar"
            className={styles.sidebar}
            headerHeight={HEADER_HEIGHT}
            role="complementary"
            style={{ flex: 0, zIndex: 50 }}
          >
            <SuspenseLoader minHeight={200}>
              <FeatureErrorBoundary feature="QuickSettingSidebar">
                <ProgressiveLoader
                  chunkName="quick-settings-sidebar"
                  component={() => import('../features/QuickSettingSidebar')}
                  componentProps={{ headerHeight: HEADER_HEIGHT }}
                  minLoadingTime={150}
                  strategy="immediate"
                />
              </FeatureErrorBoundary>
            </SuspenseLoader>
          </LayoutSidebar>
        )}
        <FeatureErrorBoundary feature="Content">
          <Content className={cx(!enableSidebar && styles.quicksettings)} />
        </FeatureErrorBoundary>
        <FeatureErrorBoundary feature="PromptFormator">
          <PromptFormator />
        </FeatureErrorBoundary>
        <SuspenseLoader minHeight={0}>
          <FeatureErrorBoundary feature="Share">
            <ProgressiveLoader
              chunkName="share"
              component={() => import('../features/Share')}
              fallback={null}
              minLoadingTime={100}
              strategy="idle"
            />
          </FeatureErrorBoundary>
        </SuspenseLoader>
        {enableExtraNetworkSidebar && (
          <LayoutSidebar
            aria-label="Extra networks sidebar"
            className={styles.sidebar}
            headerHeight={HEADER_HEIGHT}
            role="complementary"
            style={{ flex: 0, zIndex: 50 }}
          >
            <SuspenseLoader minHeight={300}>
              <FeatureErrorBoundary feature="ExtraNetworkSidebar">
                <ProgressiveLoader
                  chunkName="extra-network-sidebar"
                  component={() => import('../features/ExtraNetworkSidebar')}
                  componentProps={{ headerHeight: HEADER_HEIGHT }}
                  minLoadingTime={200}
                  strategy="visible"
                />
              </FeatureErrorBoundary>
            </SuspenseLoader>
          </LayoutSidebar>
        )}
      </LayoutMain>
      <footer aria-label="Application footer" role="contentinfo">
        <SuspenseLoader minHeight={60}>
          <FeatureErrorBoundary feature="Footer">
            <Footer />
          </FeatureErrorBoundary>
        </SuspenseLoader>
      </footer>
    </AppErrorBoundary>
  );
});

Index.displayName = 'App';

export default Index;
