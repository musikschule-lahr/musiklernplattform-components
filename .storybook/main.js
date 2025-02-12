module.exports = {
  stories: ["../src/**/*.stories.js"],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register',
    '@storybook/addon-docs',
    'storybook-addon-theme-playground/dist/register',
  ],
};
