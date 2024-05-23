'use strict';

var gulp = require('gulp');
var path = require('path');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');
const { title } = require('process');
const { Server } = require('http');

var path = {
  scss_src: 'src/scss/',
  img_src: 'src/img/',
};

gulp.task('sass', function () {
  gulp.src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'expanded',
      indentType: 'tab',
      indentWidth: 1
    }).on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('sprite', function () {
  var spriteData = gulp.src(path.img_src + '/sp_img/*.png')
    .pipe(spritesmith({
      imgName: 'sp_img.png',
      padding: 10,
      cssName: '_sp_img.scss'
    }));
  spriteData.img.pipe(gulp.dest(path.img_src));
  spriteData.css.pipe(gulp.dest(path.scss_src + 'sprite'));
});

gulp.task('default', ['watch', 'sprite']);