import { useTranslation } from 'react-i18next';

import { SettingsTabs } from '@/features/Setting/Sidebar/index';
import { OptimizedIcon } from '@/utils/iconOptimization';

export const useTabItems = () => {
  const { t } = useTranslation();

  return [
    {
      icon: <OptimizedIcon name="Brush" size={16} />,
      key: SettingsTabs.Appearance,
      label: t('setting.tab.appearance'),
    },
    { icon: <OptimizedIcon name="Layout" size={16} />, key: SettingsTabs.Layout, label: t('setting.tab.layout') },
    {
      icon: <OptimizedIcon name="PanelRight" size={16} />,
      key: SettingsTabs.Sidebar,
      label: t('setting.tab.sidebar'),
    },
    {
      icon: <OptimizedIcon name="FlaskConical" size={16} />,
      key: SettingsTabs.Experimental,
      label: t('setting.tab.experimental'),
    },
  ];
};
