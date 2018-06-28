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
            test: /\.js$/,
            use: "imports-loader?define=>false&this=>window",
            exclude: [
                /node_modules/
            ]
        }, {
            test: /\.(js)$/,
            exclude: [
                /src[\/\\]common/,
                /node_modules/
            ],
            loader: 'babel-loader'
        }, {
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader']
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader'
            ]
        }, {
            test: /\.tpl$/,
            use: 'raw-loader'
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['public']), //清楚dist文件夹
        new HtmlWebpackPlugin({ //根据生成的chunk动态生成html
            template: './src/index.html'
        }),
        new VueLoaderPlugin(),
        // new webpack.HashedModuleIdsPlugin(), //包id不再使用计数器，防止顺序变了hash变
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
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
        modules: [path.resolve(__dirname, "src"), "node_modules"],
        alias: {
            vue: 'common/lib/vue/index.js',
            'vue-router': 'common/lib/vue/vue-router.js',
            ajax: 'common/util/ajax.js',
            oop: 'common/util/oop.js',
            Observable: 'common/util/Observable',
            format: 'common/util/Format.js',
            numberic: 'common/util/Numberic.js',
            xtpl: 'common/lib/xtpl/index.js',
            $: 'common/lib/jquery/index.js',
            jquery: 'common/lib/jquery/index.js',
            grid: 'common/widget/Grid.js',
            msgBox: 'common/widget/MessageBox.js',
            dialog: 'common/widget/Window.js',
            notify: 'common/widget/Notifier/index.js',
            tree: 'common/widget/Tree/index.js',
            loadMask: 'common/widget/LoadMask.js',
            tabs: 'common/plugins/jquery/tabs/index.js',
            fixcheckbox: 'common/plugins/jquery/fixcheckbox/index.js',
            fixselect: 'common/plugins/jquery/fixselect/index.js',
            fixtreeselect: 'common/plugins/jquery/fixtreeselect/index.js',
            fixcombogrid: 'common/plugins/jquery/fixcombogrid/index.js',
            fixaction: 'common/plugins/jquery/fixaction/index.js',
            vtype: 'common/plugins/jquery/vtype/index.js',
            vtip: 'common/plugins/jquery/vtip/index.js'
        }
    }
};
