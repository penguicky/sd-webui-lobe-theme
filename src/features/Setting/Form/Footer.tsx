import { Button, Popconfirm, notification } from 'antd';
import { useResponsive } from 'antd-style';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { DEFAULT_SETTING, type WebuiSetting, useAppStore } from '@/store';

interface FooterProps {
  onReset: () => void;
  pendingChanges: Partial<WebuiSetting>;
}

const Footer = memo<FooterProps>(({ pendingChanges, onReset }) => {
  const { t } = useTranslation();
  const { mobile } = useResponsive();
  const onBatchUpdateSetting = useAppStore((st) => st.onBatchUpdateSetting);

  const hasChanges = Object.keys(pendingChanges).length > 0;

  const handleReset = useCallback(async () => {
    await onBatchUpdateSetting([DEFAULT_SETTING]);
    onReset(); // Clear pending changes in parent
    location.reload();
  }, [onBatchUpdateSetting, onReset]);

  const handleApplyAll = useCallback(async () => {
    if (!hasChanges) {
      notification.warning({ message: t('setting.noChangesToApply', 'No changes to apply') });
      return;
    }

    try {
      await onBatchUpdateSetting([pendingChanges]);
      notification.success({
        message: t('setting.settingsAppliedSuccess', 'Settings applied successfully'),
      });
      onReset(); // Clear pending changes in parent
      location.reload();
    } catch {
      notification.error({ message: t('setting.settingsApplyError', 'Failed to apply settings') });
    }
  }, [pendingChanges, hasChanges, onBatchUpdateSetting, onReset, t]);

  const buttonStyle = mobile ? { flex: 1 } : { margin: 0 };

  return (
    <Flexbox
      gap={12}
      horizontal
      justify={'space-between'}
      style={{
        backgroundColor: hasChanges ? '#f6ffed' : 'transparent',
        borderTop: hasChanges ? '2px solid #1890ff' : '1px solid #f0f0f0',
        padding: mobile ? 16 : 24,
      }}
    >
      {/* Left side - always show something to maintain right alignment of buttons */}
      <div
        style={{
          color: hasChanges ? '#52c41a' : 'transparent',
          fontSize: '14px',
          fontWeight: 500,
          minHeight: '20px', // Maintain consistent height
        }}
      >
        {hasChanges
          ? t('setting.pendingChanges', 'You have unsaved changes in multiple tabs')
          : ' '}
      </div>

      {/* Right side - buttons always positioned here */}
      <Flexbox gap={12} horizontal>
        <Popconfirm
          onConfirm={handleReset}
          title={t('setting.resetConfirmTitle', 'Reset all settings to default?')}
        >
          <Button danger style={buttonStyle}>
            {t('setting.button.reset')}
          </Button>
        </Popconfirm>

        <Button disabled={!hasChanges} onClick={handleApplyAll} style={buttonStyle} type="primary">
          {hasChanges
            ? t('setting.button.applyAll', 'Apply All Changes & Restart')
            : t('setting.button.noChanges', 'No Changes to Apply')}
        </Button>
      </Flexbox>
    </Flexbox>
  );
});

export default Footer;
