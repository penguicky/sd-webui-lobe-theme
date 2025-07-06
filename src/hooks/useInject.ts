import { consola } from 'consola';
import { RefObject, useEffect, useRef, useState } from 'react';

import {
  safeAppendChild,
  safeDomOperation,
  safeGradioApp,
  safeQuerySelector,
  safeSetProperty,
} from '@/utils/safeDom';

interface InjectOptions {
  debug?: string;
  id?: string;
  inverse?: boolean;
  onError?: (error: Error) => void;
  onStart?: (ele: HTMLDivElement) => void;
  onSuccess?: (ele: HTMLDivElement) => void;
  parent?: string;
}
export const useInject = (
  ref: RefObject<HTMLDivElement | null>,
  selectors: string,
  { onSuccess, onError, debug, id, onStart, parent, inverse }: InjectOptions = {},
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [element, setElement] = useState<HTMLDivElement>();
  const isInject = useRef<boolean>(false);
  const retryCount = useRef<number>(0);
  const maxRetries = 3;

  useEffect(() => {
    if (isInject.current) return;

    const performInjection = async () => {
      try {
        // Safely get the root element
        const gradioRoot = safeGradioApp();
        if (!gradioRoot) {
          throw new Error('Gradio app root not found');
        }

        const root = parent
          ? safeQuerySelector<HTMLDivElement>(parent, gradioRoot)
          : (gradioRoot as HTMLDivElement);

        if (!root) {
          throw new Error(`Parent element not found: ${parent}`);
        }

        // Safely query for the target element with enhanced error handling
        const ele = safeQuerySelector<HTMLDivElement>(selectors, root);

        if (ele) {
          // Safely set ID if provided
          if (id) {
            safeSetProperty(ele, 'id', id, {
              onError: (error) => consola.warn(`Failed to set ID "${id}":`, error.message),
            });
          }

          onStart?.(ele);

          // Safely append elements
          if (inverse && ref.current) {
            const success = safeAppendChild(ele, ref.current, {
              onError: (error) =>
                consola.error(`Failed to append to target element:`, error.message),
            });
            if (!success) {
              throw new Error('Failed to append ref to target element');
            }
          } else if (ref.current) {
            const success = safeAppendChild(ref.current, ele, {
              onError: (error) => consola.error(`Failed to append target to ref:`, error.message),
            });
            if (!success) {
              throw new Error('Failed to append target element to ref');
            }
          }

          setElement(ele);
          onSuccess?.(ele);
          isInject.current = true;
          setIsLoading(false);
          if (debug) consola.success(`🤯 ${debug}`);
        } else {
          // Enhanced error handling: reduce console spam for missing elements
          retryCount.current++;

          if (retryCount.current <= maxRetries) {
            // Silently retry for the first few attempts
            setTimeout(() => {
              performInjection();
            }, 1000 * retryCount.current); // Exponential backoff
            return;
          }

          // Only log error after max retries to reduce console spam
          const errorMsg = `Element not found for selector: ${selectors} (after ${maxRetries} retries)`;
          if (debug) {
            consola.warn(`🤯 ${debug} - Element may not exist in current WebUI version:`, errorMsg);
          }

          // Don't throw error for missing elements - just mark as failed silently
          setIsLoading(false);
          return;
        }
      } catch (error: any) {
        const err = error instanceof Error ? error : new Error(String(error));

        // Enhanced error handling: reduce console spam
        retryCount.current++;

        if (retryCount.current <= maxRetries && err.message.includes('not found')) {
          // Silently retry for "not found" errors
          setTimeout(() => {
            performInjection();
          }, 1000 * retryCount.current);
          return;
        }

        // Only log persistent errors
        console.warn('useInject persistent error:', err.message);
        onError?.(err);
        setIsLoading(false);
        if (debug) consola.warn(`🤯 ${debug} - Injection failed:`, err.message);
      }
    };

    // Use safe DOM operation wrapper with reduced error logging
    safeDomOperation(performInjection, {
      onError: (error) => {
        // Only log if it's not a "not found" error to reduce console spam
        if (!error.message.includes('not found')) {
          console.warn('DOM injection operation failed:', error.message);
        }
        setIsLoading(false);
      },
      retries: 0, // Handle retries internally to avoid double retry logic
      timeout: 8000, // Increased timeout for slower loading
    });
  }, []);
  return {
    element,
    isLoaded: !isLoading,
    isLoading,
  };
};
