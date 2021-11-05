const { vanillaExtractPlugin } = require( '@vanilla-extract/vite-plugin');
const path = require('path');

function customVanillaExtractPlugin() {
  const orig = vanillaExtractPlugin();
  return {
    ...orig,
    load(id) {
      if (id.startsWith('/packages/')) {
        id = "storybook-builder-vite/../../../../.."+id
      }
      // @ts-ignore
      return orig && orig.load ? orig.load(id) : null;
    }
  }
}

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite'
  },
  async viteFinal(config, { configType }) {
    config.plugins = [...config.plugins, customVanillaExtractPlugin()]
    config.base = './'
    config.resolve = {
      ...config.resolve,
      alias: [
        { find: /^@moreptsviteex\/([^/]*)$/, replacement: '@moreptsviteex/$1/src/index.ts' }
      ]
    }
    return config
  }
}
