import { memo, useCallback, useMemo, useRef, useState } from 'react';

import { useInject } from '@/hooks/useInject';

import ShareModal from './ShareModal';
import { createButton } from './createButton';

const Share = memo<{ type: 'txt' | 'img' }>(({ type }) => {
  const [open, setOpen] = useState(false);

  // Memoize button creation to prevent recreation on every render
  const buttonReference = useRef<any>();

  // Initialize button reference only once
  useMemo(() => {
    if (!buttonReference.current) {
      buttonReference.current = createButton(type, setOpen);
    }
  }, [type]);

  // Memoize inject target selector to prevent string concatenation on every render
  const injectTarget = useMemo(() => `#image_buttons_${type}2img > .form`, [type]);

  // Memoize inject debug message to prevent string concatenation on every render
  const debugMessage = useMemo(() => `[layout] inject - Share ${type}`, [type]);

  // Memoize close handler to prevent recreation
  const handleClose = useCallback(() => setOpen(false), []);

  useInject(buttonReference, injectTarget, {
    debug: debugMessage,
    inverse: true,
  });

  return <ShareModal onCancel={handleClose} open={open} type={type} />;
});

Share.displayName = 'Share';

const ShareContainer = memo(() => {
  // Memoize share components to prevent recreation
  const shareComponents = useMemo(
    () => (
      <>
        <Share type={'txt'} />
        <Share type={'img'} />
      </>
    ),
    [],
  );

  return shareComponents;
});

ShareContainer.displayName = 'ShareContainer';

export default ShareContainer;
