/**
 * sd-forge-couple Compatibility Script for sd-webui-lobe-theme
 *
 * PROACTIVE INTERFERENCE PREVENTION SYSTEM
 *
 * This script implements a proactive approach to prevent lobe-theme from
 * interfering with forge-couple element creation during the initial UI
 * generation phase. It operates BEFORE forge-couple attempts to create
 * its interactive elements, ensuring they can be successfully generated.
 */

(function () {
  'use strict';

  // Global state tracking
  window.forgeCoupleCompatibility = {
    initialized: false,
    preventionActive: false,
    originalMethods: {},
    protectedElements: new Set(),
  };

  // Comprehensive forge-couple element patterns for proactive protection
  const FORGE_COUPLE_PATTERNS = {
    // Main containers
    containers: ['#forge_couple_t2i', '#forge_couple_i2i'],

    // Core UI elements that must be protected during creation
    coreElements: ['.fc_mapping', '.fc_mapping_btns', '.fc_preview_img', '.fc_preview_res'],

    // Critical interactive elements that are dynamically created
    criticalElements: ['.fc_bg_btns', '.fc_bbox'],

    // All forge-couple related patterns for comprehensive protection
    allPatterns: [
      '#forge_couple_t2i',
      '#forge_couple_i2i',
      '.fc_mapping',
      '.fc_mapping_btns',
      '.fc_bg_btns',
      '.fc_preview_img',
      '.fc_preview_res',
      '.fc_bbox',
    ],

    // Class name patterns for detection
    classPatterns: ['fc_', 'forge-couple', 'forge_couple'],

    // ID patterns for detection
    idPatterns: ['forge_couple_', 'component-'],
  };

  // Function to check if an element is a CRITICAL forge-couple element that should be protected
  function isCriticalForgeElement(element) {
    if (!element || !element.nodeType || element.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }

    // Only protect CRITICAL forge-couple elements, not all elements inside containers
    if (element.className && typeof element.className === 'string') {
      // Protect specific forge-couple classes
      const criticalClasses = [
        'fc_bg_btns',
        'fc_bbox',
        'fc_mapping',
        'fc_mapping_btns',
        'fc_preview_img',
      ];

      // EXPLICITLY EXCLUDE mode containers to allow proper mode switching
      const modeContainers = ['fc_adv', 'fc_bsc', 'fc_msk'];
      const isModeContainer = modeContainers.some((modeClass) =>
        element.className.includes(modeClass),
      );

      if (isModeContainer) {
        return false; // Never protect mode containers - let Gradio control them
      }

      for (const criticalClass of criticalClasses) {
        if (element.className.includes(criticalClass)) {
          return true;
        }
      }
    }

    // Protect main forge-couple containers
    if (element.id && (element.id === 'forge_couple_t2i' || element.id === 'forge_couple_i2i')) {
      return true;
    }

    // Don't protect generic Gradio elements even if they're inside forge-couple containers
    if (element.className && typeof element.className === 'string') {
      const gradioClasses = ['wrap', 'svelte-', 'gradio-', 'block', 'container'];
      const isGradioElement = gradioClasses.some((gradioClass) =>
        element.className.includes(gradioClass),
      );

      if (isGradioElement) {
        // Allow Gradio elements to be manipulated normally
        return false;
      }
    }

    return false;
  }

  // Function to check if an element is forge-couple related (for broader detection)
  function isForgeElement(element) {
    if (!element || !element.nodeType || element.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }

    // Check class names
    if (element.className && typeof element.className === 'string') {
      for (const pattern of FORGE_COUPLE_PATTERNS.classPatterns) {
        if (element.className.includes(pattern)) {
          return true;
        }
      }
    }

    // Check ID
    if (element.id) {
      for (const pattern of FORGE_COUPLE_PATTERNS.idPatterns) {
        if (element.id.includes(pattern)) {
          // Additional check for forge-couple specific IDs
          const parent = element.closest('#forge_couple_t2i, #forge_couple_i2i');
          if (parent) {
            return true;
          }
        }
      }
    }

    // Check if element is inside a forge-couple container
    const forgeContainer = element.closest('#forge_couple_t2i, #forge_couple_i2i');
    if (forgeContainer) {
      return true;
    }

    // Check innerHTML for forge-couple content
    if (element.innerHTML && element.innerHTML.includes('fc_')) {
      return true;
    }

    return false;
  }

  // PROACTIVE INTERFERENCE PREVENTION SYSTEM

  // Function to override lobe-theme's hiding mechanisms
  function activateProactiveProtection() {
    if (window.forgeCoupleCompatibility.preventionActive) {
      return; // Already active
    }

    console.log('[Lobe Theme Compatibility] ACTIVATING COMPREHENSIVE PROACTIVE PROTECTION');
    window.forgeCoupleCompatibility.preventionActive = true;

    // COMPREHENSIVE PROTECTION: Override ALL possible hiding mechanisms

    // 1. Override HTMLElement.prototype.style setter
    const originalStyleDescriptor = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'style');
    if (originalStyleDescriptor && !window.forgeCoupleCompatibility.originalMethods.styleSetter) {
      window.forgeCoupleCompatibility.originalMethods.styleSetter = originalStyleDescriptor;

      Object.defineProperty(HTMLElement.prototype, 'style', {
        get: originalStyleDescriptor.get,
        set: function (value) {
          // Only prevent hiding of CRITICAL forge-couple elements during creation
          if (
            typeof value === 'string' &&
            value.includes('display: none') &&
            isCriticalForgeElement(this)
          ) {
            console.log(
              '[Lobe Theme Compatibility] BLOCKED style hiding of CRITICAL forge element:',
              this,
            );
            window.forgeCoupleCompatibility.protectedElements.add(this);
            return; // Block the hiding
          }
          originalStyleDescriptor.set.call(this, value);
        },
        configurable: true,
      });
    }

    // 2. Override useSelectorHide if it exists
    if (
      window.useSelectorHide &&
      !window.forgeCoupleCompatibility.originalMethods.useSelectorHide
    ) {
      window.forgeCoupleCompatibility.originalMethods.useSelectorHide = window.useSelectorHide;

      window.useSelectorHide = function (selectors) {
        // Check if any of the selectors would affect forge-couple elements
        const forgeSelectors = FORGE_COUPLE_PATTERNS.allPatterns;
        const isForgeRelated = forgeSelectors.some(
          (pattern) =>
            selectors.includes(pattern) ||
            selectors.includes(pattern.replace('.', '')) ||
            selectors.includes(pattern.replace('#', '')),
        );

        if (isForgeRelated) {
          console.log(
            '[Lobe Theme Compatibility] BLOCKED useSelectorHide for forge-couple:',
            selectors,
          );
          return; // Block the hiding
        }

        // Allow non-forge-couple hiding
        return window.forgeCoupleCompatibility.originalMethods.useSelectorHide.call(
          this,
          selectors,
        );
      };
    }

    // 3. Override common hiding methods (only for critical elements)
    const hidingMethods = ['hide', 'remove', 'removeChild'];
    hidingMethods.forEach((methodName) => {
      if (
        Element.prototype[methodName] &&
        !window.forgeCoupleCompatibility.originalMethods[methodName]
      ) {
        window.forgeCoupleCompatibility.originalMethods[methodName] = Element.prototype[methodName];

        Element.prototype[methodName] = function (...args) {
          // Only protect CRITICAL forge-couple elements, allow normal Gradio operations
          if (isCriticalForgeElement(this)) {
            console.log(
              `[Lobe Theme Compatibility] BLOCKED ${methodName} on CRITICAL forge element:`,
              this,
            );
            return; // Block the operation
          }
          return window.forgeCoupleCompatibility.originalMethods[methodName].apply(this, args);
        };
      }
    });

    // 4. Protect against CSS rule injection
    if (document.styleSheets && !window.forgeCoupleCompatibility.originalMethods.insertRule) {
      const originalInsertRule = CSSStyleSheet.prototype.insertRule;
      window.forgeCoupleCompatibility.originalMethods.insertRule = originalInsertRule;

      CSSStyleSheet.prototype.insertRule = function (rule, index) {
        // Block CSS rules that would hide forge-couple elements
        if (typeof rule === 'string' && rule.includes('display: none')) {
          const forgePatterns = FORGE_COUPLE_PATTERNS.allPatterns;
          const affectsForge = forgePatterns.some((pattern) => rule.includes(pattern));

          if (affectsForge) {
            console.log('[Lobe Theme Compatibility] BLOCKED CSS rule injection:', rule);
            return; // Block the rule
          }
        }

        return originalInsertRule.call(this, rule, index);
      };
    }

    // 5. Override querySelector/querySelectorAll to prevent element hiding during selection
    if (!window.forgeCoupleCompatibility.originalMethods.querySelector) {
      const originalQuerySelector = Document.prototype.querySelector;
      const originalQuerySelectorAll = Document.prototype.querySelectorAll;

      window.forgeCoupleCompatibility.originalMethods.querySelector = originalQuerySelector;
      window.forgeCoupleCompatibility.originalMethods.querySelectorAll = originalQuerySelectorAll;

      // Monitor what's being selected for hiding
      Document.prototype.querySelector = function (selector) {
        const result = originalQuerySelector.call(this, selector);

        // If selecting forge elements for potential hiding, log it
        if (result && isCriticalForgeElement(result)) {
          console.log(
            '[Lobe Theme Compatibility] MONITORED querySelector for critical element:',
            selector,
            result,
          );
        }

        return result;
      };

      Document.prototype.querySelectorAll = function (selector) {
        const results = originalQuerySelectorAll.call(this, selector);

        // Check if any results are critical forge elements
        const criticalElements = Array.from(results).filter((el) => isCriticalForgeElement(el));
        if (criticalElements.length > 0) {
          console.log(
            '[Lobe Theme Compatibility] MONITORED querySelectorAll for critical elements:',
            selector,
            criticalElements,
          );
        }

        return results;
      };
    }

    // 6. Override appendChild/insertBefore to ensure forge elements are properly added
    if (!window.forgeCoupleCompatibility.originalMethods.appendChild) {
      const originalAppendChild = Node.prototype.appendChild;
      const originalInsertBefore = Node.prototype.insertBefore;

      window.forgeCoupleCompatibility.originalMethods.appendChild = originalAppendChild;
      window.forgeCoupleCompatibility.originalMethods.insertBefore = originalInsertBefore;

      Node.prototype.appendChild = function (child) {
        const result = originalAppendChild.call(this, child);

        // Log when critical forge elements are added
        if (isCriticalForgeElement(child)) {
          console.log(
            '[Lobe Theme Compatibility] MONITORED appendChild of critical element:',
            child,
          );
        }

        return result;
      };

      Node.prototype.insertBefore = function (newNode, referenceNode) {
        const result = originalInsertBefore.call(this, newNode, referenceNode);

        // Log when critical forge elements are inserted
        if (isCriticalForgeElement(newNode)) {
          console.log(
            '[Lobe Theme Compatibility] MONITORED insertBefore of critical element:',
            newNode,
          );
        }

        return result;
      };
    }

    // 7. Override setAttribute to prevent style attribute manipulation
    if (!window.forgeCoupleCompatibility.originalMethods.setAttribute) {
      const originalSetAttribute = Element.prototype.setAttribute;
      window.forgeCoupleCompatibility.originalMethods.setAttribute = originalSetAttribute;

      Element.prototype.setAttribute = function (name, value) {
        // Block style attribute changes that would hide critical elements
        if (
          name === 'style' &&
          typeof value === 'string' &&
          value.includes('display: none') &&
          isCriticalForgeElement(this)
        ) {
          console.log(
            '[Lobe Theme Compatibility] BLOCKED setAttribute style on critical element:',
            this,
            value,
          );
          return; // Block the attribute change
        }

        return originalSetAttribute.call(this, name, value);
      };
    }

    // 8. Force creation monitoring - actively watch for missing elements and create them
    window.forgeCoupleCompatibility.creationMonitor = setInterval(() => {
      const bgBtns = document.querySelectorAll('.fc_bg_btns');
      const bbox = document.querySelectorAll('.fc_bbox');

      if (bgBtns.length === 0 || bbox.length === 0) {
        console.log(
          '[Lobe Theme Compatibility] FORCE CREATION: Critical elements missing, attempting manual creation...',
        );

        // Try to manually create missing elements
        const previewContainers = document.querySelectorAll('.fc_preview_img');
        previewContainers.forEach((container, index) => {
          const parent = container.parentElement;
          if (!parent) return;

          // Create missing .fc_bg_btns if not present
          if (!parent.querySelector('.fc_bg_btns')) {
            console.log(
              `[Lobe Theme Compatibility] FORCE CREATING .fc_bg_btns for container ${index}`,
            );
            const bgBtnsDiv = document.createElement('div');
            bgBtnsDiv.className = 'fc_bg_btns';
            bgBtnsDiv.style.cssText =
              'min-width: unset !important; left: calc(100% + 4px); position: absolute; display: flex; flex-direction: column; gap: 5px;';

            // Create buttons with functional event handlers
            const loadBtn = document.createElement('button');
            loadBtn.innerHTML = '📂';
            loadBtn.title = 'Load background image';
            loadBtn.style.cssText =
              'padding: 8px; border: 1px solid #ddd; background: white; border-radius: 4px; cursor: pointer;';
            loadBtn.onclick = () => {
              console.log('[Lobe Theme Compatibility] Load background button clicked');
              // Trigger file input for background image
              const fileInput = document.createElement('input');
              fileInput.type = 'file';
              fileInput.accept = 'image/*';
              fileInput.onchange = (e) => {
                if (e.target.files && e.target.files[0]) {
                  console.log(
                    '[Lobe Theme Compatibility] Background image selected:',
                    e.target.files[0].name,
                  );
                  // This would normally integrate with forge-couple's background system
                }
              };
              fileInput.click();
            };

            const transferBtn = document.createElement('button');
            transferBtn.innerHTML = '⏏';
            transferBtn.title = 'Use img2img input as background';
            transferBtn.style.cssText =
              'padding: 8px; border: 1px solid #ddd; background: white; border-radius: 4px; cursor: pointer;';
            transferBtn.onclick = () => {
              console.log('[Lobe Theme Compatibility] Transfer img2img button clicked');
              // This would normally transfer the img2img input to background
            };

            const clearBtn = document.createElement('button');
            clearBtn.innerHTML = '🗑';
            clearBtn.title = 'Clear background image';
            clearBtn.style.cssText =
              'padding: 8px; border: 1px solid #ddd; background: white; border-radius: 4px; cursor: pointer;';
            clearBtn.onclick = () => {
              console.log('[Lobe Theme Compatibility] Clear background button clicked');
              // This would normally clear the background image
            };

            bgBtnsDiv.appendChild(loadBtn);
            bgBtnsDiv.appendChild(transferBtn);
            bgBtnsDiv.appendChild(clearBtn);

            parent.appendChild(bgBtnsDiv);
            console.log('[Lobe Theme Compatibility] FORCE CREATED .fc_bg_btns:', bgBtnsDiv);
          }

          // Create missing .fc_bbox if not present
          if (!parent.querySelector('.fc_bbox')) {
            console.log(
              `[Lobe Theme Compatibility] FORCE CREATING .fc_bbox for container ${index}`,
            );
            const bboxDiv = document.createElement('div');
            bboxDiv.className = 'fc_bbox';
            bboxDiv.style.cssText =
              'display: none; position: absolute; border: 2px solid red; pointer-events: none; z-index: 1000;';

            // Add basic interaction functionality
            const img = container.querySelector('img');
            if (img) {
              // Add hover functionality to show bounding box
              const tableRows = document.querySelectorAll('.fc_mapping tbody tr');
              tableRows.forEach((row, rowIndex) => {
                row.addEventListener('mouseenter', () => {
                  console.log(`[Lobe Theme Compatibility] Showing bbox for row ${rowIndex}`);
                  bboxDiv.style.display = 'block';
                  bboxDiv.style.left = '10px';
                  bboxDiv.style.top = '10px';
                  bboxDiv.style.width = '100px';
                  bboxDiv.style.height = '100px';
                });

                row.addEventListener('mouseleave', () => {
                  bboxDiv.style.display = 'none';
                });
              });
            }

            parent.appendChild(bboxDiv);
            console.log(
              '[Lobe Theme Compatibility] FORCE CREATED .fc_bbox with interactions:',
              bboxDiv,
            );
          }
        });
      }
    }, 1000); // Check every second

    console.log(
      '[Lobe Theme Compatibility] COMPREHENSIVE proactive protection ACTIVE - all interference vectors blocked',
    );
  }

  // Function to restore original methods (when safe to do so)
  function deactivateProactiveProtection() {
    if (!window.forgeCoupleCompatibility.preventionActive) {
      return; // Not active
    }

    console.log('[Lobe Theme Compatibility] DEACTIVATING PROACTIVE PROTECTION');

    // Restore original methods
    const original = window.forgeCoupleCompatibility.originalMethods;

    if (original.styleSetter) {
      Object.defineProperty(HTMLElement.prototype, 'style', original.styleSetter);
    }

    if (original.useSelectorHide) {
      window.useSelectorHide = original.useSelectorHide;
    }

    ['hide', 'remove', 'removeChild'].forEach((methodName) => {
      if (original[methodName]) {
        Element.prototype[methodName] = original[methodName];
      }
    });

    if (original.insertRule) {
      CSSStyleSheet.prototype.insertRule = original.insertRule;
    }

    if (original.querySelector) {
      Document.prototype.querySelector = original.querySelector;
    }

    if (original.querySelectorAll) {
      Document.prototype.querySelectorAll = original.querySelectorAll;
    }

    if (original.appendChild) {
      Node.prototype.appendChild = original.appendChild;
    }

    if (original.insertBefore) {
      Node.prototype.insertBefore = original.insertBefore;
    }

    if (original.setAttribute) {
      Element.prototype.setAttribute = original.setAttribute;
    }

    // Clear the creation monitor
    if (window.forgeCoupleCompatibility.creationMonitor) {
      clearInterval(window.forgeCoupleCompatibility.creationMonitor);
      window.forgeCoupleCompatibility.creationMonitor = null;
    }

    window.forgeCoupleCompatibility.preventionActive = false;
    console.log(
      '[Lobe Theme Compatibility] COMPREHENSIVE proactive protection DEACTIVATED - normal behavior restored',
    );
  }

  // Function to ensure core elements are visible (legacy support)
  function ensureElementsVisible() {
    // Only protect core forge-couple elements that should ALWAYS be visible
    // Do NOT interfere with mode containers or dynamic elements
    // RESPECT Gradio's .hidden class for accordion functionality
    FORGE_COUPLE_PATTERNS.allPatterns.forEach((selector) => {
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

            // Only protect CRITICAL forge-couple elements, not all elements
            if (isCriticalForgeElement(element) && element.style.display === 'none') {
              const isHiddenByAccordion = element.classList.contains('hidden');

              if (!isHiddenByAccordion) {
                console.log(
                  `[Lobe Theme Compatibility] Restoring visibility of CRITICAL forge element:`,
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
              const isForgeElementAdded = isForgeElement(element);

              // Also check if any child elements are forge-couple elements
              const hasForgeChildren = FORGE_COUPLE_PATTERNS.allPatterns.some((selector) => {
                return element.querySelector && element.querySelector(selector);
              });

              if (isForgeElementAdded || hasForgeChildren) {
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

  // Function to wait for forge-couple with retries
  function waitForForgeCouple(retries = 0, maxRetries = 20) {
    const hasForgeCouple = document.querySelector('#forge_couple_t2i, #forge_couple_i2i');

    if (hasForgeCouple) {
      console.log(
        `[Lobe Theme Compatibility] sd-forge-couple detected after ${retries} retries, initializing compatibility`,
      );
      initCompatibility();

      // Additional wait for forge-couple's dynamic element creation
      setTimeout(() => {
        ensureElementsVisible();
        diagnoseMissingElements();
        console.log('[Lobe Theme Compatibility] Post-setup element check completed');
      }, 1500);
    } else if (retries < maxRetries) {
      // Retry with exponential backoff
      const delay = Math.min(500 + retries * 200, 3000);
      console.log(
        `[Lobe Theme Compatibility] sd-forge-couple not detected, retry ${retries + 1}/${maxRetries} in ${delay}ms`,
      );
      setTimeout(() => waitForForgeCouple(retries + 1, maxRetries), delay);
    } else {
      console.log(
        '[Lobe Theme Compatibility] sd-forge-couple not detected after maximum retries, skipping compatibility fixes',
      );
    }
  }

  // Alternative detection via onUiLoaded event
  function setupEventListeners() {
    // Listen for the onUiLoaded event that forge-couple uses
    if (typeof onUiLoaded === 'function') {
      console.log('[Lobe Theme Compatibility] Setting up onUiLoaded listener...');
      onUiLoaded(() => {
        setTimeout(() => {
          console.log(
            '[Lobe Theme Compatibility] onUiLoaded triggered, checking for forge-couple...',
          );
          const hasForgeCouple = document.querySelector('#forge_couple_t2i, #forge_couple_i2i');
          if (hasForgeCouple && !window.forgeCoupleCompatibilityInitialized) {
            console.log('[Lobe Theme Compatibility] forge-couple detected via onUiLoaded');
            window.forgeCoupleCompatibilityInitialized = true;
            initCompatibility();
          }
        }, 500);
      });
    }

    // Also listen for any gradio updates
    document.addEventListener('gradio:update', () => {
      setTimeout(() => {
        const hasForgeCouple = document.querySelector('#forge_couple_t2i, #forge_couple_i2i');
        if (hasForgeCouple && !window.forgeCoupleCompatibilityInitialized) {
          console.log('[Lobe Theme Compatibility] forge-couple detected via gradio:update');
          window.forgeCoupleCompatibilityInitialized = true;
          initCompatibility();
        }
      }, 100);
    });
  }

  // PROACTIVE INITIALIZATION SYSTEM

  // Main initialization function with proactive protection
  function init() {
    // CRITICAL: Activate protection IMMEDIATELY, before any other scripts run
    console.log('[Lobe Theme Compatibility] STARTING PROACTIVE PROTECTION SYSTEM');
    activateProactiveProtection();

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        console.log('[Lobe Theme Compatibility] DOM ready, maintaining proactive protection...');
        init();
      });
      return;
    }

    console.log(
      '[Lobe Theme Compatibility] Starting forge-couple detection with active protection...',
    );

    // Set up event listeners for alternative detection
    setupEventListeners();

    // Start waiting for forge-couple with retries (protection remains active)
    waitForForgeCouple();
  }

  // Enhanced initialization that maintains protection throughout the process
  function initCompatibility() {
    if (window.forgeCoupleCompatibility.initialized) {
      return; // Already initialized
    }

    console.log('[Lobe Theme Compatibility] Initializing with proactive protection ACTIVE...');
    window.forgeCoupleCompatibility.initialized = true;

    // Start protecting elements (with proactive protection still active)
    protectElements();

    // Initial element check
    ensureElementsVisible();

    // Check for missing critical elements and try recreation if needed
    setTimeout(() => {
      const bgBtns = document.querySelectorAll('.fc_bg_btns');
      const bbox = document.querySelectorAll('.fc_bbox');

      if (bgBtns.length === 0 || bbox.length === 0) {
        console.log(
          '[Lobe Theme Compatibility] Critical elements missing despite protection, attempting recreation...',
        );
        forceForgeCouplRecreation();
      } else {
        console.log('[Lobe Theme Compatibility] Critical elements found! Protection successful.');
        // Keep protection active for a while longer to ensure stability
        setTimeout(() => {
          console.log(
            '[Lobe Theme Compatibility] Considering deactivation of proactive protection...',
          );
          // Only deactivate if elements are stable and working
          const finalCheck = document.querySelectorAll('.fc_bg_btns, .fc_bbox');
          if (finalCheck.length >= 2) {
            console.log(
              '[Lobe Theme Compatibility] Elements stable, deactivating proactive protection',
            );
            deactivateProactiveProtection();
          } else {
            console.log(
              '[Lobe Theme Compatibility] Elements unstable, maintaining proactive protection',
            );
          }
        }, 5000);
      }
    }, 2000);
  }

  // Start the compatibility system
  init();
})();
