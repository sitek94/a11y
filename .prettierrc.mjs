import defaultConfig from '@sitek94/style-guide/prettier'

/** @type {import("prettier").Config} */
export default {
  ...defaultConfig,
  plugins: [
    ...defaultConfig.plugins,
    'prettier-plugin-tailwindcss',
    'prettier-plugin-astro',
  ],
  overrides: [
    ...defaultConfig.overrides,
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
