import { RefObject, useRef } from 'react';

export const useSelectorRef = (selectors: string): RefObject<HTMLDivElement | null> => {
  return useRef<HTMLDivElement | null>(gradioApp().querySelector(selectors) as HTMLDivElement);
};
