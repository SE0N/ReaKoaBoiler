/*eslint-env node */
var webpack = require("webpack");

var path = require("path");
var HtmlwebpackPlugin = require("html-webpack-plugin");

var ROOT_PATH = path.resolve(__dirname);

module.exports = {
    entry: [
        path.resolve(ROOT_PATH, 'app/src/index'),
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-core'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.resolve(ROOT_PATH, 'app/build'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(ROOT_PATH, 'app/build'),
        port: 9999,
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlwebpackPlugin({
            title: 'Listlogs'
        })
    ]
};