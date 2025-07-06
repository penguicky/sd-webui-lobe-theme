import { Form } from '@lobehub/ui';
import { ColorPicker, Input, Segmented, Select, Switch } from 'antd';
import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CustomLogo } from '@/components';
import { type WebuiSetting, useAppStore } from '@/store';

import {
  type NeutralColor,
  type PrimaryColor,
  findCustomThemeName,
  isHexColor,
  neutralColors,
  neutralColorsSwatches,
  primaryColors,
  primaryColorsSwatches,
} from '../data';
import { SettingItemGroup } from './types';

interface AppearanceFormProps {
  currentSetting: WebuiSetting;
}

// Helper functions to safely get color values
const getPrimaryColorValue = (color: PrimaryColor | undefined): string | undefined => {
  if (!color) return undefined;
  if (isHexColor(color)) return color;
  return primaryColors[color as keyof typeof primaryColors];
};

const getNeutralColorValue = (color: NeutralColor | undefined): string | undefined => {
  if (!color) return undefined;
  if (isHexColor(color)) return color;
  return neutralColors[color as keyof typeof neutralColors];
};

// Simple color selection component using Antd ColorPicker
const SimpleColorPicker = memo<{
  colors: string[];
  onChange?: (_color?: string) => void;
  value?: string | undefined;
}>(({ value, colors, onChange }) => {
  return (
    <ColorPicker
      format="hex"
      onChange={(colorValue) => onChange?.(colorValue.toHexString())}
      presets={[
        {
          colors: colors,
          label: 'Preset Colors',
        },
      ]}
      showText
      value={value || '#1890ff'}
    />
  );
});

