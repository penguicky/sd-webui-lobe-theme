// Logo component removed in @lobehub/ui 2.x - using custom implementation
import { Avatar } from 'antd';
import isEqual from 'fast-deep-equal';
import { type CSSProperties, memo } from 'react';

import { GITHUB_REPO_URL } from '@/const/url';
import { selectors, useAppStore } from '@/store';

import CustomLogo from './CustomLogo';
import KitchenLogo from './KitchenLogo';

export interface LogoProps {
  size?: number;
  style?: CSSProperties;
}

const Logo = memo<LogoProps>(({ size = 32, style }) => {
  const setting = useAppStore(selectors.currentSetting, isEqual);
  const themeMode = useAppStore(selectors.themeMode);

  if (setting.logoType === 'kitchen') {
    return <KitchenLogo size={size * 0.75} style={style} themeMode={themeMode} />;
  }

  if (setting.logoType === 'custom') {
    return (
      <CustomLogo
        logoCustomTitle={setting.logoCustomTitle}
        logoCustomUrl={setting.logoCustomUrl}
        size={size}
        style={style}
      />
    );
  }

  return (
    <div style={{ alignItems: 'center', display: 'flex', gap: 8, ...style }}>
      <Avatar
        alt="LobeHub"
        size={size}
        src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp"
      />
      <a
        href={GITHUB_REPO_URL}
        rel="noreferrer"
        style={{ color: 'inherit', fontWeight: 400, textDecoration: 'none' }}
        target="_blank"
      >
        SD
      </a>
    </div>
  );
});

export default Logo;
