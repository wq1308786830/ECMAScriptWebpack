/**
 * Created by flyin on 2017/4/14.
 */

// 引入 gulp及组件
const gulp = require('gulp'),                 //基础库
    clean = require('gulp-clean'),             //清空文件夹
    tinyLr = require('tiny-lr'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    webpackConfig = require('./webpack.config'),
    server = tinyLr(),
    port = 35729;

// 清空
gulp.task('clean', function () {
        gulp.src(['./dist'], {read: false})
            .pipe(clean());
    });

gulp.task('webpack:build', function (callback) {
    webpack(webpackConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack', err);
        }
        gutil.log('[webpack]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('webpack-dev-server', function (callback) {
    // modify some webpack config options

    new WebpackDevServer(webpack(webpackConfig), {
        stats: {
            publicPath: "/" + webpackConfig.output.publicPath,
            colors: true
        }
    }).listen(8080, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('[webpack-dev-server]', err);
        }
        gutil.log('[webpack-dev-server', 'http://localhost:8080/webpack-dev-server/index.html');
    });
});

gulp.task('watch', function () {
    server.listen(port, function (err) {
        if (err) {
            console.log(err);
        }
    });
});