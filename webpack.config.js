var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname)
var APP_PATH = path.resolve(ROOT_PATH, 'src')
var DIST_PATH = path.resolve(ROOT_PATH, 'dist')

module.exports = {
    entry: {
        app: path.resolve(ROOT_PATH, 'main.js'),
        vendors: ['vue','vue-strap']
    },

    output: {
        path: DIST_PATH,
        publicPath: '/',
        filename: '[name].js'
    },
    resolveLoader: {
        root: path.join(ROOT_PATH, 'node_modules'),
    },
    watch: true,
    plugins: [
        new webpack.ProvidePlugin({
            vue: 'vue'
        }),
        new HtmlwebpackPlugin({
            title: 'daily',
            template: path.resolve(ROOT_PATH, 'tpl/index.tpl')
        }),
        new ExtractTextPlugin("[name].css"),
      //  new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ],
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // {
            //     test: /\.css$/,
            //     loaders: ['style', 'css']
            // },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.html$/,
                loader: 'vue-html'
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name].[ext]?[hash]'
                }
            },
            {test: /\.woff2?$/, loader: "url?limit=10000&minetype=application/font-woff"},
            {test: /\.(ttf|eot|)$/, loader: "file"}
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        lazy: false,
        port: 80,
        stats: {colors: true}
    },
    devtool: '#eval-source-map',
    resolve: {
        extensions:['','.vue','.js','.css'],
        alias: {
            boot: path.join(ROOT_PATH,'node_modules/bootstrap/dist/css/bootstrap.min.css')
        }
    }
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    ])
}
