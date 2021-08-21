"use strict"

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));

gulp.task("default", watch);
gulp.task("sass", sassCompila);

function sassCompila() {
  return gulp
  .src("src/scss/**/*.scss")
  .pipe(
    sass(
      { outputStyle: 'compressed' }
    ).on("error", sass.logError)
  )
  .pipe(gulp.dest("public/css"));
}

function watch (){
  gulp.watch("src/scss/**/*.scss", sassCompila);
}