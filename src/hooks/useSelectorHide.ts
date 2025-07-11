import { useEffect } from 'react';

// List of selectors that should be protected from hiding to maintain compatibility with other extensions
const PROTECTED_SELECTORS = [
  // sd-forge-couple extension selectors
  '.fc_mapping',
  '.fc_mapping_btns',
  '.fc_row_btns',
  '.fc_bg_btns',
  '.fc_preview_img',
  '.fc_preview_res',
  '.fc_bbox',
  '.fc_adv',
  '.fc_bsc',
  '.fc_msk',
  '#forge_couple_t2i',
  '#forge_couple_i2i',
  // Add other extension selectors as needed
];

const isElementProtected = (element: HTMLElement): boolean => {
  // Check if the element itself has any protected classes
  for (const selector of PROTECTED_SELECTORS) {
    if (selector.startsWith('#') && element.id === selector.slice(1)) {
      return true;
    }
    if (selector.startsWith('.') && element.classList.contains(selector.slice(1))) {
      return true;
    }
  }

  // Check if any parent element has protected classes
  let parent = element.parentElement;
  while (parent) {
    for (const selector of PROTECTED_SELECTORS) {
      if (selector.startsWith('#') && parent.id === selector.slice(1)) {
        return true;
      }
      if (selector.startsWith('.') && parent.classList.contains(selector.slice(1))) {
        return true;
      }
    }
    parent = parent.parentElement;
  }

  // Check if any child element has protected classes
  for (const selector of PROTECTED_SELECTORS) {
    if (element.querySelector(selector)) {
      return true;
    }
  }

  return false;
};

export const useSelectorHide = (selectors: string) => {
  useEffect(() => {
    const ele = gradioApp().querySelector(selectors) as HTMLDivElement;
    if (!ele) return;

    // Check if this element should be protected from hiding
    if (isElementProtected(ele)) {
      console.log(`[Lobe Theme] Skipping hide for protected element: ${selectors}`);
      return;
    }

    ele.style.display = 'none';
  }, []);
};
