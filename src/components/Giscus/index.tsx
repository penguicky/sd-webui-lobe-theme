import {
  DiscordIcon,
  Giscus as G,
  GradientButton,
  Icon,
  Modal,
  type ModalProps,
} from '@lobehub/ui';
import { Button } from 'antd';
import { useTheme } from 'antd-style';
import isEqual from 'fast-deep-equal';
import { memo, useEffect, useRef } from 'react';

import { GitHubIcon, HeartIcon } from '@/components/OptimizedIcon';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import VersionTag from '@/components/VersionTag';
import { DISCORD_URL, GISCUS_REPO_ID, GITHUB_REPO_URL, REPO_NAME, SPONSOR_URL } from '@/const/url';
import { selectors, useAppStore } from '@/store';
import { FocusManager, generateAriaLabel, keyboardHandlers } from '@/utils/accessibility';

export interface GiscusProps {
  onCancel?: ModalProps['onCancel'];
  open?: ModalProps['open'];
}

const Giscus = memo<GiscusProps>(({ open, onCancel }) => {
  const setting = useAppStore(selectors.currentSetting, isEqual);
  const theme = useTheme();
  const { t } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);

  // Focus management for modal
  useEffect(() => {
    if (open && modalRef.current) {
      // Focus first focusable element when modal opens
      const cleanup = FocusManager.createFocusTrap(modalRef.current);
      FocusManager.focusFirst(modalRef.current);

      return cleanup;
    }

    return undefined;
  }, [open]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (open) {
        keyboardHandlers.escape(event, () => onCancel?.(event as any));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, onCancel]);

  return (
    <Modal
      footer={null}
      {...(onCancel && { onCancel })}
      aria-label={generateAriaLabel.modal(t('modal.themeFeedback.title'))}
      aria-modal="true"
      open={open || false}
      title={
        <Flexbox align={'center'} gap={4} horizontal>
          {t('modal.themeFeedback.title')}
          <VersionTag />
        </Flexbox>
      }
    >
      <div ref={modalRef}>
        <Flexbox gap={32}>
          <Center
            aria-label="Community links"
            gap={16}
            role="region"
            style={{
              background: theme.colorBgLayout,
              border: `1px solid ${theme.colorBorderSecondary}`,
              borderRadius: theme.borderRadiusLG,
              padding: '16px 0',
            }}
          >
            <Flexbox gap={16} horizontal>
              <a
                aria-label={generateAriaLabel.button('Join Discord community', 'opens in new tab')}
                href={DISCORD_URL}
                rel="noreferrer"
                target="_blank"
              >
                <Button
                  aria-label="Join Discord community"
                  icon={<Icon icon={DiscordIcon} />}
                  size={'large'}
                >
                  Join Discord
                </Button>
              </a>
              <a
                aria-label={generateAriaLabel.button('View GitHub repository', 'opens in new tab')}
                href={GITHUB_REPO_URL}
                rel="noreferrer"
                target="_blank"
              >
                <Button
                  aria-label="View GitHub repository"
                  icon={<GitHubIcon />}
                  size={'large'}
                >
                  GitHub
                </Button>
              </a>
              <a
                aria-label={generateAriaLabel.button('Sponsor project', 'opens in new tab')}
                href={SPONSOR_URL}
                rel="noreferrer"
                target="_blank"
              >
                <GradientButton aria-label="Sponsor this project" icon={<HeartIcon />}>
                  Sponsor
                </GradientButton>
              </a>
            </Flexbox>
          </Center>
          <G
            aria-label="Discussion comments"
            lang={setting.i18n}
            mapping="number"
            repo={REPO_NAME}
            repoId={GISCUS_REPO_ID}
            term="53"
          />
        </Flexbox>
      </div>
    </Modal>
  );
});

export default Giscus;
