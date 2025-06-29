import { Form } from '@lobehub/ui';
import { Switch } from 'antd';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { WebuiSetting } from '@/store';

import { SettingItemGroup } from './types';

interface ExperimentalFormProps {
  currentSetting: WebuiSetting;
}

const SettingForm = memo<ExperimentalFormProps>(({ currentSetting }) => {
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
      // Dispatch change event immediately when any field changes
      const changeEvent = new CustomEvent('settingsFormChange', { detail: allValues });
      window.dispatchEvent(changeEvent);
    },
    [],
  );

  const experimental: SettingItemGroup = useMemo(
    () => ({
      children: [
        {
          children: <Switch />,
          desc: t('setting.imageInfo.desc'),
          label: t('setting.imageInfo.title'),
          name: 'enableImageInfo',
          valuePropName: 'checked',
        },
      ],
      title: t('setting.group.experimental'),
    }),
    [t],
  );

  const promptTextarea: SettingItemGroup = useMemo(
    () => ({
      children: [
        {
          children: <Switch />,
          desc: t('setting.promptHighlight.desc'),
          label: t('setting.promptHighlight.title'),
          name: 'enableHighlight',
          valuePropName: 'checked',
        },
        {
          children: <Switch />,
          desc: t('setting.promptEditor.desc'),
          label: t('setting.promptEditor.title'),
          name: 'promptEditor',
          valuePropName: 'checked',
        },
      ],
      title: t('setting.group.promptTextarea'),
    }),
    [t],
  );

  return (
    <Form
      id="theme_settings"
      initialValues={currentSetting}
      items={[experimental, promptTextarea]}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      style={{ flex: 1 }}
      variant={'pure'}
    />
  );
});

export default SettingForm;
