import { Avatar } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';
import { Flexbox, FlexboxProps } from 'react-layout-kit';

const useStyles = createStyles(({ token, css }) => ({
  logoLink: css`
    height: 20px;
    color: inherit;

    &:hover {
      color: ${token.colorLink};
    }
  `,
}));

const BrandWatermark = memo<Omit<FlexboxProps, 'children'>>(({ style, ...rest }) => {
  const { styles, theme } = useStyles();
  return (
    <Flexbox
      align={'center'}
      flex={'none'}
      gap={4}
      horizontal
      style={{ color: theme.colorTextDescription, fontSize: 12, ...style }}
      {...rest}
    >
      <span>Powered by</span>
      <a
        className={styles.logoLink}
        href={'https://lobehub.com'}
        rel="noreferrer"
        target={'_blank'}
      >
        <div style={{ alignItems: 'center', display: 'flex', gap: 4 }}>
          <Avatar
            alt="LobeHub"
            size={16}
            src="https://registry.npmmirror.com/@lobehub/assets-logo/1.0.0/files/assets/logo-3d.webp"
          />
          <span style={{ fontSize: 12 }}>LobeHub</span>
        </div>
      </a>
    </Flexbox>
  );
});

export default BrandWatermark;
