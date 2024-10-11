/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly PORT: string; // Define your expected environment variables here
  // You can add more environment variables that your project uses.
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
