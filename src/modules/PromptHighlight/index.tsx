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

  const handlePromptResize = useCallback(() => {
    if (nativeTextarea.clientHeight < nativeTextarea.scrollHeight) {
      return size?.width === undefined ? '' : size?.width + 6;
    } else {
      return size?.width === undefined ? '' : size?.width + 2;
    }
  }, [nativeTextarea.clientWidth]);

  // Determine priority based on prompt type and visibility
  const priority = useMemo(() => {
    // Main prompt inputs get high priority, negative prompts get normal priority
    if (parentId.includes('txt2img_prompt') && !parentId.includes('neg')) {
      return 'high' as const;
    }
    return 'normal' as const;
  }, [parentId]);

  useEffect(() => {
    ref.current.scroll(0, scroll?.top || 0);
  }, [scroll?.top]);

  useEffect(() => {
    nativeTextarea.addEventListener('change', handlePromptChange);
    return () => {
      nativeTextarea.removeEventListener('change', handlePromptChange);
    };
  }, []);

  useEffect(() => {
    if (theme) {
      nativeTextarea.style.color = 'transparent';
      nativeTextarea.style.caretColor = theme.colorSuccess;
    }
  }, [theme]);

  useEffect(() => {
    setPrompt(nativeTextareaValue);
  }, [nativeTextareaValue]);

  return (
    <div
      className={styles.container}
      data-code-type="highlighter"
      ref={ref}
      style={{
        boxSizing: 'border-box',
        direction: 'ltr',
        fontFamily: 'inherit',
        fontSize: 'inherit',
        height: size?.height,
        left: 0,
        lineHeight: 'inherit',
        pointerEvents: 'none', // Ensure the main container doesn't capture events
        position: 'absolute',
        right: 0,
        textAlign: 'left',
        top: 0,
        userSelect: 'none', // Prevent text selection on the overlay
        width: handlePromptResize(),
        zIndex: 1, // Keep it above the textarea but below other UI elements
      }}
    >
      <SyntaxHighlighter
        maxLength={5000} // Reasonable limit for prompt highlighting
        parentId={parentId}
        priority={priority}
      >
        {prompt}
      </SyntaxHighlighter>
    </div>
  );
});

export default Index;
