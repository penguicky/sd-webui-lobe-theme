import { debugError, debugWarn } from '@/modules/PromptHighlight/utils/debug';

// =============================================================================
// ERROR HANDLING UTILITIES
// =============================================================================

export interface RetryOptions {
  backoff?: 'linear' | 'exponential';
  delay?: number;
  maxRetries?: number;
  onRetry?: (attempt: number, error: Error) => void;
  shouldRetry?: (error: Error) => boolean;
}

export interface AsyncOperationOptions extends RetryOptions {
  fallback?: () => any;
  onError?: (error: Error) => void;
  timeout?: number;
}

// =============================================================================
// RETRY MECHANISMS
// =============================================================================

/**
 * Execute function with retry logic and exponential backoff
 */
export const withRetry = async <T>(
  operation: () => Promise<T>,
  options: RetryOptions = {},
): Promise<T> => {
  const {
    maxRetries = 3,
    delay = 1000,
    backoff = 'exponential',
    onRetry,
    shouldRetry = () => true,
  } = options;

  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Don't retry if this is the last attempt or if shouldRetry returns false
      if (attempt === maxRetries || !shouldRetry(lastError)) {
        throw lastError;
      }

      // Calculate delay based on backoff strategy
      const currentDelay =
        backoff === 'exponential' ? delay * Math.pow(2, attempt) : delay * (attempt + 1);

      debugWarn(
        `🔄 Retry attempt ${attempt + 1}/${maxRetries} after ${currentDelay}ms:`,
        lastError.message,
      );
      onRetry?.(attempt + 1, lastError);

      // Wait before retrying
      await new Promise<void>((resolve) => {
        setTimeout(resolve, currentDelay);
      });
    }
  }

  throw lastError!;
};

/**
 * Execute synchronous function with retry logic
 */
export const withSyncRetry = <T>(
  operation: () => T,
  options: Omit<RetryOptions, 'delay' | 'backoff'> = {},
): T => {
  const { maxRetries = 3, onRetry, shouldRetry = () => true } = options;

  let lastError: Error;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return operation();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));

      // Don't retry if this is the last attempt or if shouldRetry returns false
      if (attempt === maxRetries || !shouldRetry(lastError)) {
        throw lastError;
      }

      debugWarn(`🔄 Sync retry attempt ${attempt + 1}/${maxRetries}:`, lastError.message);
      onRetry?.(attempt + 1, lastError);
    }
  }

  throw lastError!;
};

// =============================================================================
// SAFE ASYNC OPERATIONS
// =============================================================================

/**
 * Execute async operation with timeout, retries, and error handling
 */
export const safeAsyncOperation = async <T>(
  operation: () => Promise<T>,
  options: AsyncOperationOptions = {},
): Promise<T | null> => {
  const { timeout = 10_000, onError, fallback, ...retryOptions } = options;

  try {
    // Wrap operation with timeout
    const operationWithTimeout = async (): Promise<T> => {
      return Promise.race([
        operation(),
        new Promise<never>((_, reject) => {
          setTimeout(() => reject(new Error(`Operation timeout after ${timeout}ms`)), timeout);
        }),
      ]);
    };

    // Execute with retry logic
    return await withRetry(operationWithTimeout, retryOptions);
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugError('🚨 safeAsyncOperation failed:', err.message);
    onError?.(err);

    // Return fallback value if provided
    if (fallback) {
      try {
        return fallback();
      } catch (fallbackError) {
        debugError('🚨 Fallback operation also failed:', fallbackError);
      }
    }

    return null;
  }
};

// =============================================================================
// ERROR CLASSIFICATION
// =============================================================================

export enum ErrorType {
  NETWORK = 'network',
  NOT_FOUND = 'not_found',
  PERMISSION = 'permission',
  TIMEOUT = 'timeout',
  UNKNOWN = 'unknown',
  VALIDATION = 'validation',
}

/**
 * Classify error type for better handling
 */
export const classifyError = (error: Error): ErrorType => {
  const message = error.message.toLowerCase();

  if (message.includes('network') || message.includes('fetch')) {
    return ErrorType.NETWORK;
  }

  if (message.includes('timeout')) {
    return ErrorType.TIMEOUT;
  }

  if (message.includes('validation') || message.includes('invalid')) {
    return ErrorType.VALIDATION;
  }

  if (message.includes('permission') || message.includes('unauthorized')) {
    return ErrorType.PERMISSION;
  }

  if (message.includes('not found') || message.includes('404')) {
    return ErrorType.NOT_FOUND;
  }

  return ErrorType.UNKNOWN;
};

