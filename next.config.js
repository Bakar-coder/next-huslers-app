const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = withCss(
  withSass({
    webpack(config, { dev }) {
      if (config.mode === "production") {
        if (Array.isArray(config.optimization.minimizer)) {
          config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}));
        }
      }
      return config;
    },
  })
);
