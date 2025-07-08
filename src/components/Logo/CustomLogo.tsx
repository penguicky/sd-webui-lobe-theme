import { FluentEmoji } from '@lobehub/ui';
import { Avatar, Space } from 'antd';
import { type CSSProperties, memo } from 'react';

export interface CustomLogoProps {
  logoCustomTitle?: string;
  logoCustomUrl?: string;
  size?: number;
  style?: CSSProperties;
}

const CustomLogo = memo<CustomLogoProps>(({ size = 32, style, logoCustomUrl, logoCustomTitle }) => {
  let customLogo = (
    <Avatar
      alt="LobeHub"
      size={size}
      src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp"
      style={style}
    />
  );

  if (logoCustomUrl) {
    if (logoCustomUrl.includes('http') || logoCustomUrl.includes('data')) {
      customLogo = <img alt="logo" src={logoCustomUrl} style={{ height: size, ...style }} />;
    } else {
      // Simple emoji detection - if it's a short string, treat as emoji
      if (logoCustomUrl.length <= 4) {
        customLogo = <FluentEmoji emoji={logoCustomUrl} size={size} style={style} />;
      }
    }
  }

  return (
    <Space align="center" size={size * 0.3}>
      {customLogo}
      <b style={{ fontSize: size * 0.6, whiteSpace: 'nowrap' }}>{logoCustomTitle}</b>
    </Space>
  );
});

export default CustomLogo;
