import { useEffect, useState } from 'react';

import { useManagedEventListeners } from './useEventListenerManager';
import { usePooledMutationObserver } from './useObserverPool';

export const useExternalTextareaObserver = (textareaSelector: string) => {
  const [value, setValue] = useState('');
  const [externalTextarea, setExternalTextarea] = useState<HTMLTextAreaElement | null>(null);

  // Find and track the textarea element
  useEffect(() => {
    const textarea = document.querySelector(textareaSelector) as HTMLTextAreaElement | null;
    setExternalTextarea(textarea);

    if (textarea) {
      setValue(textarea.value);
    }
  }, [textareaSelector]);

  // Enhanced change detection for immediate weight value updates
  const updateValue = () => {
    if (externalTextarea) {
      const currentValue = externalTextarea.value;
      setValue(currentValue);
    }
  };

  // Use managed event listeners to prevent memory leaks
  useManagedEventListeners(externalTextarea, [
    { listener: updateValue, type: 'input' },
    { listener: updateValue, type: 'change' },
    { listener: updateValue, type: 'keyup' },
    { listener: updateValue, type: 'paste' },
    { listener: updateValue, type: 'cut' },
  ]);

  // Use pooled MutationObserver for attribute changes (fallback)
  usePooledMutationObserver(
    externalTextarea,
    (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
          updateValue();
        }
      }
    },
    {
      attributeFilter: ['value'],
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    },
    `textarea-observer-${textareaSelector}`,
  );

  return value;
};
