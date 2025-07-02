import { LayoutHeader, LayoutMain, LayoutSidebar } from '@lobehub/ui';
import { memo, useEffect } from 'react';
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

import Content from '../features/Content';
import ExtraNetworkSidebar from '../features/ExtraNetworkSidebar';
import Footer from '../features/Footer';
import Header from '../features/Header';
import QuickSettingSidebar from '../features/QuickSettingSidebar';
import Share from '../features/Share';
import { useStyles } from './style';

export const HEADER_HEIGHT = 64;

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
    console.log('🚀 App initialization started');
    console.log('Current settings:', {
      enableExtraNetworkSidebar,
      enableHighlight,
      enableImageInfo,
      enableSidebar,
      svgIcon,
    });

    // Always warm Shiki cache if highlighting is enabled
    if (enableHighlight) {
      console.log('🔥 Highlighting enabled - triggering Shiki cache warming...');
      warmShikiCache().catch((error) => {
        console.error('❌ Failed to warm Shiki cache:', error);
      });
    } else {
      console.log('⚠️ Prompt highlighting is DISABLED in settings');
      console.log('💡 Enable it in: Settings → Prompt Syntax Highlighting');
    }
  }, [enableHighlight]);

  // Add a one-time initialization log
  useEffect(() => {
    console.log('🎨 LobeHub Theme initialized');
    console.log('📖 Debug utilities available:');
    console.log('  - debugShikiSetup() - Full diagnostics');
    console.log('  - testBasicHighlighting() - Test core highlighting function');
    console.log('  - testHighlightResponsiveness() - Test highlighting speed');
    console.log('  - clearHighlightCache() - Clear cache for immediate updates');
    console.log('  - forceRefreshHighlighting() - Force refresh all highlighting');
    console.log('  - forceCompleteAllHighlighting() - EMERGENCY: Force stop all loading');
    console.log('  - adjustHighlightAlignment(x, y) - Fine-tune positioning');
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
        <Share />
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
