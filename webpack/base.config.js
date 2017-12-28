const path = require("path");
const extractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const entry = require("./entry");
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(process.cwd(), "dist"),
        filename: "[name].js",
        publicPath: '/dist',
    },
    context: path.resolve(process.cwd(), "src"),
    resolve: {
        extensions: [".js", ".jsx", "json"]
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_moudles/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader", { loader: 'postcss-loader' }, {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader", { loader: 'postcss-loader' }, {
                            loader: "less-loader"
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: extractTextWebpackPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: 'css-loader',
                    }, {
                        loader: 'postcss-loader',
                        // options: {
                        //     // config: {
                        //     //     path: './postcss.config.js'
                        //     // }
                        // }
                    }]
                    // use: ['css-loader', 'postcss-loader']
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|svg|)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            // name(file) {
                            //     if (env === 'development') {
                            //         return '[path][name].[ext]'
                            //     }

                            //     return '[sha512:hash:base64:7].[ext]'
                            // }
                            // name: '[name].[ext]?[hash]',
                            name: '[sha512:hash:base64:7].[ext]',
                            // hashes: '[sha512:hash:base64:7]',
                            outputPath: 'images/'
                        }
                    }]
            },
            // {
            //     test: /\.html$/,
            //     use: {
            //         loader: 'html-loader',
            //         options: {
            //             // attrs: [':data-src'],
            //             minimize: true,
            //         }
            //     }
            // }
        ]
    },
    plugins: [
        new extractTextWebpackPlugin("css/[name].css"),
        // new HtmlWebpackPlugin({
        //     title: 'komolei',
        //     template: 'base/webpack.template.html',
        //     // chunks: ['sale', 'list'],
        //     // filename: 'sale.html',
        //     inject: true,
        // }),

    ]
}