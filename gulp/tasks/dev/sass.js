var gulp = require('gulp'),
  sass = require('gulp-dart-sass'),
  sourcemaps = require('gulp-sourcemaps');

  // sass.compiler = require('sass');

gulp.task('site-sass', function () {
    return gulp.src('static/scss/site.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static/css'));
  });

  gulp.task('blue-sass', function () {
    return gulp.src('static/scss/blue.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static/css'));
  });
  gulp.task('orange-sass', function () {
    return gulp.src('static/scss/orange.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static/css'));
  });
  gulp.task('grey-sass', function () {
    return gulp.src('static/scss/grey.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ style: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static/css'));
  });

  gulp.task('sass', gulp.series('site-sass', 'blue-sass', 'orange-sass','grey-sass'))
