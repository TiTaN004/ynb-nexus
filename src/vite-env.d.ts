/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
  readonly VITE_SECRET_KEY: string;
  readonly NEXT_PUBLIC_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}