/**
 * Determine if error should be retried based on type
 */
export const shouldRetryError = (error: Error): boolean => {
  const errorType = classifyError(error);

  // Retry network and timeout errors, but not validation or permission errors
  return [ErrorType.NETWORK, ErrorType.TIMEOUT, ErrorType.UNKNOWN].includes(errorType);
};

// =============================================================================
// GRACEFUL DEGRADATION
// =============================================================================

/**
 * Execute operation with graceful degradation
 */
export const withGracefulDegradation = <T, F>(
  operation: () => T,
  fallback: () => F,
  options: { onError?: (error: Error) => void } = {},
): T | F => {
  const { onError } = options;

  try {
    return operation();
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn('🚨 Operation failed, using fallback:', err.message);
    onError?.(err);
    return fallback();
  }
};

/**
 * Execute async operation with graceful degradation
 */
export const withAsyncGracefulDegradation = async <T, F>(
  operation: () => Promise<T>,
  fallback: () => Promise<F> | F,
  options: { onError?: (error: Error) => void } = {},
): Promise<T | F> => {
  const { onError } = options;

  try {
    return await operation();
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugWarn('🚨 Async operation failed, using fallback:', err.message);
    onError?.(err);
    return await Promise.resolve(fallback());
  }
};

// =============================================================================
// ERROR RECOVERY STRATEGIES
// =============================================================================

export interface RecoveryStrategy<T> {
  condition?: (error: Error) => boolean;
  execute: () => Promise<T> | T;
  name: string;
}

/**
 * Execute operation with multiple recovery strategies
 */
export const withRecoveryStrategies = async <T>(
  operation: () => Promise<T>,
  strategies: RecoveryStrategy<T>[],
  options: { onError?: (error: Error) => void } = {},
): Promise<T | null> => {
  const { onError } = options;

  try {
    return await operation();
  } catch (error) {
    const err = error instanceof Error ? error : new Error(String(error));
    debugError('🚨 Primary operation failed, trying recovery strategies:', err.message);
    onError?.(err);

    // Try each recovery strategy
    for (const strategy of strategies) {
      // Check if strategy condition is met
      if (strategy.condition && !strategy.condition(err)) {
        continue;
      }

      try {
        debugWarn(`🔄 Trying recovery strategy: ${strategy.name}`);
        return await Promise.resolve(strategy.execute());
      } catch (strategyError) {
        debugWarn(`❌ Recovery strategy "${strategy.name}" failed:`, strategyError);
      }
    }

    debugError('❌ All recovery strategies failed');
    return null;
  }
};

// =============================================================================
// CIRCUIT BREAKER PATTERN
// =============================================================================

export class CircuitBreaker {
  private failures = 0;
  private lastFailureTime = 0;
  private state: 'closed' | 'open' | 'half-open' = 'closed';

  constructor(
    private threshold: number = 5,
    private timeout: number = 60_000, // 1 minute
  ) {}

  async execute<T>(operation: () => Promise<T>): Promise<T> {
    if (this.state === 'open') {
      if (Date.now() - this.lastFailureTime > this.timeout) {
        this.state = 'half-open';
        debugWarn('🔄 Circuit breaker moving to half-open state');
      } else {
        throw new Error('Circuit breaker is open');
      }
    }

    try {
      const result = await operation();
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }

  private onSuccess() {
    this.failures = 0;
    this.state = 'closed';
  }

  private onFailure() {
    this.failures++;
    this.lastFailureTime = Date.now();

    if (this.failures >= this.threshold) {
      this.state = 'open';
      debugError(`🚨 Circuit breaker opened after ${this.failures} failures`);
    }
  }

  getState() {
    return this.state;
  }

  reset() {
    this.failures = 0;
    this.state = 'closed';
    this.lastFailureTime = 0;
  }
}

export default {
  CircuitBreaker,
  classifyError,
  safeAsyncOperation,
  shouldRetryError,
  withAsyncGracefulDegradation,
  withGracefulDegradation,
  withRecoveryStrategies,
  withRetry,
  withSyncRetry,
};
