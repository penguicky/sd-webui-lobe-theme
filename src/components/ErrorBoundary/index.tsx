import { Button, Result } from 'antd';
import { Component, ErrorInfo, ReactNode } from 'react';
import { Center, Flexbox } from 'react-layout-kit';

import { debugError, debugWarn } from '@/modules/PromptHighlight/utils/debug';
import { OptimizedIcon } from '@/utils/iconOptimization';

// =============================================================================
// ERROR BOUNDARY TYPES
// =============================================================================

export interface ErrorBoundaryState {
  error: Error | null;
  errorInfo: ErrorInfo | null;
  hasError: boolean;
  retryCount: number;
}

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  level?: 'app' | 'feature' | 'component';
  maxRetries?: number;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  showDetails?: boolean;
}

// =============================================================================
// ERROR BOUNDARY COMPONENT
// =============================================================================

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
      hasError: false,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      error,
      hasError: true,
    };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const { level = 'component', onError } = this.props;

    // Enhanced error logging with context
    debugError(`🚨 ErrorBoundary (${level}) caught error:`, {
      componentStack: errorInfo.componentStack,
      error: error.message,
      retryCount: this.state.retryCount,
      stack: error.stack,
    });

    // Update state with error info
    this.setState({
      error,
      errorInfo,
    });

    // Call custom error handler if provided
    onError?.(error, errorInfo);

    // Report to external error tracking if needed
    this.reportError(error, errorInfo, level);
  }

  private reportError = (error: Error, errorInfo: ErrorInfo, level: string) => {
    // In a real app, you might send this to an error tracking service
    // For now, we'll just log it comprehensively
    const errorReport = {
      componentStack: errorInfo.componentStack,
      level,
      message: error.message,
      retryCount: this.state.retryCount,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    };

    debugWarn('📊 Error Report:', errorReport);
  };

  private handleRetry = () => {
    const { maxRetries = 3 } = this.props;
    const { retryCount } = this.state;

    if (retryCount < maxRetries) {
      debugWarn(`🔄 Retrying component (attempt ${retryCount + 1}/${maxRetries})`);

      this.setState({
        error: null,
        errorInfo: null,
        hasError: false,
        retryCount: retryCount + 1,
      });
    } else {
      debugError('❌ Max retries exceeded, component will remain in error state');
    }
  };

  private handleReset = () => {
    debugWarn('🔄 Resetting error boundary state');
    this.setState({
      error: null,
      errorInfo: null,
      hasError: false,
      retryCount: 0,
    });
  };

  override componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  override render() {
    const {
      children,
      fallback,
      level = 'component',
      maxRetries = 3,
      showDetails = false,
    } = this.props;
    const { hasError, error, errorInfo, retryCount } = this.state;

    if (hasError && error) {
      // Use custom fallback if provided
      if (fallback) {
        return fallback;
      }

      // Different error UI based on level
      return this.renderErrorUI(error, errorInfo, level, retryCount, maxRetries, showDetails);
    }

    return children;
  }

  private renderErrorUI(
    error: Error,
    errorInfo: ErrorInfo | null,
    level: string,
    retryCount: number,
    maxRetries: number,
    showDetails: boolean,
  ) {
    const canRetry = retryCount < maxRetries;
    const isAppLevel = level === 'app';

    if (isAppLevel) {
      return (
        <Center style={{ height: '100vh', padding: '2rem' }}>
          <Result
            extra={
              <Flexbox gap={12} horizontal>
                {canRetry && (
                  <Button
                    icon={<OptimizedIcon name="RefreshCw" size={16} />}
                    onClick={this.handleRetry}
                    type="primary"
                  >
                    Retry ({retryCount}/{maxRetries})
                  </Button>
                )}
                <Button onClick={this.handleReset}>Reset</Button>
                <Button onClick={() => window.location.reload()}>Reload Page</Button>
              </Flexbox>
            }
            icon={<OptimizedIcon name="AlertTriangle" size={24} style={{ color: '#ff4d4f' }} />}
            status="error"
            subTitle={
              showDetails ? (
                <details style={{ marginTop: '1rem', textAlign: 'left' }}>
                  <summary>Error Details</summary>
                  <pre style={{ fontSize: '12px', overflow: 'auto' }}>
                    {error.message}
                    {error.stack && `\n\nStack:\n${error.stack}`}
                    {errorInfo?.componentStack &&
                      `\n\nComponent Stack:\n${errorInfo.componentStack}`}
                  </pre>
                </details>
              ) : (
                'Something went wrong with the application. Please try refreshing the page.'
              )
            }
            title="Application Error"
          />
        </Center>
      );
    }

    // Component/Feature level error UI
    return (
      <div
        style={{
          border: '1px solid #ff4d4f',
          borderRadius: '6px',
          margin: '8px',
          padding: '16px',
          textAlign: 'center',
        }}
      >
        <OptimizedIcon
          name="AlertTriangle"
          size={24}
          style={{ color: '#ff4d4f', marginBottom: '8px' }}
        />
        <div style={{ marginBottom: '12px' }}>
          <strong>Component Error</strong>
          <div style={{ color: '#666', fontSize: '14px', marginTop: '4px' }}>
            {error.message || 'An unexpected error occurred'}
          </div>
        </div>
        <Flexbox gap={8} horizontal justify="center">
          {canRetry && (
            <Button
              icon={<OptimizedIcon name="RefreshCw" size={16} />}
              onClick={this.handleRetry}
              size="small"
              type="primary"
            >
              Retry ({retryCount}/{maxRetries})
            </Button>
          )}
          <Button onClick={this.handleReset} size="small">
            Reset
          </Button>
        </Flexbox>
        {showDetails && process.env.NODE_ENV === 'development' && (
          <details style={{ marginTop: '12px', textAlign: 'left' }}>
            <summary style={{ cursor: 'pointer' }}>Debug Info</summary>
            <pre style={{ fontSize: '11px', marginTop: '8px', overflow: 'auto' }}>
              {error.stack}
            </pre>
          </details>
        )}
      </div>
    );
  }
}

// =============================================================================
// SPECIALIZED ERROR BOUNDARIES
// =============================================================================

export const AppErrorBoundary: React.FC<{ children: ReactNode }> = ({ children }) => (
  <ErrorBoundary level="app" maxRetries={2} showDetails={process.env.NODE_ENV === 'development'}>
    {children}
  </ErrorBoundary>
);

export const FeatureErrorBoundary: React.FC<{ children: ReactNode; feature?: string }> = ({
  children,
  feature = 'feature',
}) => (
  <ErrorBoundary
    level="feature"
    maxRetries={3}
    onError={(error) => debugWarn(`🚨 ${feature} feature error:`, error.message)}
  >
    {children}
  </ErrorBoundary>
);

export const ComponentErrorBoundary: React.FC<{ children: ReactNode; component?: string }> = ({
  children,
  component = 'component',
}) => (
  <ErrorBoundary
    level="component"
    maxRetries={1}
    onError={(error) => debugWarn(`🚨 ${component} component error:`, error.message)}
  >
    {children}
  </ErrorBoundary>
);

export default ErrorBoundary;
