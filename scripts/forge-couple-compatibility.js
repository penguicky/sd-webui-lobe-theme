/**
 * sd-forge-couple Compatibility Script for sd-webui-lobe-theme
 *
 * This script ensures that sd-forge-couple's interactive elements are not
 * hidden by lobe-theme's element hiding mechanisms, while respecting
 * Gradio's intended UI state (accordion collapse, mode switching).
 */

(function () {
  'use strict';

  // List of sd-forge-couple selectors that should never be hidden by lobe-theme
  // IMPORTANT: Only include core UI elements that should ALWAYS be visible
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

  // Flag to track if interference prevention is active
  let interferencePreventionActive = false;
  let originalStyleSetter = null;

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

  // Function to prevent lobe-theme interference during element creation
  function preventInterferenceDuringCreation() {
    if (interferencePreventionActive) return;

    console.log('[Lobe Theme Compatibility] Activating interference prevention...');
    interferencePreventionActive = true;

    // Store original style setter
    originalStyleSetter = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'style');

    // Override style setter to prevent hiding of forge-couple elements during creation
    Object.defineProperty(HTMLElement.prototype, 'style', {
      get: originalStyleSetter.get,
      set: function (value) {
        if (typeof value === 'string' && value.includes('display: none')) {
          // Check if this element is forge-couple related
          const isForgeElement =
            this.className.includes('fc_') ||
            this.innerHTML.includes('fc_') ||
            this.closest('[class*="fc_"]') !== null;

          if (isForgeElement) {
            console.log(
              '[Lobe Theme Compatibility] Preventing hide of forge element during creation:',
              this,
            );
            return; // Don't apply the style
          }
        }
        originalStyleSetter.set.call(this, value);
      },
    });
  }

  // Function to restore normal behavior
  function restoreNormalBehavior() {
    if (!interferencePreventionActive || !originalStyleSetter) return;

    console.log('[Lobe Theme Compatibility] Restoring normal behavior...');
    Object.defineProperty(HTMLElement.prototype, 'style', originalStyleSetter);
    interferencePreventionActive = false;
    originalStyleSetter = null;
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

  // Function to force forge-couple recreation
  function forceForgeCouplRecreation() {
    console.log('[Lobe Theme Compatibility] Forcing forge-couple recreation...');

    // Prevent interference during recreation
    preventInterferenceDuringCreation();

    // Try to trigger recreation by toggling enable checkbox
    const enableCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    enableCheckboxes.forEach((checkbox) => {
      if (checkbox.closest('#forge_couple_t2i, #forge_couple_i2i')) {
        console.log('[Lobe Theme Compatibility] Found forge-couple checkbox, toggling...');
        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change', { bubbles: true }));

        setTimeout(() => {
          checkbox.checked = true;
          checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }, 500);
      }
    });

    // Restore normal behavior after recreation
    setTimeout(() => {
      restoreNormalBehavior();

      // Check results
      setTimeout(() => {
        console.log('[Lobe Theme Compatibility] Final check after recreation:');
        console.log('bg_btns elements:', document.querySelectorAll('.fc_bg_btns').length);
        console.log('bbox elements:', document.querySelectorAll('.fc_bbox').length);
        diagnoseMissingElements();
      }, 1000);
    }, 3000);
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

    console.log('[Lobe Theme Compatibility] Mutation observer started');
  }

  // Function to initialize compatibility
  function initCompatibility() {
    console.log('[Lobe Theme Compatibility] Initializing...');

    // Start protecting elements
    protectElements();

    // Initial element check
    ensureElementsVisible();

    // Check for missing critical elements and try recreation if needed
    setTimeout(() => {
      const bgBtns = document.querySelectorAll('.fc_bg_btns');
      const bbox = document.querySelectorAll('.fc_bbox');

      if (bgBtns.length === 0 || bbox.length === 0) {
        console.log(
          '[Lobe Theme Compatibility] Critical elements missing, attempting recreation...',
        );
        forceForgeCouplRecreation();
      }
    }, 2000);
  }

  // Main initialization function
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }

    // Wait for extensions to load
    setTimeout(() => {
      const hasForgeCouple = document.querySelector('#forge_couple_t2i, #forge_couple_i2i');

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
    }, 200);
  }

  // Start the compatibility system
  init();
})();
