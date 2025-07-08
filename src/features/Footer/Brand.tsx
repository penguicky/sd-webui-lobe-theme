import { Avatar } from 'antd';
import { createStyles, useThemeMode } from 'antd-style';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';
import urlJoin from 'url-join';

import { OFFICIAL_SITE, STATUS_URL } from '@/const/url';

import Follow from './Follow';

export const COPYRIGHT = `© 2023-${new Date().getFullYear()} LobeHub, LLC`;

const useStyles = createStyles(({ css, token }) => {
  return {
    container: css`
      font-size: 14px;
    `,
    description: css`
      color: ${token.colorTextDescription};
    `,
    logo: css`
      display: flex;
      flex: none;
      align-items: center;
      color: inherit !important;
    `,
    status: css`
      color-scheme: none;
      background: transparent;
      border: none !important;
    `,
  };
});

const Brand = memo(() => {
  const { styles } = useStyles();
  const { isDarkMode } = useThemeMode();

  return (
    <Flexbox className={styles.container} gap={16}>
      <a className={styles.logo} href={OFFICIAL_SITE}>
        <div style={{ alignItems: 'center', display: 'flex', gap: 8 }}>
          <Avatar
            alt="LobeHub"
            size={24}
            src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp"
          />
          <span>LobeHub</span>
        </div>
      </a>
      <div>Empowering your AI dreams</div>
      <div className={styles.description}>{COPYRIGHT}</div>
      <Follow />
      <iframe
        className={styles.status}
        height="30"
        loading={'lazy'}
        scrolling="no"
        src={urlJoin(STATUS_URL, `badge?theme=${isDarkMode ? 'dark' : 'light'}`)}
        width="250"
      />
    </Flexbox>
  );
});

export default Brand;
