/// <reference types="vite/client" />
/// <reference types="vitest" />

interface ImportMetaEnv {
  readonly VITE_WEB3FORMS_ACCESS_KEY: string;
  // Add additional VITE_ env vars here as you introduce them.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}