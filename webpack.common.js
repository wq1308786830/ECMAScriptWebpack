/**
 * Created by flyin on 2018/3/12.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry: {
        first: ["babel-polyfill", "./src/app/page/first/first.js"],
        second: "./src/app/page/second/second.js",
        third: "./src/app/page/third/third.js"
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
        publicPath: "/",
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'add js to index.html file',
            chunks: ['first', 'second', 'third'],
            template: 'src/app/page/index.html',
            filename: 'index.html'
        })
    ],
};