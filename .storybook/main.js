module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    "@storybook/addon-postcss",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  staticDirs: [{from: '../src/Assets/Fonts', to: "/fonts"}],
}