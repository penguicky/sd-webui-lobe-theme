import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

/**
 * React integration component for forge-couple Shadow DOM implementation
 * Provides seamless integration with lobe-theme while maintaining complete isolation
 */
interface ForgeCoupleIntegrationProps {
  mode: 't2i' | 'i2i';
  visible?: boolean;
  onRegionsChange?: (regions: any[]) => void;
  onGenerate?: (data: any) => void;
}

const ForgeCoupleIntegration = memo<ForgeCoupleIntegrationProps>(
  ({ mode, visible = true, onRegionsChange, onGenerate }) => {
    const hostRef = useRef<HTMLDivElement>(null);
    const shadowContainerRef = useRef<any>(null);
    const eventBridgeRef = useRef<any>(null);
    const [isInitialized, setIsInitialized] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Initialize Shadow DOM container
    const initializeShadowContainer = useCallback(async () => {
      if (!hostRef.current || shadowContainerRef.current) {
        return;
      }

      try {
        // Ensure required classes are available
        if (typeof window.ForgeCoupleAdvancedShadowContainer === 'undefined') {
          throw new Error('ForgeCoupleAdvancedShadowContainer not available');
        }

        if (typeof window.EventBridge === 'undefined') {
          throw new Error('EventBridge not available');
        }

        // Get event bridge instance
        eventBridgeRef.current = window.EventBridge.getInstance();

        // Create shadow container
        shadowContainerRef.current = new window.ForgeCoupleAdvancedShadowContainer(
          hostRef.current,
          mode,
        );

        // Set up event listeners
        setupEventListeners();

        setIsInitialized(true);
        setError(null);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Unknown error';
        setError(errorMessage);
      }
    }, [mode]);

    // Set up event listeners for communication
    const setupEventListeners = useCallback(() => {
      if (!eventBridgeRef.current) return;

      const eventBridge = eventBridgeRef.current;

      // Listen for region changes
      const unsubscribeRegions = eventBridge.on('regions:changed', (event: any) => {
        if (event.detail.mode === mode && onRegionsChange) {
          onRegionsChange(event.detail.regions);
        }
      });

      // Listen for generate requests
      const unsubscribeGenerate = eventBridge.on('forge-couple:generate', (event: any) => {
        if (event.detail.mode === mode && onGenerate) {
          onGenerate(event.detail);
        }
      });

      // Store unsubscribe functions for cleanup
      return () => {
        unsubscribeRegions();
        unsubscribeGenerate();
      };
    }, [mode, onRegionsChange, onGenerate]);

    // Handle prompt changes from external sources
    const handlePromptChange = useCallback(
      (prompts: string[]) => {
        if (eventBridgeRef.current && isInitialized) {
          eventBridgeRef.current.emit('prompt:change', {
            mode,
            prompts,
            source: 'external',
          });
        }
      },
      [mode, isInitialized],
    );

    // Handle dimension changes
    const handleDimensionChange = useCallback(
      (dimensions: { width: number; height: number }) => {
        if (eventBridgeRef.current && isInitialized) {
          eventBridgeRef.current.emit('dimensions:change', {
            mode,
            dimensions,
            source: 'external',
          });
        }
      },
      [mode, isInitialized],
    );

    // Observe Gradio elements for changes
    useEffect(() => {
      if (!isInitialized) return;

      // Observe prompt textarea changes
      const promptSelector =
        mode === 't2i' ? '#txt2img_prompt textarea' : '#img2img_prompt textarea';
      const promptElement = document.querySelector(promptSelector) as HTMLTextAreaElement;

      if (promptElement) {
        const observer = new MutationObserver(() => {
          const prompts = promptElement.value.split('\n').map((line) => line.trim());
          handlePromptChange(prompts);
        });

        observer.observe(promptElement, {
          attributes: true,
          attributeFilter: ['value'],
        });

        // Also listen for input events
        const handleInput = () => {
          const prompts = promptElement.value.split('\n').map((line) => line.trim());
          handlePromptChange(prompts);
        };

        promptElement.addEventListener('input', handleInput);

        return () => {
          observer.disconnect();
          promptElement.removeEventListener('input', handleInput);
        };
      }
    }, [isInitialized, mode, handlePromptChange]);

    // Observe dimension changes
    useEffect(() => {
      if (!isInitialized) return;

      const widthSelector = mode === 't2i' ? '#txt2img_width input' : '#img2img_width input';
      const heightSelector = mode === 't2i' ? '#txt2img_height input' : '#img2img_height input';

      const widthElement = document.querySelector(widthSelector) as HTMLInputElement;
      const heightElement = document.querySelector(heightSelector) as HTMLInputElement;

      if (widthElement && heightElement) {
        const handleDimensionUpdate = () => {
          const width = parseInt(widthElement.value) || 512;
          const height = parseInt(heightElement.value) || 512;
          handleDimensionChange({ width, height });
        };

        widthElement.addEventListener('input', handleDimensionUpdate);
        heightElement.addEventListener('input', handleDimensionUpdate);

        // Initial update
        handleDimensionUpdate();

        return () => {
          widthElement.removeEventListener('input', handleDimensionUpdate);
          heightElement.removeEventListener('input', handleDimensionUpdate);
        };
      }
    }, [isInitialized, mode, handleDimensionChange]);

    // Initialize on mount
    useEffect(() => {
      // Wait for DOM to be ready and scripts to load
      const initTimer = setTimeout(() => {
        initializeShadowContainer();
      }, 100);

      return () => clearTimeout(initTimer);
    }, [initializeShadowContainer]);

    // Cleanup on unmount
    useEffect(() => {
      return () => {
        if (shadowContainerRef.current) {
          shadowContainerRef.current.destroy();
          shadowContainerRef.current = null;
        }
      };
    }, []);

    // Public API methods
    const api = {
      getRegions: () => {
        return shadowContainerRef.current?.forgeCoupleInstance?.getRegions() || [];
      },

      setRegions: (regions: any[]) => {
        if (shadowContainerRef.current?.forgeCoupleInstance) {
          shadowContainerRef.current.forgeCoupleInstance.importConfig({ regions });
        }
      },

      clearRegions: () => {
        if (shadowContainerRef.current?.forgeCoupleInstance) {
          shadowContainerRef.current.forgeCoupleInstance.clearAllRegions();
        }
      },

      resetToDefault: () => {
        if (shadowContainerRef.current?.forgeCoupleInstance) {
          shadowContainerRef.current.forgeCoupleInstance.resetToDefault();
        }
      },
    };

    // Expose API to parent components
    useEffect(() => {
      if (hostRef.current && isInitialized) {
        (hostRef.current as any).forgeCoupleApi = api;
      }
    }, [isInitialized]);

    if (error) {
      return (
        <div
          style={{
            padding: '16px',
            border: '1px solid #ff4d4f',
            borderRadius: '4px',
            backgroundColor: '#fff2f0',
            color: '#ff4d4f',
            margin: '16px 0',
          }}
        >
          <strong>ForgeCouple Integration Error:</strong> {error}
          <br />
          <small>Please ensure all required scripts are loaded.</small>
        </div>
      );
    }

    return (
      <div
        ref={hostRef}
        style={{
          display: visible ? 'block' : 'none',
          width: '100%',
          minHeight: '400px',
          position: 'relative',
        }}
        data-forge-couple-mode={mode}
        data-initialized={isInitialized}
      >
        {!isInitialized && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '200px',
              color: '#666',
              fontSize: '14px',
            }}
          >
            Initializing ForgeCouple Advanced Mode...
          </div>
        )}
      </div>
    );
  },
);

ForgeCoupleIntegration.displayName = 'ForgeCoupleIntegration';

export default ForgeCoupleIntegration;
