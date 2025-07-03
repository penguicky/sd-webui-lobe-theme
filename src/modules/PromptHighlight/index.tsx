import { memo } from 'react';

import ReplacementHighlighter from './ReplacementHighlighter';

interface AppProps {
  parentId: string;
}

/**
 * Main PromptHighlight component - now uses ReplacementHighlighter
 * for perfect text alignment without overlay positioning issues
 */
const Index = memo<AppProps>(({ parentId }) => {
  return <ReplacementHighlighter parentId={parentId} />;
});

Index.displayName = 'PromptHighlightIndex';

export default Index;
