import { type HTMLAttributes } from 'react';

import translation from '@/../locales/en_US.json';
import i18nOptions from '@/../locales/options.json';

export type I18n = (typeof i18nOptions)[number]['value'];

export const resources = {
  translation,
} as const;

type TranslationKeys = keyof typeof translation;

export type Translation = {
  [key in TranslationKeys]: string;
};

// Enhanced HTML element props with better type safety
export type DivProps = HTMLAttributes<HTMLDivElement>;
export type SvgProps = HTMLAttributes<SVGSVGElement>;
export type ImgProps = HTMLAttributes<HTMLImageElement>;
export type InputProps = HTMLAttributes<HTMLInputElement>;
export type TextAreaProps = HTMLAttributes<HTMLTextAreaElement>;

// Enhanced event types for better type safety
export interface BeforeUnloadEvent extends Omit<Event, 'returnValue'> {
  returnValue?: string;
}

// Enhanced DOM types
export type SafeHTMLElement = HTMLElement | null;
export type SafeElement = Element | null;

// Enhanced function types
export type SafeEventHandler<T = Event> = (event: T) => void | undefined;
export type SafeCallback = () => void | undefined;
export type SafeAsyncCallback = () => Promise<void> | void;

// Enhanced utility types
export type NonNullable<T> = T extends null | undefined ? never : T;
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Enhanced array and object types
export type SafeArray<T> = readonly T[];
export type SafeRecord<K extends string | number | symbol, V> = Readonly<Record<K, V>>;

// Enhanced component prop types
export type ComponentWithChildren<T = Record<string, never>> = T & {
  children?: React.ReactNode;
};

export type ComponentWithOptionalChildren<T = Record<string, never>> = T & {
  children?: React.ReactNode | undefined;
};
