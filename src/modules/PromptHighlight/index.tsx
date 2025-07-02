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

    // Calculate exact content area
    const contentWidth = nativeTextarea.clientWidth - borderWidth - paddingWidth;
    const contentHeight = nativeTextarea.clientHeight;

    setOverlayDimensions({
      height: contentHeight,
      width: contentWidth,
    });
  }, [nativeTextarea]);

  // Update dimensions on size changes with debouncing
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const debouncedUpdate = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateOverlayDimensions, 16); // One frame delay
    };

    updateOverlayDimensions(); // Initial update
    debouncedUpdate(); // Also debounce for any rapid changes

    return () => clearTimeout(timeoutId);
  }, [size?.width, size?.height, updateOverlayDimensions]);

  // Listen for resize events on the textarea itself
  useEffect(() => {
    if (!nativeTextarea) return;

    const resizeObserver = new ResizeObserver(() => {
      // Use requestAnimationFrame for smooth updates
      requestAnimationFrame(updateOverlayDimensions);
    });

    resizeObserver.observe(nativeTextarea);

    return () => {
      resizeObserver.disconnect();
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
      fontFamily: computedStyle.fontFamily,
      fontSize: computedStyle.fontSize,
      fontWeight: computedStyle.fontWeight,
      letterSpacing: computedStyle.letterSpacing,
      lineHeight: computedStyle.lineHeight,
      padding: computedStyle.padding,
      paddingBottom: computedStyle.paddingBottom,
      paddingLeft: computedStyle.paddingLeft,
      paddingRight: computedStyle.paddingRight,
      paddingTop: computedStyle.paddingTop,
      wordSpacing: computedStyle.wordSpacing,
    };
  }, [nativeTextarea, size]); // Update when size changes

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
