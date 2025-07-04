import { Footer as F } from '@lobehub/ui';
import isEqual from 'fast-deep-equal';
import { memo, useCallback, useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { useInject } from '@/hooks/useInject';
import { selectors, useAppStore } from '@/store';
import { type DivProps } from '@/types';

import Brand from './Brand';
import { Community, MoreProducts, Resources } from './data';
import { useStyles } from './style';

const Footer = memo<DivProps>(({ className, ...props }) => {
  const setting = useAppStore(selectors.currentSetting, isEqual);
  const { cx, styles } = useStyles();
  const { t } = useTranslation();
  const footerReference = useRef<HTMLDivElement>(null);

  // Memoize the beforeunload handler to prevent recreation
  const handleBeforeUnload = useCallback((event: BeforeUnloadEvent) => {
    if (footerReference.current?.isConnected) {
      event.preventDefault();
      return (event.returnValue = '');
    }
  }, []);

  // Memoize the inject success handler
  const handleInjectSuccess = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_footer: HTMLElement | null) => {
      if (!setting.confirmPageUnload) return;
      window.addEventListener('beforeunload', handleBeforeUnload);
    },
    [setting.confirmPageUnload, handleBeforeUnload],
  );

  // Memoize translated strings to prevent recreation
  const footerLabels = useMemo(
    () => ({
      community: t('footer.community'),
      moreProducts: t('footer.moreProducts'),
      resources: t('footer.resources'),
    }),
    [t],
  );

  // Memoize footer columns to prevent recreation on every render
  const footerColumns = useMemo(
    () =>
      setting.layoutHideFooter
        ? []
        : [
            {
              title: <Brand />,
            },
            {
              items: Resources,
              title: footerLabels.resources,
            },
            {
              items: Community,
              title: footerLabels.community,
            },
            {
              items: MoreProducts,
              title: footerLabels.moreProducts,
            },
          ],
    [setting.layoutHideFooter, footerLabels],
  );

  // Memoize the bottom component to prevent recreation
  const bottomComponent = useMemo(() => <div ref={footerReference} />, []);

  // Memoize the computed className
  const computedClassName = useMemo(
    () => cx(styles.footer, className),
    [cx, styles.footer, className],
  );

  useInject(footerReference, '#footer', {
    debug: '[layout] inject - Footer',
    onSuccess: handleInjectSuccess,
  });

  return (
    <div className={computedClassName} {...props}>
      <F bottom={bottomComponent} columns={footerColumns} contentMaxWidth={1280} />
    </div>
  );
});

Footer.displayName = 'Footer';

export default Footer;
