import { HighlighterCore, createHighlighterCore } from 'shiki/core';
import { createOnigurumaEngine } from 'shiki/engine/oniguruma';
import useSWR from 'swr';

import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';

let cacheHighlighter: HighlighterCore;

const initHighlighter = async (): Promise<HighlighterCore> => {
  let highlighter = cacheHighlighter;

  if (highlighter) return highlighter;

  // Create the engine first (async operation)
  const engine = createOnigurumaEngine(() => import('shiki/wasm'));

  highlighter = await createHighlighterCore({
    
    engine,
    // @ts-ignore
langs: [prompt], // Use engine instead of loadWasm
    themes: [
      themeConfig(true, false),
      themeConfig(false, false),
      themeConfig(true, true),
      themeConfig(false, true),
    ],
  });

  cacheHighlighter = highlighter;

  return highlighter;
};

export const useHighlight = (text: string, isDarkMode: boolean, isNegPrompt: boolean) =>
  useSWR([isDarkMode ? 'dark' : 'light', text].join('-'), async () => {
    try {
      const highlighter = await initHighlighter();
      const html = highlighter?.codeToHtml(text, {
        lang: 'prompt',
        theme: (isDarkMode ? 'dark' : 'light') + (isNegPrompt ? '-neg-prompt' : ''),
        transformers: [
          {
            code(node) {
              node.properties['id'] = 'lobe_highlighter';
            },
          },
        ],
      });
      return html;
    } catch {
      return text;
    }
  });
