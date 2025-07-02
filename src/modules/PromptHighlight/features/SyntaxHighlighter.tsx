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

const SyntaxHighlighter = memo<PropsWithChildrenParentId>(
  ({ parentId, children, priority = 'normal', maxLength = 10_000 }) => {
    const { styles } = useStyles();
    const { isDarkMode } = useThemeMode();
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasTimedOut, setHasTimedOut] = useState(false);
    const [isVisible, setIsVisible] = useState(priority === 'high'); // High priority always visible

    const { isNegPrompt, textContent } = useMemo(() => {
      const text = children as string;
      const isNeg = parentId.endsWith('_neg_prompt');
      return {
        isNegPrompt: isNeg,
        textContent: text,
      };
    }, [children, parentId]);

    // Intersection Observer for performance optimization (except high priority)
    useEffect(() => {
      if (priority === 'high' || !containerRef.current) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {
          rootMargin: '50px', // Start highlighting slightly before entering view
          threshold: 0.1,
        },
      );

      observer.observe(containerRef.current);
      return () => observer.disconnect();
    }, [priority]);

    // Only highlight when visible and content is reasonable size
    const shouldHighlight = textContent.length > 0 && textContent.length <= maxLength && isVisible;

    const {
      data: codeToHtml,
      isLoading,
      error,
    } = useHighlight(shouldHighlight ? textContent : '', isDarkMode, isNegPrompt);

    // Timeout mechanism - but allow recovery when highlighting completes
    useEffect(() => {
      if (!isLoading || !shouldHighlight) {
        setHasTimedOut(false); // Reset timeout when not loading
        return;
      }

      const timeoutDuration = priority === 'high' ? 3000 : priority === 'low' ? 8000 : 5000;

      const timeout = setTimeout(() => {
        console.warn(
          `⏰ SyntaxHighlighter timeout after ${timeoutDuration}ms (priority: ${priority}, parentId: ${parentId.slice(-20)})`,
        );
        setHasTimedOut(true);
      }, timeoutDuration);

      return () => clearTimeout(timeout);
    }, [isLoading, priority, shouldHighlight, parentId]);

    // Enhanced debug logging
    console.log('🎨 SyntaxHighlighter render:', {
      error: !!error,
      hasHighlightedContent: !!codeToHtml,
      hasTimedOut,
      isLoading,
      isVisible,
      parentId: parentId.slice(-20),
      priority,
      shouldHighlight,
      textLength: textContent.length,
    });

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

    // If not visible or shouldn't highlight, show plain text
    if (!shouldHighlight) {
      return (
        <div ref={containerRef}>
          <code>{textContent}</code>
        </div>
      );
    }

    // Error state - show plain text
    if (error) {
      console.error('SyntaxHighlighter error:', error);
      return (
        <div className={styles.shiki} ref={containerRef}>
          <code style={{ opacity: 0.8 }}>{textContent}</code>
        </div>
      );
    }

    // Key fix: Show highlighted content if available, even if timed out
    const hasHighlightedContent = !!codeToHtml;
    const showHighlighted = hasHighlightedContent && !error;
    const showFallback = hasTimedOut && !hasHighlightedContent;
    const showLoading = isLoading && !hasHighlightedContent && !hasTimedOut;

    return (
      <div ref={containerRef}>
        {showHighlighted ? (
          // Show highlighted content
          <div
            className={styles.shiki}
            dangerouslySetInnerHTML={{
              __html: codeToHtml as string,
            }}
            style={{
              MozUserSelect: 'none',
              WebkitUserSelect: 'none',
              msUserSelect: 'none',
              pointerEvents: 'none',
              userSelect: 'none',
            }}
          />
        ) : (
          // Show plain text while loading or as fallback
          <div className={styles.shiki}>
            <code
              style={{
                opacity: showFallback ? 0.8 : 1,
                pointerEvents: 'none',
              }}
            >
              {textContent}
            </code>
          </div>
        )}

        {/* Loading indicator only for high priority items */}
        {showLoading && priority === 'high' && (
          <Center className={styles.loading} gap={8} horizontal style={{ pointerEvents: 'none' }}>
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
