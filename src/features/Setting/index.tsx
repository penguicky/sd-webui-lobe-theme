import { Modal, type ModalProps } from '@lobehub/ui';
import { useResponsive, useTheme } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useCallback, useEffect, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { type WebuiSetting, selectors, useAppStore } from '@/store';

import FormAppearance from './Form/Appearance';
import FormExperimental from './Form/Experimental';
import Footer from './Form/Footer';
import FormLayout from './Form/Layout';
import FormSidebar from './Form/Sidebar';
import Sidebar, { MobileSidebar, SettingsTabs } from './Sidebar';

export interface SettingProps {
  onCancel?: ModalProps['onCancel'];
  open?: ModalProps['open'];
}

const Setting = memo<SettingProps>(({ open, onCancel }) => {
  const [tab, setTab] = useState<SettingsTabs>(SettingsTabs.Appearance);
  const { mobile } = useResponsive();
  const theme = useTheme();

  // Get original settings from store
  const originalSetting = useAppStore(selectors.currentSetting, isEqual);

  // Track all pending changes across all tabs
  const [pendingChanges, setPendingChanges] = useState<Partial<WebuiSetting>>({});

  // Calculate current merged state (original + pending changes)
  const currentSetting = { ...originalSetting, ...pendingChanges };

  // Listen for changes from individual forms
  useEffect(() => {
    const handleFormChange = (event: CustomEvent) => {
      setPendingChanges((prev) => ({ ...prev, ...event.detail }));
    };

    window.addEventListener('settingsFormChange', handleFormChange as any);
    return () => window.removeEventListener('settingsFormChange', handleFormChange as any);
  }, []);

  // Reset pending changes when modal opens/closes
  useEffect(() => {
    if (open) {
      setPendingChanges({});
    }
  }, [open]);

  // Pass reset function to Footer
  const handleReset = useCallback(() => {
    setPendingChanges({});
  }, []);

  const content = (
    <>
      {/* Pass current merged state to each form so they show the right values */}
      {tab === SettingsTabs.Appearance && (
        <FormAppearance currentSetting={currentSetting} key="appearance" />
      )}
      {tab === SettingsTabs.Layout && <FormLayout currentSetting={currentSetting} key="layout" />}
      {tab === SettingsTabs.Sidebar && (
        <FormSidebar currentSetting={currentSetting} key="sidebar" />
      )}
      {tab === SettingsTabs.Experimental && (
        <FormExperimental currentSetting={currentSetting} key="experimental" />
      )}
    </>
  );

  return (
    <Modal
      allowFullscreen={true}
      // Pass state and handlers to Footer
      footer={<Footer onReset={handleReset} pendingChanges={pendingChanges} />}
      onCancel={onCancel}
      open={open}
      styles={{
        body: {
          display: 'flex',
          minHeight: 'min(75vh, 750px)',
          overflow: 'hidden',
          padding: 0,
          paddingBlock: 0,
        },
        content: {
          background: mobile ? theme.colorBgContainer : undefined,
          border: 'none',
          boxShadow: `0 0 0 1px ${theme.colorBorderSecondary}`,
        },
      }}
      title={false}
      width={1024}
    >
      {mobile ? (
        <Flexbox
          height={'100%'}
          style={{ overflow: 'hidden', position: 'relative' }}
          width={'100%'}
        >
          <div style={{ padding: 16 }}>
            <MobileSidebar setTab={setTab} tab={tab} />
          </div>
          <Flexbox
            height={'100%'}
            style={{ overflowX: 'hidden', overflowY: 'auto', position: 'relative' }}
            width={'100%'}
          >
            {content}
          </Flexbox>
        </Flexbox>
      ) : (
        <Flexbox horizontal width={'100%'}>
          <Sidebar setTab={setTab} tab={tab} />
          <Flexbox
            align={'center'}
            gap={64}
            style={{
              background: theme.isDarkMode ? theme.colorFillQuaternary : theme.colorBgElevated,
              minHeight: '100%',
              overflowX: 'hidden',
              overflowY: 'auto',
              paddingBlock: 40,
              paddingInline: 56,
            }}
            width={'100%'}
          >
            {content}
          </Flexbox>
        </Flexbox>
      )}
    </Modal>
  );
});

export default Setting;
