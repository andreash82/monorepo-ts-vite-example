import { defineConfig, Plugin } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

import reactRefresh from '@vitejs/plugin-react-refresh'

/*
the vanillaExtractPlugin stores vanillaextractcss refs on call with relative package pathes as key in a map but looses relative prefix later
-> load via referenced packages doesn't work
-> here the plugin obj is customized to re-add the same prefix to the id on load

Note: Ugly hack ;)
 */
function customVanillaExtractPlugin(): Plugin {
  const orig:Plugin = vanillaExtractPlugin();
  return {
    ...orig,
    load(id) {
      if (id.startsWith('packages/')) {
        console.log("load id", id);
        id = "@moreptsviteex/myapp/../../"+id;
        console.log("after load id", id);

      }
      // @ts-ignore
      return orig && orig.load ? orig.load(id) : null;
    }
  }
}

export default defineConfig({
  base: './',
  plugins: [reactRefresh(),customVanillaExtractPlugin()],
  resolve: {
    alias: [
      { find: /^@moreptsviteex\/([^/]*)$/, replacement: '@moreptsviteex/$1/src/index.ts' }
    ]
  }
})
