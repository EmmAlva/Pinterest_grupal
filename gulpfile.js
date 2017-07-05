var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var config = {
  source: './src/',
  dist: './public/'
};
var paths = {
  assets: "/assets/",
  html: "**/*.html",
  js: "js/**.js",
  components: "js/componentes/**.js",
  vendor: "js/vendor/**.js",
  utils: "js/utils/**.js",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  mainJS: "js/app.js",
  imgPng: "img/*.png"

};
var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: paths.assets + paths.sass,
  js: config.source+paths.assets+ paths.js,
  vendor: config.source+paths.assets+ paths.vendor,
  components: config.source + paths.assets + paths.components,
  utils: config.source+paths.assets+ paths.utils,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS,
  img: config.source + paths.assets + paths.imgPng,
};
gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});
gulp.task('img', ()=>{
  gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
});
gulp.task('sass', ()=>{
  console.log(sources.rootSass);
  gulp.src(sources.rootSass)
  .pipe(sass({
    outputStyle: "compressed"
  }).on("Error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task('js', ()=>{
  gulp.src([sources.vendor,sources.utils,sources.components,sources.rootJS])
  .pipe(concat("new.js"))//temporal no es necsario en un existente
  .pipe(browserify())
  .pipe(rename("bundle.js"))
  .pipe(gulp.dest(config.dist + paths.assets + "js"));
});
gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: config.dist
      // baseDir: config.dist + paths.assets
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.js, ["js-watch"]);
  gulp.watch(sources.img, ["img-watch"]);

});
