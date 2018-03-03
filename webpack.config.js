/**
 * Created by flyin on 2017/4/14.
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        first: ["babel-polyfill", "./src/app/page/first/first.js"],
        second: "./src/app/page/second/second.js",
        third: "./src/app/page/third/third.js"
    },

    resolve: {
        extensions: ['.js']
    },

    // production mode
    // devtool: 'inline-source-map',

    output: {
        path: path.resolve(__dirname, "dist"),
        // production mode
        // filename: "[name]-[chunkhash].bundle.js",
        filename: "[name].bundle.js",
        publicPath: "/",
    },

    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },

    devServer: {
        contentBase: "./dist", //本地服务器所加载的页面所在的目录
        hot: true,
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: 'add js to index.html file',
            chunks: ['first', 'second', 'third'],
            template: 'src/app/page/index.html',
            filename: 'index.html'
        }),

        // production mode
        // new UglifyJSPlugin({
        //     sourceMap: false
        // })
    ],
};