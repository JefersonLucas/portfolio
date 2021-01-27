const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function compileSass() {
  return gulp
    .src('src/sass/**/*.scss') // '**/*' Logs in all folders and searches for all files with the .scss extension
    .pipe(sass({
      outputStyle: 'compressed' // Compress the CSS files
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'], // Use autoprefixer from the last 2 versions
      cascade: false
    }))
    .pipe(gulp.dest('src/css/')) // Destination of Sass files
}

gulp.task('sass', compileSass) // Task compileSass

function watch() {
  gulp.watch('src/sass/*.scss', compileSass) // Select the compileSass function to be monitored
}

gulp.task('default', watch) // Makes a task as the default of the watch function