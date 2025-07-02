import { Icon } from '@lobehub/ui';
import { useThemeMode } from 'antd-style';
import { Loader2 } from 'lucide-react';
import { PropsWithChildren, memo, useEffect, useState } from 'react';
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
    const textContent = children as string;
    const isNegPrompt = parentId.endsWith('_neg_prompt');
    const [forceShowText, setForceShowText] = useState(false);

    // Always try to highlight, no intersection observer for now
    const {
      data: codeToHtml,
      isLoading,
      error,
    } = useHighlight(textContent, isDarkMode, isNegPrompt);

    // Fallback: if loading for too long, show plain text
    // Use priority to determine timeout duration
    useEffect(() => {
      if (isLoading) {
        const timeoutDuration = priority === 'high' ? 2000 : priority === 'low' ? 5000 : 3000;

        const timeout = setTimeout(() => {
          console.warn(
            `⏰ SyntaxHighlighter: Forcing fallback to plain text after ${timeoutDuration}ms (priority: ${priority})`,
          );
          setForceShowText(true);
        }, timeoutDuration);

        return () => clearTimeout(timeout);
      } else {
        setForceShowText(false);
      }
    }, [isLoading, priority]);

    console.log('🎨 SyntaxHighlighter render:', {
      error: !!error,
      forceShowText,
      hasHighlightedContent: !!codeToHtml,
      isLoading,
      parentId: parentId.slice(-20),
      priority,
      textLength: textContent.length,
    });

    // Fallback for very long content
    if (textContent.length > maxLength) {
      return (
        <div className={styles.shiki}>
          <code title="Content too long for syntax highlighting">
            {textContent.slice(0, 200)}...
          </code>
        </div>
      );
    }

    // Show plain text if: loading too long, has error, or forced fallback
    if (forceShowText || error || (isLoading && !codeToHtml)) {
      return (
        <div className={styles.shiki}>
          <code style={{ opacity: forceShowText ? 0.8 : 1 }}>{textContent}</code>
        </div>
      );
    }

    // Show highlighted content or plain text while loading
    return (
      <div>
        {isLoading && !codeToHtml ? (
          <code>{textContent}</code>
        ) : (
          <div
            className={styles.shiki}
            dangerouslySetInnerHTML={{
              __html: codeToHtml as any,
            }}
            style={{ pointerEvents: 'none' }}
          />
        )}

        {isLoading && !forceShowText && priority === 'high' && (
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
