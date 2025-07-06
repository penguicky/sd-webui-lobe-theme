import { Form } from '@lobehub/ui';
import { Segmented, Switch } from 'antd';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { WebuiSetting } from '@/store';

import { SettingItemGroup } from './types';

interface LayoutFormProps {
  currentSetting: WebuiSetting;
}

const SettingForm = memo<LayoutFormProps>(({ currentSetting }) => {
  const { t } = useTranslation();

  // MODIFIED: Track changes in real-time as user makes them
  const onFinish = useCallback((value: WebuiSetting) => {
    // Keep for compatibility but won't be called without submit button
    const changeEvent = new CustomEvent('settingsFormChange', { detail: value });
    window.dispatchEvent(changeEvent);
  }, []);

  // ADDED: Track changes in real-time
  const onValuesChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_changedValues: Partial<WebuiSetting>, allValues: WebuiSetting) => {
      // Dispatch change event immediately when any field changes
      const changeEvent = new CustomEvent('settingsFormChange', { detail: allValues });
      window.dispatchEvent(changeEvent);
    },
    [],
  );

  const layout: SettingItemGroup = useMemo(
    () => ({
      children: [
        {
          children: <Switch />,
          desc: t('setting.splitPreviewer.desc'),
          label: t('setting.splitPreviewer.title'),
          name: 'layoutSplitPreview',
          valuePropName: 'checked',
        },
        {
          children: <Switch />,
          desc: t('setting.hideFooter.desc'),
          label: t('setting.hideFooter.title'),
          name: 'layoutHideFooter',
          valuePropName: 'checked',
        },
      ],
      title: t('setting.group.layout'),
    }),
    [t],
  );

  const promptTextarea: SettingItemGroup = useMemo(
    () => ({
      children: [
        {
          children: (
            <Segmented
              options={[
                {
                  label: t('setting.promptDisplayMode.scroll'),
                  value: 'scroll',
                },
                {
                  label: t('setting.promptDisplayMode.resizable'),
                  value: 'resizable',
                },
              ]}
            />
          ),
          desc: t('setting.promptDisplayMode.desc'),
          label: t('setting.promptDisplayMode.title'),
          name: 'promptTextareaType',
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
      items={[layout, promptTextarea]}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      style={{ flex: 1 }}
      variant={'pure'}
    />
  );
});

export default SettingForm;
