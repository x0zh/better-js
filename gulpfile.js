// gulp-mocha

var gulp = require('gulp'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

gulp.task('clean', function() {
    return gulp.src(['./dist'], {read: false})
        .pipe(clean());
});

gulp.task('build', ['clean'], function() {
    gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist'));

    gulp.src('./src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('./dist'));
});