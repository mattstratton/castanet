var gulp = require('gulp'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
    sourcemaps = require('gulp-sourcemaps');

var scripts = [
    'node_modules/jquery/dist/jquery.js',
    'node_modules/bootstrap/dist/js/bootstrap.js',
    'node_modules/jssocials/dist/jssocials.js',
    'static/js/castanet.js',
    'node_modules/mediaelement/build/mediaelement-and-player.js',
    'node_modules/mediaelement-plugins/dist//speed/speed.js',
    'node_modules/mediaelement-plugins/dist//speed/speed-i18n.js'

]

gulp.task('js-concat', function(){
    return gulp.src(scripts)
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        // .pipe(gulp.dest('dist'))
        .pipe(rename('castanet-min.js'))
        .pipe(uglify({ keep_fnames: true }))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('static/js'));
});