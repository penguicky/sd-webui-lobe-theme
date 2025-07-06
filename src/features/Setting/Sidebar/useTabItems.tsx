import { useTranslation } from 'react-i18next';

import { OptimizedIcon } from '@/components/OptimizedIcon';

import { SettingsTabs } from '@/features/Setting/Sidebar/index';

export const useTabItems = () => {
  const { t } = useTranslation();

  return [
    {
      icon: <OptimizedIcon name="brush" />,
      key: SettingsTabs.Appearance,
      label: t('setting.tab.appearance'),
    },
    { icon: <OptimizedIcon name="layout" />, key: SettingsTabs.Layout, label: t('setting.tab.layout') },
    {
      icon: <OptimizedIcon name="panel-right" />,
      key: SettingsTabs.Sidebar,
      label: t('setting.tab.sidebar'),
    },
    {
      icon: <OptimizedIcon name="flask-conical" />,
      key: SettingsTabs.Experimental,
      label: t('setting.tab.experimental'),
    },
  ];
};
