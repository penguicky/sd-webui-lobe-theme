import { useEffect, useState } from 'react';

// Declare global forgeShared for TypeScript
declare global {
  interface Window {
    forgeShared?: {
      registerObserver: (selector: string, callback: (mutation: MutationRecord) => void, options?: any) => string;
      unregisterObserver: (id: string) => void;
      querySelector: (selector: string, parent?: Element, ttl?: number) => Element | null;
      recordMetric: (metric: string, value: number) => void;
    };
  }
}

const observerOptions = {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
};

export const useObserver = (
  selector: string,
  { subSelector, valueProp = 'innerHTML' }: { subSelector?: string; valueProp?: string } = {},
) => {
  const [value, setValue] = useState<string>('');

  useEffect(() => {
    let observerId: string | null = null;
    let individualObserver: MutationObserver | null = null;

    const handleMutation = (mutation: MutationRecord) => {
      if (mutation.type === 'childList' || mutation.type === 'characterData') {
        const startTime = performance.now();

        try {
          if (subSelector) {
            const info = (mutation.target as any).querySelector(subSelector);
            setValue(String(info?.[valueProp] || ''));
          } else {
            setValue(String((mutation.target as any)?.innerHTML || ''));
          }

          // Record performance metric
          if (window.forgeShared) {
            const processingTime = performance.now() - startTime;
            window.forgeShared.recordMetric('lobe-theme-observer-processing', processingTime);
          }
        } catch (error) {
          console.warn('[useObserver] Error processing mutation:', error);
        }
      }
    };

    // Use shared observer system if available for better performance
    if (window.forgeShared) {
      try {
        observerId = window.forgeShared.registerObserver(selector, handleMutation);

        // Get initial value using shared querySelector
        const infoContainer = window.forgeShared.querySelector(selector);
        if (infoContainer) {
          const info = subSelector
            ? window.forgeShared.querySelector(subSelector, infoContainer)
            : infoContainer;
          setValue(String((info as any)?.[valueProp] || ''));
        }

        console.log(`[useObserver] Using shared observer system for: ${selector}`);
      } catch (error) {
        console.warn('[useObserver] Failed to use shared observer, falling back to individual observer:', error);
        observerId = null;
      }
    }

    // Fallback to individual observer if shared system not available
    if (!observerId) {
      individualObserver = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          handleMutation(mutation);
        }
      });

      const infoContainer = gradioApp().querySelector(selector);
      if (infoContainer) {
        individualObserver.observe(infoContainer, observerOptions);
        const info = subSelector ? infoContainer.querySelector(subSelector) : infoContainer;
        setValue(String((info as any)?.[valueProp] || ''));
      }

      console.log(`[useObserver] Using individual observer for: ${selector}`);
    }

    // Cleanup function
    return () => {
      if (observerId && window.forgeShared) {
        window.forgeShared.unregisterObserver(observerId);
      }

      if (individualObserver) {
        individualObserver.disconnect();
      }
    };
  }, [selector, subSelector, valueProp]);

  return String(value);
};
