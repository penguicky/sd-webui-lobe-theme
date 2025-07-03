import { useEffect, useState } from 'react';

export const useExternalTextareaObserver = (textareaSelector: string) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const externalTextarea = document.querySelector(textareaSelector) as HTMLTextAreaElement | null;

    if (!externalTextarea) {
      return;
    }

    // Set initial value
    setValue(externalTextarea.value);

    // Enhanced change detection for immediate weight value updates
    const updateValue = () => {
      const currentValue = externalTextarea.value;
      setValue(currentValue);
    };

    // Listen for all possible input events that could change textarea value
    const inputEvents = ['input', 'change', 'keyup', 'paste', 'cut'];
    inputEvents.forEach((eventType) => {
      externalTextarea.addEventListener(eventType, updateValue);
    });

    // MutationObserver for attribute changes (fallback)
    const observerCallback: MutationCallback = (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
          updateValue();
        }
      }
    };

    const observerOptions: MutationObserverInit = {
      attributeFilter: ['value'],
      attributes: true, // Only watch value attribute changes
      characterData: true,
      childList: true,
      subtree: true,
    };

    const observer = new MutationObserver(observerCallback);
    observer.observe(externalTextarea, observerOptions);

    // Cleanup function
    return () => {
      inputEvents.forEach((eventType) => {
        externalTextarea.removeEventListener(eventType, updateValue);
      });
      observer.disconnect();
    };
  }, [textareaSelector]);

  return value;
};
