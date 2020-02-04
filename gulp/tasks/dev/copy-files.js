var gulp = require('gulp');

gulp.task('copy-player-files', function() {
    return gulp.src(['node_modules/mediaelement/build/mejs-controls.png','node_modules/mediaelement/build/mejs-controls.svg'])
        .pipe(gulp.dest('static/img'));
});

gulp.task('copy-css-files', function() {
    return gulp.src(['node_modules/mediaelement/build/mediaelementplayer.min.css','node_modules/mediaelement-plugins/dist/speed/speed.min.css'])
        .pipe(gulp.dest('static/css'));
});