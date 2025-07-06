/**
 * Native JavaScript replacements for lodash-es functions
 * Bundle size optimization: Replace heavy lodash-es dependency with lightweight native implementations
 */

/**
 * Native replacement for lodash debounce
 * Creates a debounced function that delays invoking func until after wait milliseconds
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: {
    leading?: boolean;
    maxWait?: number;
    trailing?: boolean;
  } = {}
): T & { cancel: () => void; flush: () => ReturnType<T> | undefined } {
  const { leading = false, trailing = true, maxWait } = options;
  
  let timeoutId: NodeJS.Timeout | undefined;
  let maxTimeoutId: NodeJS.Timeout | undefined;
  let lastCallTime: number | undefined;
  let lastInvokeTime = 0;
  let lastArgs: Parameters<T> | undefined;
  let lastThis: any;
  let result: ReturnType<T> | undefined;

  function invokeFunc(time: number): ReturnType<T> {
    const args = lastArgs!;
    const thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result!;
  }

  function remainingWait(time: number): number {
    const timeSinceLastCall = time - lastCallTime!;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;

    return maxWait !== undefined
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time: number): boolean {
    const timeSinceLastCall = time - lastCallTime!;
    const timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (
      lastCallTime === undefined ||
      timeSinceLastCall >= wait ||
      timeSinceLastCall < 0 ||
      (maxWait !== undefined && timeSinceLastInvoke >= maxWait)
    );
  }

  function trailingEdge(time: number): ReturnType<T> {
    timeoutId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result!;
  }

  function timerExpired(): ReturnType<T> | undefined {
    const time = Date.now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timeoutId = setTimeout(() => timerExpired(), remainingWait(time));
    return undefined;
  }

  function leadingEdge(time: number): ReturnType<T> {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timeoutId = setTimeout(() => timerExpired(), wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result!;
  }



  function cancel(): void {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    if (maxTimeoutId !== undefined) {
      clearTimeout(maxTimeoutId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timeoutId = undefined;
  }

  function flush(): ReturnType<T> | undefined {
    return timeoutId === undefined ? result : trailingEdge(Date.now());
  }

  function debounced(this: any, ...args: Parameters<T>): ReturnType<T> | undefined {
    const time = Date.now();
    const isInvoking = shouldInvoke(time);

    lastArgs = args;
    // eslint-disable-next-line unicorn/no-this-assignment, @typescript-eslint/no-this-alias
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timeoutId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxWait !== undefined) {
        // Handle invocations in a tight loop.
        timeoutId = setTimeout(() => timerExpired(), wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timeoutId === undefined) {
      timeoutId = setTimeout(() => timerExpired(), wait);
    }
    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;

  return debounced as T & { cancel: () => void; flush: () => ReturnType<T> | undefined };
}

/**
 * Native replacement for lodash startCase
 * Converts string to start case (capitalizes first letter of each word)
 */
export function startCase(str: string): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    // Split on word boundaries (spaces, underscores, hyphens, camelCase)
    .replaceAll(/([a-z])([A-Z])/g, '$1 $2') // camelCase -> camel Case
    .replaceAll(/[_-]/g, ' ') // underscores and hyphens to spaces
    .replaceAll(/\s+/g, ' ') // multiple spaces to single space
    .trim()
    .split(' ')
    .map(word => {
      if (!word) return '';
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

/**
 * Native replacement for lodash isNumber
 * Checks if value is classified as a Number primitive or object
 */
export function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value) && isFinite(value);
}

/**
 * Additional utility functions that might be useful
 */

/**
 * Native replacement for lodash throttle
 * Creates a throttled function that only invokes func at most once per every wait milliseconds
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
  options: {
    leading?: boolean;
    trailing?: boolean;
  } = {}
): T & { cancel: () => void; flush: () => ReturnType<T> | undefined } {
  const { leading = true, trailing = true } = options;
  
  return debounce(func, wait, {
    leading,
    maxWait: wait,
    trailing,
  });
}

/**
 * Native replacement for lodash cloneDeep
 * Creates a deep clone of value
 */
export function cloneDeep<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as unknown as T;
  if (Array.isArray(obj)) return obj.map(item => cloneDeep(item)) as unknown as T;
  if (typeof obj === 'object') {
    const clonedObj = {} as T;
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        clonedObj[key] = cloneDeep(obj[key]);
      }
    }
    return clonedObj;
  }
  return obj;
}

/**
 * Native replacement for lodash isEmpty
 * Checks if value is an empty object, collection, map, or set
 */
export function isEmpty(value: any): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string' || Array.isArray(value)) return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

/**
 * Native replacement for lodash pick
 * Creates an object composed of the picked object properties
 */
export function pick<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Native replacement for lodash omit
 * Creates an object composed of the own and inherited enumerable property paths of object that are not omitted
 */
export function omit<T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj } as Omit<T, K>;
  for (const key of keys) {
    delete (result as any)[key];
  }
  return result;
}
