import { consola } from 'consola';
import { RefObject, useEffect, useRef, useState, useMemo } from 'react';

// Declare global forgeShared for TypeScript
declare global {
  interface Window {
    forgeShared?: {
      querySelector: (selector: string, parent?: Element, ttl?: number) => Element | null;
      on: (event: string, handler: (e: CustomEvent) => void) => () => void;
      emit: (event: string, data: any) => void;
      recordMetric: (metric: string, value: number) => void;
    };
  }
}

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
  const isInject = useRef(false);

  // Cache gradioApp() result with shared resources for better performance
  const gradioAppCache = useMemo(() => {
    const startTime = performance.now();

    let gradioElement: Element | null = null;

    if (window.forgeShared) {
      // Use shared resource caching - much faster for repeated calls
      gradioElement = window.forgeShared.querySelector('gradio-app') ||
                     window.forgeShared.querySelector('body');

      // Record performance metric
      const queryTime = performance.now() - startTime;
      window.forgeShared.recordMetric('lobe-theme-gradio-query', queryTime);

      if (debug) {
        consola.info(`🤯 ${debug} - Using shared resources (${queryTime.toFixed(3)}ms)`);
      }
    } else {
      // Fallback to original gradioApp() function
      gradioElement = gradioApp();

      if (debug) {
        const queryTime = performance.now() - startTime;
        consola.warn(`🤯 ${debug} - Shared resources not available, using fallback (${queryTime.toFixed(3)}ms)`);
      }
    }

    return gradioElement;
  }, [debug]);

  useEffect(() => {
    if (isInject.current) return;

    try {
      const startTime = performance.now();

      // Use cached gradioApp and shared resource querySelector for better performance
      const root = parent
        ? (window.forgeShared?.querySelector(parent, gradioAppCache as Element) as HTMLDivElement) ||
          (gradioAppCache as Element)?.querySelector(parent) as HTMLDivElement
        : gradioAppCache as HTMLDivElement;

      const ele = (window.forgeShared?.querySelector(selectors, root) as HTMLDivElement) ||
                  root?.querySelector(selectors) as HTMLDivElement;

      const queryTime = performance.now() - startTime;

      if (ele) {
        if (id) ele.id = id;
        onStart?.(ele);
        if (inverse && ref.current) {
          ele.append(ref.current);
        } else {
          ref.current?.append(ele);
        }
        setElement(ele);
        onSuccess?.(ele);
        isInject.current = true;
        setIsLoading(false);

        if (debug) {
          consola.success(`🤯 ${debug} - Element injected (${queryTime.toFixed(3)}ms)`);
        }

        // Emit event for other extensions using shared resources
        if (window.forgeShared) {
          window.forgeShared.emit('lobe-theme:element-injected', {
            selector: selectors,
            element: ele,
            parent: parent,
            queryTime: queryTime
          });

          window.forgeShared.recordMetric('lobe-theme-inject-success', queryTime);
        }
      } else {
        if (debug) {
          consola.error(`🤯 ${debug}`, `Element not found for selector: ${selectors} (${queryTime.toFixed(3)}ms)`);
        }

        // Record failed injection for performance monitoring
        if (window.forgeShared) {
          window.forgeShared.recordMetric('lobe-theme-inject-failure', queryTime);
        }
      }
    } catch (error: any) {
      console.error(error);
      onError?.(error);
      setIsLoading(false);
      if (debug) consola.error(`🤯 ${debug}`, error);

      // Record error for monitoring
      if (window.forgeShared) {
        window.forgeShared.recordMetric('lobe-theme-inject-error', 1);
      }
    }
  }, [gradioAppCache, selectors, parent, debug, id, inverse, onStart, onSuccess, onError, ref]);

  return {
    element,
    isLoaded: !isLoading,
    isLoading,
  };
};
