const path = require("path");
const devConfig = {
    watch: true,
    devServer: {
        contentBase: path.join(process.cwd(), "sample"),
        compress: true,
        port: 3000,
    },
}
const baseConfig = require('./base.config');
module.exports = Object.assign({}, baseConfig, devConfig);