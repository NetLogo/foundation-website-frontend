/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_BACKEND_URL: string;
  readonly PUBLIC_TESTING_DONATIONS: boolean;
}
