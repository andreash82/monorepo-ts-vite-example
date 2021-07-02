import { defineConfig } from 'vite'

import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  base: './',
  plugins: [reactRefresh()],
  resolve: {
    alias: [{ find: /^@moreptsviteex\/([^/]*)$/, replacement: '@moreptsviteex/$1/src/index.ts' }]
  }
})
