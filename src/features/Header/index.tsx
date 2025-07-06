import { Header as H, Tooltip } from '@lobehub/ui';
import { useTheme } from 'antd-style';
import { memo, useMemo } from 'react';
import { shallow } from 'zustand/shallow';

import { Logo } from '@/components';
import { OFFICIAL_SITE } from '@/const/url';
import { useAppStore } from '@/store';
import { type DivProps } from '@/types';

import Actions from './Actions';
import Nav from './Nav';

// Optimized selector to prevent unnecessary re-renders
const selectHeaderData = (state: any) => ({
  themeMode: state.themeMode,
  version: state.version,
});

const Header = memo<DivProps>(({ children }) => {
  const { themeMode, version } = useAppStore(selectHeaderData, shallow);
  const theme = useTheme();

  // Memoize the logo link style to prevent recreation on every render
  const logoLinkStyle = useMemo(
    () => ({
      alignItems: 'center' as const,
      color: theme.colorText,
      display: 'flex' as const,
    }),
    [theme.colorText],
  );

  // Memoize the tooltip title to prevent string concatenation on every render
  const tooltipTitle = useMemo(() => `LobeTheme v${version}`, [version]);

  // Memoize the actions style object
  const actionsStyle = useMemo(() => ({ flex: 0 }), []);

  // Memoize the logo component to prevent recreation
  const logoComponent = useMemo(
    () => (
      <a href={OFFICIAL_SITE} rel="noreferrer" style={logoLinkStyle} target="_blank">
        <Tooltip title={tooltipTitle}>
          <Logo />
        </Tooltip>
      </a>
    ),
    [logoLinkStyle, tooltipTitle],
  );

  // Memoize the nav component to prevent recreation
  const navComponent = useMemo(
    () => (
      <>
        <Nav />
        {children}
      </>
    ),
    [children],
  );

  return (
    <H
      actions={<Actions themeMode={themeMode} />}
      actionsStyle={actionsStyle}
      logo={logoComponent}
      nav={navComponent}
    />
  );
});

Header.displayName = 'Header';

export default Header;
