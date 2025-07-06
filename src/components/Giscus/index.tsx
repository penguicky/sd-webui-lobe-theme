import { Icon, Modal, type ModalProps } from '@lobehub/ui';
import { Giscus as G, GradientButton } from '@lobehub/ui/awesome';
import { Button } from 'antd';
import { useTheme } from 'antd-style';
import { MessageCircle } from 'lucide-react';
import { memo, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Center, Flexbox } from 'react-layout-kit';

import { GitHubIcon, HeartIcon } from '@/components/OptimizedIcon';
import VersionTag from '@/components/VersionTag';
import { DISCORD_URL, GITHUB_REPO_URL, SPONSOR_URL } from '@/const/url';
import { FocusManager, generateAriaLabel, keyboardHandlers } from '@/utils/accessibility';

export interface GiscusProps {
  onCancel?: ModalProps['onCancel'];
  open?: ModalProps['open'];
}

const Giscus = memo<GiscusProps>(({ open, onCancel }) => {
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
                  icon={<Icon icon={MessageCircle} />}
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
                <Button aria-label="View GitHub repository" icon={<GitHubIcon />} size={'large'}>
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
          <G />
        </Flexbox>
      </div>
    </Modal>
  );
});

export default Giscus;
