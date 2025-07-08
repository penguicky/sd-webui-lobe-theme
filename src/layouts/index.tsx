import {
  type DivProps,
  ThemeProvider,
  generateColorNeutralPalette,
  generateColorPalette,
} from '@lobehub/ui';
import { colors as colorScales, gray as grayScale } from '@lobehub/ui/color';
import isEqual from 'fast-deep-equal';
import qs from 'query-string';
import { memo, useCallback, useEffect } from 'react';

import { useIsDarkMode } from '@/hooks/useIsDarkMode';
import { selectors, useAppStore } from '@/store';
import { kitchenNeutral, kitchenPrimary } from '@/styles/kitchenColors';

const GlobalLayout = memo<DivProps>(({ children }) => {
  const { onSetThemeMode, themeMode } = useAppStore((st) => ({
    onInit: st.onInit,
    onSetThemeMode: st.onSetThemeMode,
    themeMode: st.themeMode,
  }));
  const setting = useAppStore(selectors.currentSetting, isEqual);
  const isDarkMode = useIsDarkMode();

  useEffect(() => {
    const queryTheme: any = String(qs.parseUrl(window.location.href).query.__theme || '');
    if (queryTheme) {
      document.body.classList.add(queryTheme);
      onSetThemeMode(queryTheme);
    } else {
      document.body.classList.add(isDarkMode ? 'dark' : 'light');
      onSetThemeMode(isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  const genCustomToken = useCallback(() => {
    let primaryTokens = {};
    let neutralTokens = {};
    if (setting.primaryColor) {
      if (setting.primaryColor === 'kitchen') {
        primaryTokens = kitchenPrimary[themeMode];
      } else {
        const scale = colorScales[setting.primaryColor];
        primaryTokens = generateColorPalette({ appearance: themeMode, scale, type: 'Primary' });
      }
    }
    if (setting.neutralColor) {
      if (setting.neutralColor === 'kitchen') {
        neutralTokens = kitchenNeutral[themeMode];
      } else {
        // Use gray scale for all neutral colors in 2.x
        neutralTokens = generateColorNeutralPalette({ appearance: themeMode, scale: grayScale });
      }
    }

    return { ...primaryTokens, ...neutralTokens };
  }, [setting.primaryColor, setting.neutralColor, themeMode]);

  return (
    setting && (
      <ThemeProvider
        customToken={genCustomToken}
        themeMode={themeMode}
      >
        {children}
      </ThemeProvider>
    )
  );
});

export default GlobalLayout;
