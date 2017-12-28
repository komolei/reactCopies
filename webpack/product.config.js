let UgLifyJsPlugin = require("uglifyjs-webpack-plugin");
const baseConfig = require('./base.config');
const optionsOfUglify = {
    test: /\.js($|\?)/i,
    include: /\/dist/,
    compress: true,
    mangle: true,
    beautify: true,
    comments: true,
};
const newPlugin = baseConfig.plugins.concat(new UgLifyJsPlugin());
console.log("newPlugin is", newPlugin);
// const newPlugin = baseConfig.plugins.push(new UgLifyJsPlugin());
// module.exports = Object.assign({
//     baseConfig,
//     UgLifyJsPlugin,
//     newPlugin,
// }) //error

module.exports = Object.assign({}, baseConfig, { plugins: newPlugin });

