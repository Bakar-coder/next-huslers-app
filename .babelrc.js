const env = require("./env.js");

module.exports = {
  presets: ["next/babel"],
  plugins: [["transform-define", env]],
};
