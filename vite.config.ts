import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { componentTagger } from 'lovable-tagger';

// Fix for the ImportMeta type issue
const __filename = fileURLToPath(import.meta.url as unknown as string);
const __dirname = dirname(__filename);

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      input: 'index.html'
    }
  },
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      'localhost',
      '212a55f3-63ad-4796-831a-8e50b9b231fd.lovableproject.com',
      '*.lovableproject.com'
    ]
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  }
}));
