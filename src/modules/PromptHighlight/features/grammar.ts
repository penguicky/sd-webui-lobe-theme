// Shiki v3 compatible grammar definition
export const lang = {
  $schema: 'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
  fileTypes: ['prompt'],
  name: 'prompt',
  patterns: [
    {
      match: '[,]',
      name: 'comma',
    },
    {
      match: 'AND',
      name: 'and',
    },
    {
      match: 'BREAK',
      name: 'break',
    },
    {
      captures: {
        0: {
          name: 'model-bracket',
        },
        1: {
          name: 'model-type',
        },
        2: {
          name: 'model-name',
        },
        3: {
          name: 'number',
        },
      },
      match: '<([^:]+):([^:]+):([^>]+)>',
    },
    {
      captures: {
        0: {
          name: 'embedding-bracket',
        },
        1: {
          name: 'embedding-name',
        },
      },
      match: '<(embedding:[^>]+)>',
    },
    {
      match: '[<|>]',
      name: 'model-bracket',
    },
    {
      match: '[(|)|\\[|\\]|{|}\\\\]',
      name: 'bracket',
    },
    {
      match: ':\\d*\\.?\\d+|:\\.\\d+',
      name: 'number',
    },
    {
      match: '[:|]',
      name: 'func',
    },
    {
      match: '__.*__',
      name: 'wildcards',
    },
    {
      match: '#.*',
      name: 'comment',
    },
  ],
  // Required by Shiki v3 - can be empty object if no repository patterns needed
  repository: {},
  scopeName: 'source.prompt',
};

// Export in the format expected by your current code
const prompt = [lang];
export default prompt;
