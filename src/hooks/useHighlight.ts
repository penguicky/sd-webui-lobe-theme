import { HighlighterCore, getHighlighterCore } from 'shiki/core';
import getWasmInlined from 'shiki/wasm';
import useSWR from 'swr';

import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';

let cacheHighlighter: HighlighterCore;

const initHighlighter = async(): Promise<HighlighterCore> => {
  let highlighter = cacheHighlighter;

  if (highlighter) return highlighter;

  highlighter = await getHighlighterCore({
    // @ts-ignore
    langs: [prompt],
    loadWasm: getWasmInlined,
    themes: [themeConfig(true, false), themeConfig(false, false), themeConfig(true, true), themeConfig(false, true)],
  });

  cacheHighlighter = highlighter;

  return highlighter;
};

export const useHighlight = (text: string, isDarkMode: boolean, isNegPrompt: boolean) =>
  useSWR([isDarkMode ? 'dark' : 'light', text].join('-'), async() => {
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
