import { defineConfig } from 'vitest/config';
import * as path from 'path';

export default defineConfig({
  test: {
    environment: 'node',
    globals: true,
    globalSetup: ['./tests/globalSetup.ts'], // Load .env.test BEFORE any imports
    setupFiles: ['./tests/setup.ts'],
    include: ['tests/**/*.test.ts'],
    exclude: ['node_modules', 'dist'],
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      // Add other aliases if you have them
    },
  },
});