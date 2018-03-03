/**
 * Created by flyin on 2018/3/12.
 */
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(common, {
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name]-[chunkhash].bundle.js",
        publicPath: "/",
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});