
/// <reference types="vite/client" />

// Add augmentation for import.meta
interface ImportMeta {
  readonly env: Record<string, string>;
  readonly url: string;
}
