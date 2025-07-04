import { useEffect, useRef } from 'react';

// Event listener manager to prevent memory leaks
class EventListenerManager {
  private static instance: EventListenerManager | null = null;
  private listeners = new WeakMap<Element, Map<string, Set<EventListener>>>();
  private globalListeners = new Map<
    string,
    Set<{ listener: EventListener; options?: AddEventListenerOptions }>
  >();

  static getInstance(): EventListenerManager {
    if (!EventListenerManager.instance) {
      EventListenerManager.instance = new EventListenerManager();
    }
    return EventListenerManager.instance;
  }

  // Add event listener with automatic cleanup tracking
  addEventListener(
    target: Element | Window | Document,
    type: string,
    listener: EventListener,
    options?: AddEventListenerOptions,
  ): () => void {
    target.addEventListener(type, listener, options);

    // Track the listener for cleanup
    if (target instanceof Element) {
      if (!this.listeners.has(target)) {
        this.listeners.set(target, new Map());
      }
      const elementListeners = this.listeners.get(target)!;
      if (!elementListeners.has(type)) {
        elementListeners.set(type, new Set());
      }
      elementListeners.get(type)!.add(listener);
    } else {
      // Global listeners (window, document)
      const key = `${target.constructor.name}-${type}`;
      if (!this.globalListeners.has(key)) {
        this.globalListeners.set(key, new Set());
      }
      this.globalListeners.get(key)!.add({ listener, options });
    }

    // Return cleanup function
    return () => {
      this.removeEventListener(target, type, listener, options);
    };
  }

  // Remove event listener
  removeEventListener(
    target: Element | Window | Document,
    type: string,
    listener: EventListener,
    options?: AddEventListenerOptions,
  ): void {
    target.removeEventListener(type, listener, options);

    // Remove from tracking
    if (target instanceof Element) {
      const elementListeners = this.listeners.get(target);
      if (elementListeners) {
        const typeListeners = elementListeners.get(type);
        if (typeListeners) {
          typeListeners.delete(listener);
          if (typeListeners.size === 0) {
            elementListeners.delete(type);
          }
          if (elementListeners.size === 0) {
            this.listeners.delete(target);
          }
        }
      }
    } else {
      const key = `${target.constructor.name}-${type}`;
      const globalTypeListeners = this.globalListeners.get(key);
      if (globalTypeListeners) {
        for (const item of globalTypeListeners) {
          if (item.listener === listener) {
            globalTypeListeners.delete(item);
            break;
          }
        }
        if (globalTypeListeners.size === 0) {
          this.globalListeners.delete(key);
        }
      }
    }
  }

  // Clean up all listeners for a specific element
  cleanupElement(element: Element): void {
    const elementListeners = this.listeners.get(element);
    if (elementListeners) {
      for (const [type, listeners] of elementListeners.entries()) {
        for (const listener of listeners) {
          element.removeEventListener(type, listener);
        }
      }
      this.listeners.delete(element);
    }
  }

  // Get statistics for debugging
  getStats() {
    let totalGlobalListeners = 0;

    for (const listenerSet of this.globalListeners.values()) {
      totalGlobalListeners += listenerSet.size;
    }

    return {
      globalListenerTypes: this.globalListeners.size,
      // Note: WeakMap doesn't support iteration, so we can't count element listeners
      note: 'Element listeners are tracked via WeakMap for automatic cleanup',

      totalGlobalListeners,
    };
  }

  // Emergency cleanup (for testing or debugging)
  dispose(): void {
    // Clean up global listeners
    for (const [key, listeners] of this.globalListeners.entries()) {
      const [targetType, eventType] = key.split('-');
      const target = targetType === 'Window' ? window : document;

      for (const { listener, options } of listeners) {
        target.removeEventListener(eventType, listener, options);
      }
    }

    this.globalListeners.clear();
    // WeakMap doesn't need manual clearing
  }
}

// Global event listener manager
const eventListenerManager = EventListenerManager.getInstance();

// Hook for managed event listeners
export const useManagedEventListener = <T extends Element | Window | Document>(
  target: T | null,
  type: string,
  listener: EventListener | null,
  options?: AddEventListenerOptions,
) => {
  const listenerRef = useRef<EventListener | null>(listener);
  const cleanupRef = useRef<(() => void) | null>(null);

  // Update listener ref
  listenerRef.current = listener;

  useEffect(() => {
    if (!target || !listenerRef.current) {
      return;
    }

    // Clean up previous listener if exists
    if (cleanupRef.current) {
      cleanupRef.current();
    }

    // Add new listener
    cleanupRef.current = eventListenerManager.addEventListener(
      target,
      type,
      listenerRef.current,
      options,
    );

    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
        cleanupRef.current = null;
      }
    };
  }, [target, type, options]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (cleanupRef.current) {
        cleanupRef.current();
      }
    };
  }, []);
};

// Hook for multiple event listeners on the same element
export const useManagedEventListeners = <T extends Element | Window | Document>(
  target: T | null,
  listeners: Array<{
    listener: EventListener;
    options?: AddEventListenerOptions;
    type: string;
  }>,
) => {
  const cleanupFunctions = useRef<Array<() => void>>([]);

  useEffect(() => {
    if (!target) {
      return;
    }

    // Clean up previous listeners
    cleanupFunctions.current.forEach((cleanup) => cleanup());
    cleanupFunctions.current = [];

    // Add new listeners
    listeners.forEach(({ type, listener, options }) => {
      const cleanup = eventListenerManager.addEventListener(target, type, listener, options);
      cleanupFunctions.current.push(cleanup);
    });

    return () => {
      cleanupFunctions.current.forEach((cleanup) => cleanup());
      cleanupFunctions.current = [];
    };
  }, [target, listeners]);
};

// Utility function for one-time event listeners
export const addOneTimeEventListener = (
  target: Element | Window | Document,
  type: string,
  listener: EventListener,
  options?: AddEventListenerOptions,
): void => {
  const onceListener = (event: Event) => {
    listener(event);
    eventListenerManager.removeEventListener(target, type, onceListener, options);
  };

  eventListenerManager.addEventListener(target, type, onceListener, options);
};

// Export manager for advanced usage
export { eventListenerManager };
