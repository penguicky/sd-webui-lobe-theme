import { lazy, memo, Suspense } from 'react';
import { Skeleton } from 'antd';

// Lazy load the Settings modal for Phase 3 optimization
const SettingsModal = lazy(() => import('../features/Setting'));

interface LazySettingsProps {
  onCancel?: () => void;
  open?: boolean;
}

/**
 * Lazy-loaded Settings component with enhanced loading states
 * Phase 3: Progressive Enhancement - Settings modal is heavy and rarely used immediately
 */
export const LazySettings = memo<LazySettingsProps>(({ open, onCancel }) => {
  // Don't render anything if modal is not open to save resources
  if (!open) {
    return null;
  }

  return (
    <Suspense
      fallback={
        <div
          style={{
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            bottom: 0,
            display: 'flex',
            justifyContent: 'center',
            left: 0,
            position: 'fixed',
            right: 0,
            top: 0,
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              maxHeight: '90vh',
              maxWidth: '90vw',
              minWidth: '400px',
              padding: '24px',
            }}
          >
            <Skeleton
              active
              paragraph={{ rows: 8, width: ['100%', '90%', '80%', '100%', '70%', '90%', '60%', '100%'] }}
              title={{ width: '40%' }}
            />
          </div>
        </div>
      }
    >
      <SettingsModal onCancel={onCancel} open={open} />
    </Suspense>
  );
});

LazySettings.displayName = 'LazySettings';

export default LazySettings;
