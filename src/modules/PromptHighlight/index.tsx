import { useScroll, useSize } from 'ahooks';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { useExternalTextareaObserver } from '@/hooks/useExternalTextareaObserver';

import SyntaxHighlighter from './features/SyntaxHighlighter';
import { useStyles } from './style';

interface AppProps {
  parentId: string;
}

const Index = memo<AppProps>(({ parentId }) => {
  const ref: any = useRef(null);
  const [prompt, setPrompt] = useState<string>('');
  const [overlayDimensions, setOverlayDimensions] = useState({ height: 0, width: 0 });
  const { styles, theme } = useStyles();
  const nativeTextareaValue = useExternalTextareaObserver(`${parentId} label textarea`);
  const nativeTextarea = useMemo(
    () => gradioApp().querySelector(`${parentId} label textarea`) as HTMLTextAreaElement,
    [parentId],
  );
  const size = useSize(nativeTextarea);
  const scroll = useScroll(nativeTextarea);

  const handlePromptChange = useCallback((event: any) => {
    setPrompt(event.target.value);
  }, []);

  // Improved dimension calculation with better alignment
  const updateOverlayDimensions = useCallback(() => {
    if (!nativeTextarea) return;

    // Get computed style for more accurate measurements
    const computedStyle = window.getComputedStyle(nativeTextarea);
    const borderWidth =
      parseFloat(computedStyle.borderLeftWidth) + parseFloat(computedStyle.borderRightWidth);
    const paddingWidth =
      parseFloat(computedStyle.paddingLeft) + parseFloat(computedStyle.paddingRight);
    const borderHeight =
      parseFloat(computedStyle.borderTopWidth) + parseFloat(computedStyle.borderBottomWidth);
    const paddingHeight =
      parseFloat(computedStyle.paddingTop) + parseFloat(computedStyle.paddingBottom);

    // Calculate exact content area including all borders and padding
    const contentWidth = nativeTextarea.clientWidth - borderWidth - paddingWidth;
    const contentHeight = nativeTextarea.clientHeight - borderHeight - paddingHeight;

    // Ensure dimensions are positive
    const finalWidth = Math.max(0, contentWidth);
    const finalHeight = Math.max(0, contentHeight);

    setOverlayDimensions({
      height: finalHeight,
      width: finalWidth,
    });

    // Debug logging for dimension updates
    console.log('📐 Overlay dimensions updated:', {
      borders: { height: borderHeight, width: borderWidth },
      finalDimensions: { height: finalHeight, width: finalWidth },
      padding: { height: paddingHeight, width: paddingWidth },
      textareaSize: { height: nativeTextarea.clientHeight, width: nativeTextarea.clientWidth },
    });
  }, [nativeTextarea]);

  // Update dimensions on size changes with improved debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let animationFrameId: number;

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);

      // Use both timeout and animation frame for smooth updates
      timeoutId = setTimeout(() => {
        animationFrameId = requestAnimationFrame(updateOverlayDimensions);
      }, 10); // Reduced delay for more responsive updates
    };

    updateOverlayDimensions(); // Initial update
    debouncedUpdate(); // Also debounce for any rapid changes

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [size?.width, size?.height, updateOverlayDimensions]);

  // Listen for resize events on the textarea itself with improved handling
  useEffect(() => {
    if (!nativeTextarea) return;

    let resizeTimeoutId: NodeJS.Timeout;

    const resizeObserver = new ResizeObserver(() => {
      // Clear any pending updates
      clearTimeout(resizeTimeoutId);

      // Debounce resize updates to avoid excessive calls
      resizeTimeoutId = setTimeout(() => {
        requestAnimationFrame(() => {
          updateOverlayDimensions();
          console.log('🔄 ResizeObserver triggered overlay update');
        });
      }, 5); // Very short delay for responsive updates
    });

    resizeObserver.observe(nativeTextarea);

    // Also listen for manual resize events (like when user drags resize handle)
    const handleManualResize = () => {
      clearTimeout(resizeTimeoutId);
      resizeTimeoutId = setTimeout(() => {
        requestAnimationFrame(updateOverlayDimensions);
      }, 10);
    };

    // Listen for various resize-related events
    window.addEventListener('resize', handleManualResize);
    nativeTextarea.addEventListener('input', handleManualResize); // Text changes can affect height

    return () => {
      resizeObserver.disconnect();
      clearTimeout(resizeTimeoutId);
      window.removeEventListener('resize', handleManualResize);
      nativeTextarea.removeEventListener('input', handleManualResize);
    };
  }, [nativeTextarea, updateOverlayDimensions]);

  // Determine priority based on prompt type and visibility
  const priority = useMemo(() => {
    // Main prompt inputs get high priority, negative prompts get normal priority
    if (parentId.includes('txt2img_prompt') && !parentId.includes('neg')) {
      return 'high' as const;
    }
    return 'normal' as const;
  }, [parentId]);

  // Sync scroll position
  useEffect(() => {
    if (ref.current && scroll) {
      ref.current.scrollTop = scroll.top || 0;
      ref.current.scrollLeft = scroll.left || 0;
    }
  }, [scroll?.top, scroll?.left]);

  // Event listeners
  useEffect(() => {
    if (!nativeTextarea) return;

    nativeTextarea.addEventListener('change', handlePromptChange);
    return () => {
      nativeTextarea.removeEventListener('change', handlePromptChange);
    };
  }, [nativeTextarea, handlePromptChange]);

  // Apply theme styles to textarea
  useEffect(() => {
    if (theme && nativeTextarea) {
      nativeTextarea.style.color = 'transparent';
      nativeTextarea.style.caretColor = theme.colorSuccess;
    }
  }, [theme, nativeTextarea]);

  // Update prompt content
  useEffect(() => {
    setPrompt(nativeTextareaValue);
  }, [nativeTextareaValue]);

  // Get textarea computed style for perfect font matching
  const textareaStyle = useMemo(() => {
    if (!nativeTextarea) return {};

    const computedStyle = window.getComputedStyle(nativeTextarea);
    return {
      border: 'none',
      direction: computedStyle.direction,
      fontFamily: computedStyle.fontFamily,
      fontSize: computedStyle.fontSize,
      fontWeight: computedStyle.fontWeight,

      letterSpacing: computedStyle.letterSpacing,

      lineHeight: computedStyle.lineHeight,

      // Remove border to avoid double borders
      margin: '0',

      paddingBottom: computedStyle.paddingBottom,

      paddingLeft: computedStyle.paddingLeft,

      paddingRight: computedStyle.paddingRight,

      // Copy padding exactly from textarea
      paddingTop: computedStyle.paddingTop,

      // Ensure text alignment matches
      textAlign: computedStyle.textAlign,

      textIndent: computedStyle.textIndent,

      whiteSpace: 'pre-wrap' as const,

      wordSpacing: computedStyle.wordSpacing,

      // Ensure text wrapping matches
      wordWrap: 'break-word' as const,
    };
  }, [nativeTextarea, size, overlayDimensions]); // Update when size or dimensions change

  return (
    <div
      className={styles.container}
      data-code-type="highlighter"
      ref={ref}
      style={{
        height: overlayDimensions.height || size?.height || 0,
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        userSelect: 'none',
        width: overlayDimensions.width || size?.width || 0,
        zIndex: 1, // Prevent overlay from extending beyond textarea
        // Match textarea styling exactly
        ...textareaStyle,
        // Override critical positioning properties
        boxSizing: 'border-box',
        direction: 'ltr',
        textAlign: 'left',
      }}
    >
      <SyntaxHighlighter maxLength={5000} parentId={parentId} priority={priority}>
        {prompt}
      </SyntaxHighlighter>
    </div>
  );
});

Index.displayName = 'PromptHighlightIndex';

export default Index;
