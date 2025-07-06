import {
  type DivProps,
  DraggablePanel,
  DraggablePanelContainer,
  DraggablePanelHeader,
  LayoutSidebarInner,
} from '@lobehub/ui';
import { useResponsive } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { selectors, useAppStore } from '@/store';

import Inner from './Inner';
import { useStyles } from './style';

export interface QuickSettingSidebarProps extends DivProps {
  headerHeight: number;
}

const QuickSettingSidebar = memo<QuickSettingSidebarProps>(({ headerHeight }) => {
  const { mobile } = useResponsive();
  const setting = useAppStore(selectors.currentSetting, isEqual);
  const [expand, setExpand] = useState<boolean>(mobile ? false : setting.sidebarExpand);
  const [pin, setPin] = useState<boolean>(setting.sidebarFixedMode === 'fixed');
  const [width, setWidth] = useState<number>(setting.sidebarWidth);
  const { styles, theme } = useStyles({ headerHeight, width });
  const { t } = useTranslation();

  useEffect(() => {
    if (mobile) setExpand(false);
  }, [mobile]);

  // Memoize mode calculation to prevent recreation
  const mode = useMemo(() => (mobile ? 'fixed' : pin ? 'fixed' : 'float'), [mobile, pin]);

  // Memoize size change handler to prevent recreation
  const handleSizeChange = useCallback((_: any, size: any) => {
    if (size?.width) {
      setWidth(Number.parseInt(String(size.width)));
    }
  }, []);

  // Memoize default size object to prevent recreation
  const defaultSize = useMemo(() => ({ width: setting.sidebarWidth }), [setting.sidebarWidth]);

  // Memoize panel style to prevent recreation
  const panelStyle = useMemo(
    () => ({
      display: 'flex' as const,
      flexDirection: 'column' as const,
    }),
    [],
  );

  // Memoize container style to prevent recreation
  const containerStyle = useMemo(
    () =>
      mode === 'float'
        ? { background: theme.colorBgContainer, minWidth: setting.sidebarWidth }
        : { minWidth: setting.sidebarWidth },
    [mode, theme.colorBgContainer, setting.sidebarWidth],
  );

  // Memoize translated title to prevent recreation
  const sidebarTitle = useMemo(() => t('sidebar.quickSetting'), [t]);

  return (
    <DraggablePanel
      defaultSize={defaultSize}
      expand={expand}
      minWidth={setting.sidebarWidth}
      mode={mode}
      onExpandChange={setExpand}
      onSizeChange={handleSizeChange}
      pin={pin}
      placement="left"
      style={panelStyle}
    >
      <LayoutSidebarInner>
        <DraggablePanelContainer className={styles.container} style={containerStyle}>
          <DraggablePanelHeader
            pin={pin}
            position="left"
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

QuickSettingSidebar.displayName = 'QuickSettingSidebar';

export default QuickSettingSidebar;
