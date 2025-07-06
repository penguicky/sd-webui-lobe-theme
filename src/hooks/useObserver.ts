import { useEffect, useState } from 'react';

import { usePooledMutationObserver } from './useObserverPool';

const observerOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

export const useObserver = (
  selector: string,
  { subSelector, valueProp = 'innerHTML', debounceMs = 100 }: {
    debounceMs?: number;
    subSelector?: string;
    valueProp?: string;
  } = {},
) => {
  const [value, setValue] = useState<string>('');
  const [element, setElement] = useState<Element | null>(null);

  // Find the element when selector changes
  useEffect(() => {
    const infoContainer = gradioApp().querySelector(selector);
    setElement(infoContainer);

    // Set initial value
    if (infoContainer) {
      const info = subSelector ? infoContainer.querySelector(subSelector) : infoContainer;
      setValue(String((info as any)?.[valueProp]));
    }
  }, [selector, subSelector, valueProp]);

  // Use pooled observer with debouncing for better performance
  usePooledMutationObserver(
    element,
    (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          if (subSelector) {
            const info = (mutation.target as any).querySelector(subSelector);
            if (info) {
              setValue(String(info[valueProp]));
            }
          } else {
            setValue(String((mutation.target as any)?.innerHTML));
          }
        }
      }
    },
    observerOptions,
    `observer-${selector}-${subSelector || 'root'}`,
    debounceMs,
  );

  return String(value);
};
