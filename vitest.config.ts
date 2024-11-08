/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
      },
      environment: 'jsdom',
      setupFiles: './tests/vitest.setup.ts',
      include: ['**/*.test.tsx'],
    },
  }),
);
