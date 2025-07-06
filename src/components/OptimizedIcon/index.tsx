/**
 * OptimizedIcon Component
 * Lightweight SVG-based icon system to replace lucide-react
 * Only includes the icons actually used in the codebase
 */

import { type FC, forwardRef, memo, type RefAttributes, type SVGProps } from 'react';

// =============================================================================
// ICON DEFINITIONS - Only the icons we actually use
// =============================================================================

const iconPaths = {
  'alert-triangle': 'M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01',
  'brush': 'M9.06 11.9c.18-.19.45-.3.74-.3h4.4c.29 0 .56.11.74.3l2.36 2.36a1 1 0 010 1.42l-2.36 2.36c-.18.18-.45.3-.74.3H9.8c-.29 0-.56-.12-.74-.3L6.7 15.68a1 1 0 010-1.42L9.06 11.9zM12 5L8 9l4 4 4-4-4-4z',
  'bug': 'M8 2v4M16 2v4M8 14v.01M16 14v.01M12 6v.01M8 10v.01M16 10v.01M12 14v.01M20 8a8 8 0 11-16 0 8 8 0 0116 0z',
  'chevron-down': 'M6 9l6 6 6-6',
  'chevron-right': 'M9 18l6-6-6-6',
  'file-clock': 'M16 22h2a2 2 0 002-2V7.5L14.5 2H6a2 2 0 00-2 2v3M14 2v6h6M10 15.5a2.5 2.5 0 105 0 2.5 2.5 0 00-5 0zM12.5 13v2.5L14 17',
  'flask-conical': 'M10 2v7.31l-3.39 6.78a1 1 0 00.9 1.41h9.98a1 1 0 00.9-1.41L14 9.31V2M8 2h8',
  'git-fork': 'M6 3v12M18 9a3 3 0 100-6 3 3 0 000 6zM6 21a3 3 0 100-6 3 3 0 000 6zM18 15v6M6 9a9 9 0 009 9',
  'github': 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22',
  'heart': 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  'layout': 'M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z',
  'layout-grid': 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z',
  'loader-2': 'M21 12a9 9 0 11-6.219-8.56',
  'moon': 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
  'palette': 'M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-.56 2.5-1.25 0-.34-.13-.65-.35-.88-.22-.23-.35-.54-.35-.87 0-.69.56-1.25 1.25-1.25H16c3.31 0 6-2.69 6-6 0-5.51-4.49-10-10-10zM7.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 5.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
  'panel-left-close': 'M9 6l6 6-6 6M3 3h18v18H3z',
  'panel-right': 'M2 3h20v18H2zM15 8v8',
  'panel-right-close': 'M15 18l-6-6 6-6M3 3h18v18H3z',
  'refresh-cw': 'M3 12a9 9 0 019-9 9.75 9.75 0 016.74 2.74L21 8M3 16l2.26-2.26A9.75 9.75 0 0012 21a9 9 0 919-9',
  'settings': 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.39a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
  'sun': 'M12 1v2M12 21v2m9-9h2M1 12h2m15.36-6.36l1.42-1.42M6.64 6.64L5.22 5.22m12.72 12.72l1.42 1.42M6.64 17.36l-1.42 1.42M16 12a4 4 0 11-8 0 4 4 0 018 0z',
  'text-cursor-input': 'M5 4h1a3 3 0 013 3 3 3 0 013-3h1M13 20h-1a3 3 0 01-3-3 3 3 0 01-3 3H5M5 16H4a2 2 0 01-2-2v-4a2 2 0 012-2h1M13 4h7v16h-7M9 7v10',
  'zoom-in': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 11h-4m0 0V7m0 4v4',
  'zoom-out': 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM15 11H9',
} as const;

// =============================================================================
// ICON COMPONENT
// =============================================================================

export type IconName = keyof typeof iconPaths;

// Create a type that exactly matches lucide-react's LucideProps
type SVGAttributes = Partial<SVGProps<SVGSVGElement>>;
type ElementAttributes = RefAttributes<SVGSVGElement> & SVGAttributes;

interface LucideCompatibleProps extends ElementAttributes {
  absoluteStrokeWidth?: boolean;
  size?: string | number;
}

export interface OptimizedIconProps extends LucideCompatibleProps {
  /** Icon name from the predefined set */
  name: IconName;
  /** Whether the icon should spin (for loading states) */
  spin?: boolean;
}

