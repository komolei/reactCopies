const path = require("path");
const devConfig = {
    watch: true,
    devServer: {
        contentBase: path.join(process.cwd(), "sample"),
        compress: true,
        port: 300,
    },
}
const baseConfig = require('./base.config');
module.exports = Object.assign({}, baseConfig, devConfig);