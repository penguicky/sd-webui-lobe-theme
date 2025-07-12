import { useEffect } from 'react';

// Protected selectors for forge-couple compatibility
// Only protect content elements, not containers that control visibility
const FORGE_COUPLE_PROTECTED_SELECTORS = [
  '.fc_mapping',
  '.fc_preview_img',
  '.fc_bbox',
  '.fc_mapping_btns',
  '.fc_bg_btns',
  '.fc_msk_gal',
  '.fc_masks',
  '.fc_row_btns',
  '.fc_preview_res',
  '.fc_preview',
  '.fc_paste_field',
  '.fc_entry_field',
];

/**
 * Check if an element should be protected from hiding
 */
function isElementProtected(element: HTMLElement): boolean {
  if (!element) return false;

  // Check if element or any parent has the protection class
  let current: HTMLElement | null = element;
  while (current && current !== document.body) {
    // Check for explicit protection class
    if (current.classList && current.classList.contains('fc-lobe-protected')) {
      return true;
    }

    // Check ID - but exclude main accordions to allow collapse functionality
    if (current.id && current.id.startsWith('fc_') && !current.id.includes('forge_couple_')) {
      return true;
    }

    // Check classes - be selective about what to protect
    if (current.classList) {
      for (const className of current.classList) {
        // Protect specific content classes, but not mode containers
        if (
          className.startsWith('fc_') &&
          !['fc_bsc', 'fc_adv', 'fc_msk'].includes(className) &&
          className !== 'forge-couple'
        ) {
          return true;
        }
      }
    }

    current = current.parentElement;
  }

  // Check if element matches any protected selector
  for (const selector of FORGE_COUPLE_PROTECTED_SELECTORS) {
    try {
      if (element.matches(selector)) {
        return true;
      }
    } catch (e) {
      // Invalid selector, skip
    }
  }

  return false;
}

export const useSelectorHide = (selectors: string) => {
  useEffect(() => {
    const ele = gradioApp().querySelector(selectors) as HTMLDivElement;
    if (!ele) return;

    // Don't hide protected elements
    if (isElementProtected(ele)) {
      console.log('[LobeTheme] Protecting forge-couple element from hiding:', selectors, ele);
      return;
    }

    ele.style.display = 'none';
  }, []);
};
