// Install for Trey's Gulp file: 
// npm install gulp 
// npm install gulp-util gulp-minify-css gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename gulp-sourcemaps gulp-autoprefixer gulp-plumber gulp-notify --save-dev

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');
var notify = require("gulp-notify");

// Gulp-Notify Error Handler
var onError = function(err) {
  notify.onError({
    title:    "Gulp",
    subtitle: "Failure!",
    message:  "Error: <%= error.message %>",
    sound:    "Sosumi"
  })(err);
  
  this.emit('end');// Reset Gulp Watch 
};
 
// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate Specified Scripts, Minify JS, Source Map JS
// Note: Sometimes the JS loading order matters, this is to keep control of that.
gulp.task('scripts', function() {
    return gulp.src(['js/navigation.js', 'js/customizer.js', 'js/skip-link-focus-fix.js'])
        .pipe(plumber({errorHandler: onError}))
        .pipe(sourcemaps.init())
          .pipe(concat('all-scripts.js'))
          .pipe(gulp.dest('js/min'))
          .pipe(rename('all-scripts.min.js'))
          .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js/min'));
});

// Compile Sass, Generate Source Maps, Auto-Prefix, Minify CSS
gulp.task('sass', function() {
    return gulp.src(['sass/**/' + '*.scss', '!' + 'sass/**/' + '_*.scss'])
        .pipe(plumber({errorHandler: onError}))
        .pipe(sourcemaps.init())
          .pipe(sass())
          .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false }))
          .pipe(minifyCss())
          .pipe(rename('style.css'))
          .pipe(notify("Compiled SASS"))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('.'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/**/*.js', ['lint', 'scripts']);
    gulp.watch('sass/**/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);