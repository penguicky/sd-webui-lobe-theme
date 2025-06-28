import { useResponsive } from 'antd-style';
import { memo, useCallback, useMemo, useRef } from 'react';
import { shallow } from 'zustand/shallow';

import { useInject } from '@/hooks/useInject';
import { useAppStore } from '@/store';
import { type DivProps } from '@/types';

import SplitView from './SplitView';
import { removePromptScrollHide } from './removePromptScrollHide';
import { useStyles } from './style';

// Memoized selector to prevent unnecessary re-renders
const selectOptimizedSettings = (state: any) => ({
  layoutSplitPreview: state.setting.layoutSplitPreview,
  promptTextareaType: state.setting.promptTextareaType,
});

const Content = memo<DivProps>(({ className, ...props }) => {
  const mainReference = useRef<HTMLDivElement>(null);
  const { mobile } = useResponsive();

  // Use shallow comparison and specific selector
  const { promptTextareaType, layoutSplitPreview } = useAppStore(selectOptimizedSettings, shallow);

  // Memoize style configuration
  const styleConfig = useMemo(
    () => ({
      isPromptResizable: promptTextareaType === 'resizable',
      layoutSplitPreview,
    }),
    [promptTextareaType, layoutSplitPreview],
  );

  const { cx, styles } = useStyles(styleConfig);

  // Memoize the inject success callback
  const handleInjectSuccess = useCallback(() => {
    removePromptScrollHide();
  }, []);

  useInject(mainReference, '.app', {
    debug: '[layout] inject - Content',
    onSuccess: handleInjectSuccess,
  });

  // Memoize className computation
  const computedClassName = useMemo(
    () =>
      cx(
        styles.container,
        styles.textares,
        styles.txt2img,
        layoutSplitPreview && styles.splitView,
        className,
      ),
    [cx, styles, layoutSplitPreview, className],
  );

  return (
    <>
      <div className={computedClassName} ref={mainReference} {...props} />

      {layoutSplitPreview && !mobile && <SplitView />}
    </>
  );
});

Content.displayName = 'Content';

export default Content;
