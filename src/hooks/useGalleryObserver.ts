import { useEffect, useState } from 'react';

import { usePooledMutationObserver } from './useObserverPool';

const observerOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

export const useGalleryObserver = (selector: string, debounceMs = 150) => {
  const [value, setValue] = useState<string>('');
  const [allValue, setAllValue] = useState<string[]>([]);
  const [element, setElement] = useState<Element | null>(null);

  // Find the element when selector changes
  useEffect(() => {
    const infoContainer = gradioApp().querySelector(selector);
    setElement(infoContainer);

    // Set initial values
    if (infoContainer) {
      const info = infoContainer.querySelector('img[data-testid="detailed-image"]');
      const infoDoms = infoContainer.querySelectorAll('.thumbnails button img');
      const infos = Array.from(infoDoms)
        .filter(Boolean)
        .map((i: any) => i.src);
      setValue((info as any)?.src || '');
      setAllValue(infos);
    }
  }, [selector]);

  // Use pooled observer with debouncing for better performance
  usePooledMutationObserver(
    element,
    (mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList' || mutation.type === 'characterData') {
          const info = (mutation.target as any).querySelector('img[data-testid="detailed-image"]');
          const infoDoms = (mutation.target as any).querySelectorAll('.thumbnails button img');
          const infos = Array.from(infoDoms)
            .filter(Boolean)
            .map((i: any) => i.src);
          setValue(info?.src || '');
          setAllValue(infos);
        }
      }
    },
    observerOptions,
    `gallery-observer-${selector}`,
    debounceMs,
  );

  return {
    image: value,
    images: allValue,
  };
};
