import { Form } from '@lobehub/ui';
import { InputNumber, Segmented, Switch } from 'antd';
import { memo, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { type WebuiSetting } from '@/store';

import { SettingItemGroup } from './types';

interface SidebarFormProps {
  currentSetting: WebuiSetting;
}

const SettingForm = memo<SidebarFormProps>(({ currentSetting }) => {
  // Use current setting (which includes pending changes) for conditional visibility
  const [rawSetting, setRawSetting] = useState<WebuiSetting>(currentSetting);

  const { t } = useTranslation();

  // MODIFIED: Track changes in real-time as user makes them
  const onFinish = useCallback((value: WebuiSetting) => {
    // Keep for compatibility but won't be called without submit button
    const changeEvent = new CustomEvent('settingsFormChange', { detail: value });
    window.dispatchEvent(changeEvent);
  }, []);

  // ADDED: Track changes in real-time
  const onValuesChange = useCallback(
    (changedValues: Partial<WebuiSetting>, allValues: WebuiSetting) => {
      // Update local state for conditional visibility
      setRawSetting(allValues);

      // Dispatch change event immediately when any field changes
      const changeEvent = new CustomEvent('settingsFormChange', { detail: allValues });
      window.dispatchEvent(changeEvent);
    },
    [],
  );

  const quickSettingSidebar: SettingItemGroup = useMemo(
    () => ({
      children: [
        {
          children: <Switch />,
          desc: t('setting.quickSettingSidebar.enable.desc'),
          label: t('setting.quickSettingSidebar.enable.title'),
          name: 'enableSidebar',
          valuePropName: 'checked',
        },
        {
          children: <Switch />,
          desc: t('setting.quickSettingSidebar.defaultExpand.desc'),
          hidden: !rawSetting.enableSidebar,
          label: t('setting.quickSettingSidebar.defaultExpand.title'),
          name: 'sidebarExpand',
          valuePropName: 'checked',
        },
        {
          children: (
            <Segmented
              options={[
                {
                  label: t('sidebar.mode.fixed'),
                  value: 'fixed',
                },
                {
                  label: t('sidebar.mode.float'),
                  value: 'float',
                },
              ]}
            />
          ),
          desc: t('setting.quickSettingSidebar.displayMode.desc'),
          hidden: !rawSetting.enableSidebar,
          label: t('setting.quickSettingSidebar.displayMode.title'),
          name: 'sidebarFixedMode',
        },
        {
          children: <InputNumber />,
          desc: t('setting.quickSettingSidebar.defaultWidth.desc'),
          hidden: !rawSetting.enableSidebar,
          label: t('setting.quickSettingSidebar.defaultWidth.title'),
          name: 'sidebarWidth',
        },
      ],
      title: t('setting.group.quickSettingSidebar'),
    }),
    [rawSetting.enableSidebar, t],
  );

  const extraNetworkSidebar: SettingItemGroup = useMemo(
    () => ({
      children: [
        {
          children: <Switch />,
          desc: t('setting.extraNetworkSidebar.enable.desc'),
          label: t('setting.extraNetworkSidebar.enable.title'),
          name: 'enableExtraNetworkSidebar',
          valuePropName: 'checked',
        },
        {
          children: (
            <Segmented
              options={[
                {
                  label: t('sidebar.mode.fixed'),
                  value: 'fixed',
                },
                {
                  label: t('sidebar.mode.float'),
                  value: 'float',
                },
              ]}
            />
          ),
          desc: t('setting.extraNetworkSidebar.displayMode.desc'),
          hidden: !rawSetting.enableExtraNetworkSidebar,
          label: t('setting.extraNetworkSidebar.displayMode.title'),
          name: 'extraNetworkFixedMode',
        },
        {
          children: <Switch />,
          desc: t('setting.extraNetworkSidebar.defaultExpand.desc'),
          hidden: !rawSetting.enableExtraNetworkSidebar,
          label: t('setting.extraNetworkSidebar.defaultExpand.title'),
          name: 'extraNetworkSidebarExpand',
          valuePropName: 'checked',
        },
        {
          children: <InputNumber />,
          desc: t('setting.extraNetworkSidebar.defaultWidth.desc'),
          hidden: !rawSetting.enableExtraNetworkSidebar,
          label: t('setting.extraNetworkSidebar.defaultWidth.title'),
          name: 'extraNetworkSidebarWidth',
        },
        {
          children: <InputNumber />,
          desc: t('setting.extraNetworkSidebar.defaultCardSize.desc'),
          hidden: !rawSetting.enableExtraNetworkSidebar,
          label: t('setting.extraNetworkSidebar.defaultCardSize.title'),
          name: 'extraNetworkCardSize',
        },
      ],
      title: t('setting.group.extraNetworkSidebar'),
    }),
    [rawSetting.enableExtraNetworkSidebar, t],
  );

  return (
    <Form
      id="theme_settings"
      initialValues={currentSetting}
      items={[quickSettingSidebar, extraNetworkSidebar]}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      style={{ flex: 1 }}
      variant={'pure'}
    />
  );
});

export default SettingForm;