/**
 * Optimized Icon Component
 * Lightweight replacement for lucide-react icons
 */
export const OptimizedIcon: FC<OptimizedIconProps> = memo(({
  name,
  size = 24,
  className,
  style,
  spin = false,
  stroke = 'currentColor',
  strokeWidth = 2,
  onClick,
  absoluteStrokeWidth,
  ...rest
}) => {
  const path = iconPaths[name];

  if (!path) {
    console.warn(`OptimizedIcon: Icon "${name}" not found`);
    return null;
  }

  // Convert size to number if it's a string
  const numericSize = typeof size === 'string' ? parseInt(size, 10) || 24 : size;
  const numericStrokeWidth = typeof strokeWidth === 'string' ? parseFloat(strokeWidth) || 2 : strokeWidth;

  const spinStyle = spin ? {
    animation: 'spin 1s linear infinite',
  } : {};

  return (
    <>
      {spin && (
        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      )}
      <svg
        className={className}
        fill="none"
        height={numericSize}
        onClick={onClick}
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={absoluteStrokeWidth ? numericStrokeWidth : numericStrokeWidth}
        style={{ ...style, ...spinStyle }}
        viewBox="0 0 24 24"
        width={numericSize}
        {...rest}
      >
        <path d={path} />
      </svg>
    </>
  );
});

OptimizedIcon.displayName = 'OptimizedIcon';

// =============================================================================
// PRE-CONFIGURED COMPONENTS
// =============================================================================

export const LoadingIcon: FC<Omit<OptimizedIconProps, 'name'>> = memo((props) => (
  <OptimizedIcon name="loader-2" spin {...props} />
));

export const GitHubIcon: FC<Omit<OptimizedIconProps, 'name'>> = memo((props) => (
  <OptimizedIcon name="github" {...props} />
));

export const HeartIcon: FC<Omit<OptimizedIconProps, 'name'>> = memo((props) => (
  <OptimizedIcon name="heart" {...props} />
));

export const SettingsIcon: FC<Omit<OptimizedIconProps, 'name'>> = memo((props) => (
  <OptimizedIcon name="settings" {...props} />
));

LoadingIcon.displayName = 'LoadingIcon';
GitHubIcon.displayName = 'GitHubIcon';
HeartIcon.displayName = 'HeartIcon';
SettingsIcon.displayName = 'SettingsIcon';

// =============================================================================
// LUCIDE-REACT COMPATIBLE COMPONENTS
// =============================================================================

/**
 * Creates a lucide-react compatible component from an OptimizedIcon
 * This ensures compatibility with @lobehub/ui components that expect lucide-react icons
 */
const createIconComponent = (iconName: IconName) => {
  const IconComponent = forwardRef<SVGSVGElement, Omit<OptimizedIconProps, 'name'>>((props) => (
    <OptimizedIcon name={iconName} {...props} />
  ));

  // Add the $$typeof symbol to make it compatible with React's type checking
  (IconComponent as any).$$typeof = Symbol.for('react.forward_ref');

  return IconComponent;
};

// Export lucide-react compatible components
export const AlertTriangle = createIconComponent('alert-triangle');
export const Brush = createIconComponent('brush');
export const Bug = createIconComponent('bug');
export const ChevronDown = createIconComponent('chevron-down');
export const ChevronRight = createIconComponent('chevron-right');
export const FileClock = createIconComponent('file-clock');
export const FlaskConical = createIconComponent('flask-conical');
export const GitFork = createIconComponent('git-fork');
export const Github = createIconComponent('github');
export const Heart = createIconComponent('heart');
export const Layout = createIconComponent('layout');
export const LayoutGrid = createIconComponent('layout-grid');
export const Loader2 = createIconComponent('loader-2');
export const Moon = createIconComponent('moon');
export const Palette = createIconComponent('palette');
export const PanelLeftClose = createIconComponent('panel-left-close');
export const PanelRight = createIconComponent('panel-right');
export const PanelRightClose = createIconComponent('panel-right-close');
export const RefreshCw = createIconComponent('refresh-cw');
export const Settings = createIconComponent('settings');
export const Sun = createIconComponent('sun');
export const TextCursorInput = createIconComponent('text-cursor-input');
export const ZoomIn = createIconComponent('zoom-in');
export const ZoomOut = createIconComponent('zoom-out');