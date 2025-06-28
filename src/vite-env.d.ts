/// <reference types="vite/client" />

declare const __DEV__: boolean;

interface ImportMetaEnv {
  readonly VITE_APP_TITLE?: string;
  readonly SD_HOST?: string;
  readonly SD_PORT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Global functions from Stable Diffusion WebUI
declare global {
  function gradioApp(): HTMLElement;
  function get_uiCurrentTabContent(): HTMLElement;
  function updateInput(element: HTMLElement): void;
  function addAutocompleteToArea(element: HTMLElement): void;
}
