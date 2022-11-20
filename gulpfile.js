'use strict';

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


//Sass
gulp.task('sass', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('watch', function(){
    gulp.watch('src/scss/**/*.scss', ['sass']);
});