'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const data = require('gulp-data');
const fs = require('fs');
 
gulp.task('build', ['pug', 'sass']);
gulp.task('watch', function () {
  gulp.watch('./styles/sass/**/*.scss', ['sass']);
  gulp.watch('./views/**/*.pug', ['pug']);
});

gulp.task('sass', () => {
  return gulp.src('./styles/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./styles'));
});
gulp.task('pug', function buildHTML() {
  return gulp.src('views/*.pug')
  .pipe(data( function(file) {
    return JSON.parse(fs.readFileSync('./content/data.json'))
  }))
  .pipe(pug({
    pretty : true
  }))
  .pipe(gulp.dest('./'));
});

