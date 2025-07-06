import { LobeHub as Logo } from '@lobehub/ui/brand';
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
        <Logo size={20} type={'text'} />
      </a>
    </Flexbox>
  );
});

export default BrandWatermark;
