import { colors as colorScales } from '@lobehub/ui/color';
import { ThemeAppearance } from 'antd-style';

export const themeConfig: any = (isDarkMode: ThemeAppearance, isNegPrompt: boolean) => {
  const type = (isDarkMode ? 'dark' : 'light');
  const name = type + (isNegPrompt ? '-neg-prompt' : '');

  const colorYellow = isDarkMode ? colorScales.yellow[type][9] : colorScales.gold[type][10];
  const colorOrange = isDarkMode ? colorScales.gold[type][9] : colorScales.orange[type][10];
  const colorVolcano = isDarkMode ? colorScales.volcano[type][10] : colorScales.volcano[type][8];
  const colorGreen = isDarkMode ? colorScales.lime[type][9] : colorScales.green[type][10];
  const colorBlue = isDarkMode ? colorScales.blue[type][9] : colorScales.geekblue[type][9];
  const colorPurple = isDarkMode ? colorScales.purple[type][11] : colorScales.purple[type][8];
  const colorGray = isDarkMode ? colorScales.gray[type][8] : colorScales.gray[type][9];
  return {
    colors: {
      'editor.foreground': isNegPrompt ? colorVolcano : colorGreen,
    },
    name: name,
    tokenColors: [
      {
        scope: 'comma',
        settings: {
          foreground: colorScales.gray[type][11],
        },
      },
      {
        scope: ['and', 'break'],
        settings: {
          foreground: colorBlue,
        },
      },
      {
        scope: 'bracket',
        settings: {
          foreground: colorPurple,
        },
      },
      {
        scope: 'model-type',
        settings: {
          fontStyle: 'italic',
          foreground: colorVolcano,
        },
      },
      {
        scope: 'model-name',
        settings: {
          foreground: colorOrange,
        },
      },
      {
        scope: 'model-bracket',
        settings: {
          foreground: colorPurple,
        },
      },
      {
        scope: 'number',
        settings: {
          foreground: colorPurple,
        },
      },
      {
        scope: 'func',
        settings: {
          foreground: colorPurple,
        },
      },
      {
        scope: 'wildcards',
        settings: {
          foreground: colorYellow,
        },
      },
      {
        scope: 'comment',
        settings: {
          foreground: colorGray,
        }
      },
    ],
    type,
  };
};
