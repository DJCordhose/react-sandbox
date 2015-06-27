var gulp = require('gulp');
var webpack = require('gulp-webpack-build');
var path = require('path');
var del = require('del');
var webpackConfigPath = './webpack.config.js';

gulp.task('default', ['clean', 'webpack:dev']);

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

gulp.task('webpack:dev', ['clean'], function() {
    gulp.src(path.resolve(webpackConfigPath))
        .pipe(webpack.run());
});
