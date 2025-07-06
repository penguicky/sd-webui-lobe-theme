import {
  type DivProps,
  ThemeProvider,
  generateColorNeutralPalette,
  generateColorPalette,
} from '@lobehub/ui';
import { colorScales } from '@lobehub/ui/es/color/colors';
import { neutralColorScales } from '@lobehub/ui/es/color/neutrals';
import isEqual from 'fast-deep-equal';
import qs from 'query-string';
import { memo, useCallback, useEffect } from 'react';

import { isHexColor } from '@/features/Setting/data';
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
      } else if (isHexColor(setting.primaryColor)) {
        // Handle direct hex color values
        primaryTokens = {
          colorPrimary: setting.primaryColor,
          // Add some transparency for hover
          colorPrimaryActive: setting.primaryColor + 'AA',
          colorPrimaryHover: setting.primaryColor + 'CC', // Add more transparency for active
        };
      } else {
        // Handle named colors from @lobehub/ui
        const scale = colorScales[setting.primaryColor as keyof typeof colorScales];
        if (scale) {
          primaryTokens = generateColorPalette({ appearance: themeMode, scale, type: 'Primary' });
        }
      }
    }

    if (setting.neutralColor) {
      if (setting.neutralColor === 'kitchen') {
        neutralTokens = kitchenNeutral[themeMode];
      } else if (isHexColor(setting.neutralColor)) {
        // Handle direct hex color values for neutral colors
        neutralTokens = {
          colorText: setting.neutralColor,
          colorTextBase: setting.neutralColor,
          colorTextSecondary: setting.neutralColor + 'CC',
          colorTextTertiary: setting.neutralColor + 'AA',
        };
      } else {
        // Handle named colors from @lobehub/ui
        const scale = neutralColorScales[setting.neutralColor as keyof typeof neutralColorScales];
        if (scale) {
          neutralTokens = generateColorNeutralPalette({ appearance: themeMode, scale });
        }
      }
    }

    return { ...primaryTokens, ...neutralTokens };
  }, [setting.primaryColor, setting.neutralColor, themeMode]);

  return (
    setting && (
      <ThemeProvider
        customToken={genCustomToken}
        enableCustomFonts={setting.enableWebFont}
        themeMode={themeMode}
      >
        {children}
      </ThemeProvider>
    )
  );
});

export default GlobalLayout;
