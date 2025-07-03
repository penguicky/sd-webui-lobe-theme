import { useScroll, useSize } from 'ahooks';
import { memo, useEffect, useMemo, useRef, useState } from 'react';

import { useExternalTextareaObserver } from '@/hooks/useExternalTextareaObserver';

import SyntaxHighlighter from './features/SyntaxHighlighter';
import { useStyles } from './style';

interface ReplacementHighlighterProps {
  parentId: string;
}

/**
 * HybridHighlighter - Combines the best of overlay and replacement approaches
 *
 * Solves three critical issues from previous implementations:
 * 1. Text Interaction: Maintains full editing functionality (typing, selection, cursor placement)
 * 2. Visual Highlighting: Displays syntax colors and blue embedding highlights clearly
 * 3. Perfect Alignment: Eliminates text wrapping and positioning mismatches
 *
 * Technical approach:
 * - Keeps original textarea interactive with transparent text and visible caret
 * - Uses absolutely positioned overlay div with copied computed styles
 * - Synchronizes scroll position between textarea and overlay
 * - Prevents pointer events on overlay to preserve textarea interaction
 */
const ReplacementHighlighter = memo<ReplacementHighlighterProps>(({ parentId }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [prompt, setPrompt] = useState<string>('');
  const { styles, theme } = useStyles();

  const nativeTextareaValue = useExternalTextareaObserver(`${parentId} label textarea`);
  const nativeTextarea = useMemo(
    () => gradioApp().querySelector(`${parentId} label textarea`) as HTMLTextAreaElement,
    [parentId],
  );

  const size = useSize(nativeTextarea);
  const scroll = useScroll(nativeTextarea);

  // Update prompt when textarea value changes
  useEffect(() => {
    if (nativeTextarea && nativeTextareaValue !== undefined) {
      setPrompt(nativeTextareaValue);
    }
  }, [nativeTextarea, nativeTextareaValue]);

  // Apply hybrid highlighting approach - keep textarea interactive with transparent text
  useEffect(() => {
    if (!nativeTextarea || !theme) return;

    // Make textarea text transparent but keep it fully interactive
    nativeTextarea.style.color = 'transparent';
    nativeTextarea.style.caretColor = theme.colorSuccess;
    nativeTextarea.style.background = 'transparent';
  }, [nativeTextarea, theme]);

  // Sync scroll position between textarea and overlay
  useEffect(() => {
    if (ref.current && scroll) {
      ref.current.scrollTop = scroll.top || 0;
      ref.current.scrollLeft = scroll.left || 0;
    }
  }, [scroll?.top, scroll?.left]);

  // Determine priority based on prompt type
  const priority = useMemo(() => {
    if (parentId.includes('txt2img_prompt') && !parentId.includes('neg')) {
      return 'high' as const;
    }
    return 'normal' as const;
  }, [parentId]);

  // Get textarea computed style for perfect font matching
  const textareaStyle = useMemo(() => {
    if (!nativeTextarea) return {};

    const computedStyle = window.getComputedStyle(nativeTextarea);
    return {
      // Text rendering properties for consistency
      MozOsxFontSmoothing: (computedStyle as any).MozOsxFontSmoothing,
      WebkitFontSmoothing: (computedStyle as any).WebkitFontSmoothing,

      // Box model for perfect positioning
      border: 'none', // Remove border to prevent double borders
      borderRadius: computedStyle.borderRadius,
      boxSizing: computedStyle.boxSizing as any,

      // Font properties for perfect text matching
      fontFamily: computedStyle.fontFamily,
      fontSize: computedStyle.fontSize,
      fontStyle: computedStyle.fontStyle,
      fontWeight: computedStyle.fontWeight,
      letterSpacing: computedStyle.letterSpacing,
      lineHeight: computedStyle.lineHeight,

      // Text layout properties
      overflowWrap: computedStyle.overflowWrap as any,
      padding: computedStyle.padding,
      paddingBottom: computedStyle.paddingBottom,
      paddingLeft: computedStyle.paddingLeft,
      paddingRight: computedStyle.paddingRight,
      paddingTop: computedStyle.paddingTop,
      textAlign: computedStyle.textAlign as any,
      textIndent: computedStyle.textIndent,
      textRendering: computedStyle.textRendering as any,
      whiteSpace: computedStyle.whiteSpace as any,
      wordBreak: computedStyle.wordBreak as any,
      wordSpacing: computedStyle.wordSpacing,
    };
  }, [nativeTextarea, size]);

  return (
    <div
      className={styles.container}
      data-code-type="hybrid-highlighter"
      ref={ref}
      style={{
        height: size?.height || 0,
        left: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        userSelect: 'none',
        width: size?.width || 0,
        zIndex: 1,
        ...textareaStyle,
      }}
    >
      <SyntaxHighlighter maxLength={5000} parentId={parentId} priority={priority}>
        {prompt}
      </SyntaxHighlighter>
    </div>
  );
});

ReplacementHighlighter.displayName = 'ReplacementHighlighter';

export default ReplacementHighlighter;
