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
  ref: RefObject<HTMLDivElement>,
  selectors: string,
  { onSuccess, onError, debug, id, onStart, parent, inverse }: InjectOptions = {},
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [element, setElement] = useState<HTMLDivElement>();
  const isInject = useRef(false);
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

        // Safely query for the target element
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
          const errorMsg = `Element not found for selector: ${selectors}`;
          if (debug) consola.error(`🤯 ${debug}`, errorMsg);
          throw new Error(errorMsg);
        }
      } catch (error: any) {
        const err = error instanceof Error ? error : new Error(String(error));
        console.error('useInject error:', err);
        onError?.(err);
        setIsLoading(false);
        if (debug) consola.error(`🤯 ${debug}`, err.message);
      }
    };

    // Use safe DOM operation wrapper
    safeDomOperation(performInjection, {
      onError: (error) => {
        console.error('DOM injection operation failed:', error);
        setIsLoading(false);
      },
      retries: 2,
      timeout: 5000,
    });
  }, []);
  return {
    element,
    isLoaded: !isLoading,
    isLoading,
  };
};
