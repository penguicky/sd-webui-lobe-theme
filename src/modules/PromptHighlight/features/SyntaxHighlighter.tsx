import { Icon } from '@lobehub/ui';
import { useThemeMode } from 'antd-style';
import { Loader2 } from 'lucide-react';
import { PropsWithChildren, memo, useEffect, useMemo, useRef, useState } from 'react';
import { Center } from 'react-layout-kit';

import { useHighlight } from '@/hooks/useHighlight';

import { useStyles } from '../style';

interface PropsWithChildrenParentId extends PropsWithChildren {
  maxLength?: number;
  parentId: string;
  priority?: 'high' | 'normal' | 'low';
}

// Simple intersection observer hook
const useIntersectionObserver = (
  ref: React.RefObject<Element>,
  options?: IntersectionObserverInit,
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof IntersectionObserver === 'undefined') {
      setIsIntersecting(true); // Fallback to always true
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
};

const SyntaxHighlighter = memo<PropsWithChildrenParentId>(
  ({ parentId, children, priority = 'normal', maxLength = 10_000 }) => {
    const { styles } = useStyles();
    const { isDarkMode } = useThemeMode();
    const containerRef = useRef<HTMLDivElement>(null);

    // Use intersection observer for lazy highlighting
    const isInView = useIntersectionObserver(containerRef, {
      rootMargin: '100px',
      threshold: 0.1,
    });

    // Memoize expensive computations
    const { isNegPrompt, textContent, shouldHighlight } = useMemo(() => {
      const text = children as string;
      const isNeg = parentId.endsWith('_neg_prompt');
      const shouldHL =
        text.length > 0 && text.length <= maxLength && (priority === 'high' || isInView);

      return {
        isNegPrompt: isNeg,
        shouldHighlight: shouldHL,
        textContent: text,
      };
    }, [children, parentId, maxLength, priority, isInView]);

    // Only highlight when necessary
    const { data: codeToHtml, isLoading } = useHighlight(
      shouldHighlight ? textContent : '',
      isDarkMode,
      isNegPrompt,
    );

    // Fallback for very long content
    if (textContent.length > maxLength) {
      return (
        <div className={styles.shiki} ref={containerRef}>
          <code title="Content too long for syntax highlighting">
            {textContent.slice(0, 200)}...
          </code>
        </div>
      );
    }

    // Render plain text while not in view (unless high priority)
    if (!shouldHighlight) {
      return (
        <div ref={containerRef}>
          <code>{textContent}</code>
        </div>
      );
    }

    return (
      <div ref={containerRef}>
        {isLoading ? (
          <code>{textContent}</code>
        ) : (
          <div
            className={styles.shiki}
            dangerouslySetInnerHTML={{
              __html: codeToHtml as any,
            }}
          />
        )}

        {isLoading && priority === 'high' && (
          <Center className={styles.loading} gap={8} horizontal>
            <Icon icon={Loader2} spin />
            Highlighting...
          </Center>
        )}
      </div>
    );
  },
);

SyntaxHighlighter.displayName = 'SyntaxHighlighter';

export default SyntaxHighlighter;
