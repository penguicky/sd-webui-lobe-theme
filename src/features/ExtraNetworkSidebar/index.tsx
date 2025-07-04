import {
  DraggablePanel,
  DraggablePanelContainer,
  DraggablePanelHeader,
  LayoutSidebarInner,
} from '@lobehub/ui';
import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { selectors, useAppStore } from '@/store';
import { type DivProps } from '@/types';

import Inner from './Inner';
import { useStyles } from './style';

export interface ExtraNetworkSidebarProps extends DivProps {
  headerHeight: number;
}

const ExtraNetworkSidebar = memo<ExtraNetworkSidebarProps>(({ headerHeight }) => {
  const { mobile } = useResponsive();
  const setting = useAppStore(selectors.currentSetting, isEqual);
  const [expand, setExpand] = useState<boolean>(mobile ? false : setting.extraNetworkSidebarExpand);
  const [pin, setPin] = useState<boolean>(setting.extraNetworkFixedMode === 'fixed');
  const { styles, theme } = useStyles({ headerHeight });
  const { t } = useTranslation();

  useEffect(() => {
    if (mobile) setExpand(false);
  }, [mobile]);

  // Memoize mode calculation to prevent recreation
  const mode = useMemo(() => (mobile ? 'fixed' : pin ? 'fixed' : 'float'), [mobile, pin]);

  // Memoize default size object to prevent recreation
  const defaultSize = useMemo(
    () => ({ width: setting.extraNetworkSidebarWidth }),
    [setting.extraNetworkSidebarWidth],
  );

  // Memoize container style to prevent recreation
  const containerStyle = useMemo(
    () =>
      mode === 'float'
        ? { background: theme.colorBgContainer, minWidth: setting.extraNetworkSidebarWidth }
        : { minWidth: setting.extraNetworkSidebarWidth },
    [mode, theme.colorBgContainer, setting.extraNetworkSidebarWidth],
  );

  // Memoize translated title to prevent recreation
  const sidebarTitle = useMemo(() => t('sidebar.extraNetwork'), [t]);

  return (
    <DraggablePanel
      defaultSize={defaultSize}
      expand={expand}
      minWidth={setting.extraNetworkSidebarWidth}
      mode={mode}
      onExpandChange={setExpand}
      pin={pin}
      placement="right"
    >
      <LayoutSidebarInner>
        <DraggablePanelContainer className={styles.container} style={containerStyle}>
          <DraggablePanelHeader
            pin={pin}
            position="right"
            setExpand={setExpand}
            setPin={setPin}
            title={sidebarTitle}
          />
          <Inner />
        </DraggablePanelContainer>
      </LayoutSidebarInner>
    </DraggablePanel>
  );
});

ExtraNetworkSidebar.displayName = 'ExtraNetworkSidebar';

export default ExtraNetworkSidebar;
