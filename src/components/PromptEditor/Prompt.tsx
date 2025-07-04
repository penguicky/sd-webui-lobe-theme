import { consola } from 'consola';
import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { withGracefulDegradation } from '@/utils/errorHandling';
import { safeGetUiCurrentTabContent } from '@/utils/safeDom';

import TagList, { PromptType, TagItem } from './TagList';
import { useStyles } from './style';
import { formatPrompt } from './utils';

interface PromptProps {
  type: PromptType;
}

const Prompt = memo<PromptProps>(({ type }) => {
  const [tags, setTags] = useState<TagItem[]>([]);
  const { styles } = useStyles();
  const { t } = useTranslation();

  const id =
    type === 'positive' ? "[id$='2img_prompt'] textarea" : "[id$='2img_neg_prompt'] textarea";

  const getValue = useCallback(() => {
    withGracefulDegradation(
      () => {
        const currentTabContent = safeGetUiCurrentTabContent();
        if (!currentTabContent) {
          throw new Error('Current tab content not found');
        }

        const textarea = currentTabContent.querySelector(id) as HTMLTextAreaElement;
        if (!textarea) {
          throw new Error(`Textarea not found for selector: ${id}`);
        }

        setTags(formatPrompt(textarea.value));
      },
      () => {
        consola.warn('🤯 [prompt] getValue fallback - unable to get textarea value');
        setTags([]);
      },
      {
        onError: (error) => consola.error('🤯 [prompt] getValue error:', error.message),
      },
    );
  }, [id]);

  const setValue = useCallback(() => {
    withGracefulDegradation(
      () => {
        const newValue = tags.map((t) => t.text).join(', ');
        const currentTabContent = safeGetUiCurrentTabContent();
        if (!currentTabContent) {
          throw new Error('Current tab content not found');
        }

        const textarea = currentTabContent.querySelector(id) as HTMLTextAreaElement;
        if (!textarea) {
          throw new Error(`Textarea not found for selector: ${id}`);
        }

        textarea.value = newValue;
        updateInput(textarea);
      },
      () => {
        consola.warn('🤯 [prompt] setValue fallback - unable to set textarea value');
      },
      {
        onError: (error) => consola.error('🤯 [prompt] setValue error:', error.message),
      },
    );
  }, [tags, id]);

  const setCurrentValue = useCallback(
    (currentTags: TagItem[]) => {
      withGracefulDegradation(
        () => {
          const currentTabContent = safeGetUiCurrentTabContent();
          if (!currentTabContent) {
            throw new Error('Current tab content not found');
          }

          const textarea = currentTabContent.querySelector(id) as HTMLTextAreaElement;
          if (!textarea) {
            throw new Error(`Textarea not found for selector: ${id}`);
          }

          textarea.value = currentTags.map((t) => t.text).join(', ');
          updateInput(textarea);
        },
        () => {
          consola.warn('🤯 [prompt] setCurrentValue fallback - unable to set textarea value');
        },
        {
          onError: (error) => consola.error('🤯 [prompt] setCurrentValue error:', error.message),
        },
      );
    },
    [id],
  );

  return (
    <div className={styles.promptView}>
      <TagList setTags={setTags} setValue={setCurrentValue} tags={tags} type={type} />
      <Flexbox gap={8} horizontal>
        <button
          className="secondary gradio-button"
          onClick={getValue}
          style={{ flex: 1, height: 36 }}
          title={t('prompt.load')}
          type="button"
        >
          🔄
        </button>
        <button
          className="secondary gradio-button"
          onClick={setValue}
          style={{ flex: 1, height: 36 }}
          title={t('prompt.set')}
          type="button"
        >
          ➡️
        </button>
      </Flexbox>
    </div>
  );
});

export default Prompt;
