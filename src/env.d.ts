/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  // readonly <ENV_NAME>: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
