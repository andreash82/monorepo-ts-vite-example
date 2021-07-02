module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'storybook-builder-vite'
  },
  async viteFinal(config, { configType }) {
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
