/**
 * Compatibility script for sd-forge-couple extension
 * Ensures that sd-forge-couple's advanced mode UI elements remain functional
 * when used together with sd-webui-lobe-theme
 *
 * This script is located outside the build directory to prevent deletion during builds.
 */

(function () {
  'use strict';

  // List of sd-forge-couple selectors that should never be hidden by lobe-theme
  // IMPORTANT: Only core UI elements that should ALWAYS be visible
  // DO NOT include mode containers (.fc_adv, .fc_bsc, .fc_msk) - they must be controlled by Gradio
  // DO NOT include .fc_row_btns - they are controlled by JavaScript
  const FORGE_COUPLE_SELECTORS = [
    '#forge_couple_t2i',
    '#forge_couple_i2i',
    '.fc_mapping',
    '.fc_mapping_btns',
    '.fc_bg_btns',
    '.fc_preview_img',
    '.fc_preview_res',
    '.fc_bbox',
  ];

  // Function to ensure core elements are visible
  function ensureElementsVisible() {
    // Only protect core forge-couple elements that should ALWAYS be visible
    // Do NOT interfere with mode containers or dynamic elements
    // RESPECT Gradio's .hidden class for accordion functionality
    FORGE_COUPLE_SELECTORS.forEach((selector) => {
      const elements = document.querySelectorAll(selector);

      if (elements.length === 0 && (selector === '.fc_bbox' || selector === '.fc_bg_btns')) {
        console.log(`[Lobe Theme Compatibility] WARNING: Critical element not found: ${selector}`);
      }

      elements.forEach((element) => {
        // Don't restore visibility if element is hidden by Gradio accordion (.hidden class)
        const isHiddenByAccordion = element.classList.contains('hidden');
        const isDirectlyHidden = element.style.display === 'none';

        if (isDirectlyHidden && !isHiddenByAccordion) {
          console.log(`[Lobe Theme Compatibility] Restoring visibility for: ${selector}`);
          element.style.display = '';
          element.style.visibility = 'visible';
          element.style.opacity = '1';
        }
      });
    });
  }

  // Function to diagnose missing elements
  function diagnoseMissingElements() {
    console.log('[Lobe Theme Compatibility] Diagnosing element status...');

    const criticalElements = ['.fc_bbox', '.fc_bg_btns'];
    criticalElements.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      console.log(`${selector}: Found ${elements.length} elements`);

      if (elements.length === 0) {
        // Check if parent containers exist
        const previewImages = document.querySelectorAll('.fc_preview_img img');
        console.log(`  Preview images found: ${previewImages.length}`);

        if (selector === '.fc_bg_btns') {
          // Check if bg_btns exist anywhere in the DOM
          const bgBtnsAnywhere = document.querySelectorAll('[class*="fc_bg"]');
          console.log(`  Elements with fc_bg in class: ${bgBtnsAnywhere.length}`);
        }
      }
    });
  }

  // Function to protect elements from being hidden by mutation observers
  function protectElements() {
    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        // Handle style attribute changes
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const target = mutation.target;
          if (target.nodeType === Node.ELEMENT_NODE) {
            const element = target;

            // Check if this element matches any core forge-couple selector
            const isCoreForgeCoupleElement = FORGE_COUPLE_SELECTORS.some((selector) => {
              if (selector.startsWith('#')) {
                return element.id === selector.slice(1);
              } else if (selector.startsWith('.')) {
                return element.classList.contains(selector.slice(1));
              }
              return false;
            });

            // Only protect core elements - do NOT interfere with mode containers or dynamic elements
            // RESPECT Gradio's .hidden class for accordion functionality
            if (isCoreForgeCoupleElement && element.style.display === 'none') {
              const isHiddenByAccordion = element.classList.contains('hidden');

              if (!isHiddenByAccordion) {
                console.log(
                  `[Lobe Theme Compatibility] Preventing hide of core forge-couple element:`,
                  element,
                );
                element.style.display = '';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
              }
            }
          }
        }

        // Handle node additions (for dynamically created elements)
        else if (mutation.type === 'childList') {
          mutation.addedNodes.forEach(function (node) {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node;

              // Check if the added element is a forge-couple element
              const isForgeElement = FORGE_COUPLE_SELECTORS.some((selector) => {
                if (selector.startsWith('#')) {
                  return element.id === selector.slice(1);
                } else if (selector.startsWith('.')) {
                  return element.classList.contains(selector.slice(1));
                }
                return false;
              });

              // Also check if any child elements are forge-couple elements
              const hasForgeChildren = FORGE_COUPLE_SELECTORS.some((selector) => {
                return element.querySelector && element.querySelector(selector);
              });

              if (isForgeElement || hasForgeChildren) {
                console.log(
                  '[Lobe Theme Compatibility] Detected forge-couple element addition:',
                  element,
                );
                setTimeout(() => {
                  ensureElementsVisible();
                }, 50);
              }
            }
          });
        }
      });
    });

    // Start observing
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['style'],
      childList: true,
      subtree: true,
    });

    return observer;
  }

  // Function to initialize compatibility fixes
  function initCompatibility() {
    console.log('[Lobe Theme Compatibility] Initializing sd-forge-couple compatibility fixes');

    // Ensure elements are visible immediately
    ensureElementsVisible();

    // Set up protection against future hiding
    const observer = protectElements();

    // Re-check visibility periodically
    const intervalId = setInterval(ensureElementsVisible, 1000);

    // Clean up after 30 seconds (should be enough for initialization)
    setTimeout(() => {
      clearInterval(intervalId);
      console.log('[Lobe Theme Compatibility] Periodic visibility checks stopped');
    }, 30000);

    // Store references for potential cleanup
    window.lobeThemeCompatibility = {
      observer: observer,
      cleanup: () => {
        observer.disconnect();
        clearInterval(intervalId);
      },
    };
  }

  // Wait for DOM to be ready and both extensions to load
  function waitForExtensions() {
    let attempts = 0;
    const maxAttempts = 50; // 10 seconds max wait

    const checkInterval = setInterval(() => {
      attempts++;

      // Check if forge-couple elements exist
      const forgeElements = document.querySelectorAll('#forge_couple_t2i, #forge_couple_i2i');
      const hasForgeCouple = forgeElements.length > 0;

      // Check if lobe-theme has loaded (look for its specific classes)
      const hasLobeTheme =
        document.querySelector('.ant-app') !== null ||
        document.querySelector('[class*="lobe"]') !== null;

      if (hasForgeCouple || attempts >= maxAttempts) {
        clearInterval(checkInterval);

        if (hasForgeCouple) {
          console.log(
            '[Lobe Theme Compatibility] sd-forge-couple detected, initializing compatibility',
          );
          initCompatibility();

          // Additional wait for forge-couple's dynamic element creation
          setTimeout(() => {
            ensureElementsVisible();
            diagnoseMissingElements();
            console.log('[Lobe Theme Compatibility] Post-setup element check completed');
          }, 1500);
        } else {
          console.log(
            '[Lobe Theme Compatibility] sd-forge-couple not detected, skipping compatibility fixes',
          );
        }
      }
    }, 200);
  }

  // Start when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', waitForExtensions);
  } else {
    waitForExtensions();
  }

  // Also run when the page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(waitForExtensions, 1000);
  });
})();
