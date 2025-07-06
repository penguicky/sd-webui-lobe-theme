/**
 * Optimized Shiki Implementation
 * Custom lightweight implementation that avoids WebAssembly loading
 * for better bundle size optimization
 */

import { debugLog, debugWarn } from '@/modules/PromptHighlight/utils/debug';
import prompt from '@/modules/PromptHighlight/features/grammar';
import { themeConfig } from '@/modules/PromptHighlight/features/promptTheme';

// Lightweight token interface
interface Token {
  content: string;
  scopes: string[];
}

interface TokenizedLine {
  tokens: Token[];
}

// Lightweight highlighter that doesn't use WebAssembly
class OptimizedShikiHighlighter {
  private themes: Record<string, any> = {};
  private grammar: any;

  constructor() {
    // Initialize themes
    this.themes = {
      dark: themeConfig(true, false),
      darkNeg: themeConfig(true, true),
      light: themeConfig(false, false),
      lightNeg: themeConfig(false, true),
    };

    // Use static grammar
    this.grammar = prompt[0];
  }

  /**
   * Lightweight tokenization using regex patterns instead of WebAssembly
   */
  private tokenizeLine(text: string): TokenizedLine {
    const tokens: Token[] = [];
    let remaining = text;
    let position = 0;

    while (remaining.length > 0 && position < text.length) {
      let matched = false;

      // Try each pattern from the grammar
      for (const pattern of this.grammar.patterns || []) {
        const regex = new RegExp(pattern.match, 'g');
        regex.lastIndex = 0;
        const match = regex.exec(remaining);

        if (match && match.index === 0) {
          // Found a match at the beginning
          const matchedText = match[0];

          // Handle patterns with captures more accurately
          if (pattern.captures && match.length > 1) {
            // For embedding patterns like '<(embedding:[^>]+)>'
            if (matchedText.includes('embedding:')) {
              // Split into bracket and content parts
              const bracketStart = '<';
              const content = match[1] || ''; // The captured group (with fallback)
              const bracketEnd = '>';

              // Add bracket token
              tokens.push({
                content: bracketStart,
                scopes: ['embedding-bracket'],
              }, {
                content: content,
                scopes: ['embedding-unknown'],
              }, {
                content: bracketEnd,
                scopes: ['embedding-bracket'],
              });
            }
            // For model patterns like '<([^:]+):([^:]+):([^>]+)>'
            else if (matchedText.includes(':') && matchedText.startsWith('<') && matchedText.endsWith('>')) {
              // For now, treat the whole thing as model-name (could be enhanced later)
              tokens.push({
                content: matchedText,
                scopes: ['model-name'],
              });
            }
            else {
              // Fallback for other capture patterns
              tokens.push({
                content: matchedText,
                scopes: [pattern.name || 'text'],
              });
            }
          } else {
            // Simple pattern without captures
            tokens.push({
              content: matchedText,
              scopes: [pattern.name || 'text'],
            });
          }

          remaining = remaining.slice(matchedText.length);
          position += matchedText.length;
          matched = true;
          break;
        }
      }

      if (!matched) {
        // No pattern matched, take one character as plain text
        const char = remaining[0];
        if (char) {
          tokens.push({
            content: char,
            scopes: ['text'],
          });
          remaining = remaining.slice(1);
          position += 1;
        } else {
          // Safety break if no character available
          break;
        }
      }
    }

    return { tokens };
  }

  /**
   * Convert tokens to HTML with theme colors
   */
  private tokensToHtml(tokens: Token[], themeName: string): string {
    const theme = this.themes[themeName];
    if (!theme) {
      debugWarn('Theme not found:', themeName);
      return tokens.map(t => t.content).join('');
    }

    let html = '';
    
    for (const token of tokens) {
      const scope = token.scopes[0] || 'text';
      
      // Find matching token color from theme
      let color = theme.colors?.['editor.foreground'] || '#000000';
      
      for (const tokenColor of theme.tokenColors || []) {
        if (tokenColor.scope === scope || 
            (Array.isArray(tokenColor.scope) && tokenColor.scope.includes(scope))) {
          color = tokenColor.settings?.foreground || color;
          break;
        }
      }

      // Apply styling
      const style = `color: ${color};`;
      html += `<span style="${style}">${this.escapeHtml(token.content)}</span>`;
    }

    return html;
  }

  /**
   * Escape HTML characters
   */
  private escapeHtml(text: string): string {
    return text
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll('\'', '&#39;');
  }

  /**
   * Main highlighting method
   */
  highlight(text: string, isDarkMode: boolean, isNegPrompt: boolean): string {
    try {
      const themeName = this.getThemeKey(isDarkMode, isNegPrompt);
      
      // Split text into lines
      const lines = text.split('\n');
      const htmlLines: string[] = [];

      for (const line of lines) {
        const tokenizedLine = this.tokenizeLine(line);
        const htmlLine = this.tokensToHtml(tokenizedLine.tokens, themeName);
        htmlLines.push(htmlLine);
      }

      // Join lines with proper line breaks
      return htmlLines.join('<br>');
    } catch (error) {
      debugWarn('Optimized highlighting failed:', error);
      // Fallback to plain text
      return this.escapeHtml(text);
    }
  }

  private getThemeKey(isDarkMode: boolean, isNegPrompt: boolean): string {
    if (isDarkMode && isNegPrompt) return 'darkNeg';
    if (isDarkMode && !isNegPrompt) return 'dark';
    if (!isDarkMode && isNegPrompt) return 'lightNeg';
    return 'light';
  }
}

// Export singleton instance
export const optimizedShikiHighlighter = new OptimizedShikiHighlighter();

/**
 * Optimized highlighting function that doesn't use WebAssembly
 */
export async function highlightWithOptimizedShiki(
  text: string,
  isDarkMode: boolean,
  isNegPrompt: boolean
): Promise<string> {
  try {
    debugLog('🚀 Using optimized Shiki highlighting (no WebAssembly)');
    return optimizedShikiHighlighter.highlight(text, isDarkMode, isNegPrompt);
  } catch (error) {
    debugWarn('Optimized Shiki highlighting failed:', error);
    // Ultimate fallback
    return text.replaceAll('&', '&amp;')
              .replaceAll('<', '&lt;')
              .replaceAll('>', '&gt;');
  }
}
