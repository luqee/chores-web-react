'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

var gulp_util = require('gulp-util');
// var jshint = require('gulp-jshint');

var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DES = './src/assets/css';

// gulp.task('jshint', function() {
//     return gulp.src('./src/**/*.js')
//       .pipe(jshint())
//       .pipe(jshint.reporter('jshint-stylish'));
// });

gulp.task('compile_css', function(){
    gulp_util.log('Gulp is running compile_css task!')
    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DES))
    .pipe(gulp.dest(SCSS_DES));
});

//detect changes in scss
gulp.task('watch_scss', function(){
    gulp.watch(SCSS_SRC, ['compile_css']);
});

gulp.task('default', ['watch_scss']);