const SettingForm = memo<AppearanceFormProps>(({ currentSetting }) => {
  const { localeOptions } = useAppStore((st) => ({
    localeOptions: st.localeOptions,
  }));

  // Use current setting (which includes pending changes) instead of original store setting
  const [rawSetting, setRawSetting] = useState<WebuiSetting>(currentSetting);
  const [primaryColor, setPrimaryColor] = useState<PrimaryColor | undefined>(
    currentSetting.primaryColor || undefined,
  );
  const [neutralColor, setNeutralColor] = useState<NeutralColor | undefined>(
    currentSetting.neutralColor || undefined,
  );

  const { t } = useTranslation();

  // Update local state when currentSetting prop changes (when switching tabs)
  useEffect(() => {
    setRawSetting(currentSetting);
    setPrimaryColor(currentSetting.primaryColor || undefined);
    setNeutralColor(currentSetting.neutralColor || undefined);
  }, [currentSetting]);

  // MODIFIED: Track changes in real-time as user makes them
  const onFinish = useCallback(
    (value: WebuiSetting) => {
      // Keep for compatibility but won't be called without submit button
      const changeEvent = new CustomEvent('settingsFormChange', {
        detail: { ...value, neutralColor, primaryColor },
      });
      window.dispatchEvent(changeEvent);
    },
    [primaryColor, neutralColor],
  );

  // ADDED: Track changes in real-time
  const onValuesChange = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_changedValues: Partial<WebuiSetting>, allValues: WebuiSetting) => {
      // Update local state
      setRawSetting(allValues);

      // Dispatch change event immediately
      const changeEvent = new CustomEvent('settingsFormChange', {
        detail: { ...allValues, neutralColor, primaryColor },
      });
      window.dispatchEvent(changeEvent);
    },
    [primaryColor, neutralColor],
  );

  const handlePrimaryColorChange = useCallback(
    (c?: string) => {
      if (c) {
        let newColor: PrimaryColor;

        // Handle kitchen colors separately
        if (c === '#007AFF') {
          newColor = 'kitchen';
        } else {
          // Try to find a named color match first
          const foundColor = findCustomThemeName('primary', c);
          if (foundColor && foundColor !== 'undefined') {
            newColor = foundColor as PrimaryColor;
          } else {
            // Use the hex color directly if no named match found
            newColor = c;
          }
        }

        setPrimaryColor(newColor);

        // Dispatch color change immediately
        const changeEvent = new CustomEvent('settingsFormChange', {
          detail: { ...rawSetting, neutralColor, primaryColor: newColor },
        });
        window.dispatchEvent(changeEvent);
      }
    },
    [rawSetting, neutralColor],
  );

  const handleNeutralColorChange = useCallback(
    (c?: string) => {
      if (c) {
        let newColor: NeutralColor;

        // Handle kitchen colors separately
        if (c === '#8E8E93') {
          newColor = 'kitchen';
        } else {
          // Try to find a named color match first
          const foundColor = findCustomThemeName('neutral', c);
          if (foundColor && foundColor !== 'undefined') {
            newColor = foundColor as NeutralColor;
          } else {
            // Use the hex color directly if no named match found
            newColor = c;
          }
        }

        setNeutralColor(newColor);

        // Dispatch color change immediately
        const changeEvent = new CustomEvent('settingsFormChange', {
          detail: { ...rawSetting, neutralColor: newColor, primaryColor },
        });
        window.dispatchEvent(changeEvent);
      }
    },
    [rawSetting, primaryColor],
  );

  const theme: SettingItemGroup = useMemo(
    () => ({
      children: [
        {
          children: <Select {...(localeOptions && { options: localeOptions })} />,
          desc: t('setting.language.desc'),
          label: t('setting.language.title'),
          name: 'i18n',
        },
        {
          children: <Switch />,
          desc: t('setting.liteAnimation.desc', 'Reduce animations for better performance'),
          label: t('setting.liteAnimation.title', 'Reduce Animation'),
          name: 'liteAnimation',
          valuePropName: 'checked',
        },
        {
          children: (
            <SimpleColorPicker
              {...(getPrimaryColorValue(primaryColor) && {
                value: getPrimaryColorValue(primaryColor),
              })}
              colors={primaryColorsSwatches}
              onChange={handlePrimaryColorChange}
            />
          ),
          desc: t('setting.primaryColor.desc'),
          label: t('setting.primaryColor.title'),
        },
        {
          children: (
            <SimpleColorPicker
              {...(getNeutralColorValue(neutralColor) && {
                value: getNeutralColorValue(neutralColor),
              })}
              colors={neutralColorsSwatches}
              onChange={handleNeutralColorChange}
            />
          ),
          desc: t('setting.neutralColor.desc'),
          label: t('setting.neutralColor.title'),
        },
        {
          children: (
            <Segmented
              options={[
                {
                  label: t('brand.lobe'),
                  value: 'lobe',
                },
                {
                  label: t('brand.kitchen'),
                  value: 'kitchen',
                },
                {
                  label: t('brand.custom'),
                  value: 'custom',
                },
              ]}
            />
          ),
          desc: t('setting.logoType.desc', 'Choose logo style'),
          label: t('setting.logoType.title', 'Logo Type'),
          name: 'logoType',
        },
        {
          children: <Input />,
          desc: t('setting.customLogo.desc'),
          hidden: rawSetting.logoType !== 'custom',
          label: t('setting.customLogo.title'),
          name: 'logoCustomUrl',
        },
        {
          children: <Input />,
          desc: t('setting.customTitle.desc'),
          hidden: rawSetting.logoType !== 'custom',
          label: t('setting.customTitle.title'),
          name: 'logoCustomTitle',
        },
        {
          children: (
            <CustomLogo
              {...(rawSetting.logoCustomTitle && { logoCustomTitle: rawSetting.logoCustomTitle })}
              {...(rawSetting.logoCustomUrl && { logoCustomUrl: rawSetting.logoCustomUrl })}
            />
          ),
          hidden: rawSetting.logoType !== 'custom',
          label: 'Logo Preview',
        },
        {
          children: <Switch />,
          desc: t('setting.svgIcon.desc', 'Use SVG icons globally'),
          label: t('setting.svgIcon.title', 'SVG Icons'),
          name: 'svgIcon',
          valuePropName: 'checked',
        },
        {
          children: <Switch />,
          desc: t('setting.customFont.desc'),
          label: t('setting.customFont.title'),
          name: 'enableWebFont',
          valuePropName: 'checked',
        },
        {
          children: <Switch />,
          desc: t('setting.confirmPageUnload.desc'),
          label: t('setting.confirmPageUnload.title'),
          name: 'confirmPageUnload',
          valuePropName: 'checked',
        },
      ],
      title: t('setting.group.theme'),
    }),
    [
      primaryColor,
      neutralColor,
      rawSetting.logoType,
      rawSetting.logoCustomTitle,
      rawSetting.logoCustomUrl,
      localeOptions,
      handlePrimaryColorChange,
      handleNeutralColorChange,
      t,
    ],
  );

  return (
    <Form
      initialValues={currentSetting}
      items={[theme]}
      onFinish={onFinish}
      onValuesChange={onValuesChange}
      style={{ flex: 1 }}
      variant={'borderless'}
    />
  );
});

export default SettingForm;
