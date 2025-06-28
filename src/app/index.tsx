import { LayoutHeader, LayoutMain, LayoutSidebar } from '@lobehub/ui';
import { memo, useEffect } from 'react';
import { shallow } from 'zustand/shallow';

import StructuredData from '@/components/StructuredData';
import PromptFormator from '@/features/PromptFormator';
import { useOptimizedSelector, usePerformanceMonitor } from '@/hooks/usePerformance';
import '@/locales/config';
import ImageInfo from '@/modules/ImageInfo/page';
import PromptHighlight from '@/modules/PromptHighlight/page';
import replaceIcon from '@/scripts/replaceIcon';
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
  // Use performance monitoring
  usePerformanceMonitor('App Index');

  // Use optimized selectors
  const {
    enableSidebar,
    enableExtraNetworkSidebar,
    enableHighlight,
    enableImageInfo,
    svgIcon,
    liteAnimation,
    primaryColor,
  } = useOptimizedSelector(selectLayoutSettings, shallow);

  const { cx, styles } = useStyles({
    headerHeight: HEADER_HEIGHT,
    isPrimaryColor: Boolean(primaryColor),
  });

  useEffect(() => {
    // Batch DOM operations
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

    // Execute all tasks in the next frame to avoid blocking
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
