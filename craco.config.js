const { ESLINT_MODES } = require('@craco/craco');

const CracoLessPlugin = require('craco-less');
const autoprefixer = require('autoprefixer');
const tailwind = require('tailwindcss');

module.exports = {
  mode: ESLINT_MODES.file,
  style: {
    postcssOptions: {
      plugins: [autoprefixer, tailwind],
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
