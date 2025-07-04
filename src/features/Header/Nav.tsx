import { Burger, TabsNav } from '@lobehub/ui';
import { useResponsive } from 'antd-style';
import { memo, useCallback, useMemo, useState } from 'react';

import { selectors, useAppStore } from '@/store';

import { useNavBar } from './useNavBar';

const Nav = memo(() => {
  const currentTab = useAppStore(selectors.currentTab);
  const { mobile } = useResponsive();
  const { items, onChange } = useNavBar(mobile);
  const [opened, setOpened] = useState(false);

  // Memoize burger handlers to prevent recreation
  const handleSetOpened = useCallback((value: boolean) => setOpened(value), []);

  // Memoize mobile component to prevent recreation when mobile state changes
  const mobileComponent = useMemo(
    () => (mobile ? <Burger items={items} opened={opened} setOpened={handleSetOpened} /> : null),
    [mobile, items, opened, handleSetOpened],
  );

  // Memoize desktop component to prevent recreation
  const desktopComponent = useMemo(
    () => (!mobile ? <TabsNav activeKey={currentTab} items={items} onChange={onChange} /> : null),
    [mobile, currentTab, items, onChange],
  );

  return mobileComponent || desktopComponent;
});

Nav.displayName = 'HeaderNav';

export default Nav;
