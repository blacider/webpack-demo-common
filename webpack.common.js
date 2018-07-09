const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    module: {
        unknownContextCritical : false,
        rules: [{
            test: /\.(js)$/,
            exclude: [
                /node_modules/
            ],
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new HtmlWebpackPlugin({
        }),
        new VueLoaderPlugin()
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
};
