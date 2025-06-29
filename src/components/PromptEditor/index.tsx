import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';
import { shallow } from 'zustand/shallow';

import PromptPicker from '@/components/PromptEditor/PromptPicker';
import replaceIcon from '@/scripts/replaceIcon';
import { useAppStore } from '@/store';

import Prompt from './Prompt';

// Specific selector for PromptEditor
const selectPromptEditorSettings = (state: any) => ({
  promptEditor: state.setting.promptEditor,
  svgIcon: state.setting.svgIcon,
});

const PromptEditor = memo(() => {
  const { promptEditor, svgIcon } = useAppStore(selectPromptEditorSettings, shallow);
  const { t } = useTranslation();

  // Memoize the icon replacement effect
  const handleIconReplacement = useCallback(() => {
    if (svgIcon) {
      replaceIcon();
    }
  }, [svgIcon]);

  useEffect(() => {
    handleIconReplacement();
  }, [handleIconReplacement]);

  // Early return if prompt editor is disabled
  if (!promptEditor) {
    return <PromptPicker />;
  }

  return (
    <Flexbox gap={16}>
      <span style={{ marginBottom: -10 }}>{t('prompt.positive')}</span>
      <Prompt type="positive" />
      <span style={{ marginBottom: -10 }}>{t('prompt.negative')}</span>
      <Prompt type="negative" />
      <PromptPicker />
    </Flexbox>
  );
});

PromptEditor.displayName = 'PromptEditor';

export default PromptEditor;
