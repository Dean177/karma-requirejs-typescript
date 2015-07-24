var gulp = require('gulp');
var typescript = require('gulp-typescript');
var Server = require('karma').Server;

gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('build', function() {
  return gulp
    .src(['src/tests/**/*.ts', 'src/typescript/**/*.ts'], { base: 'src'})
    .pipe(typescript({
      target: 'ES5',
      module: 'amd'
    }))
    .pipe(gulp.dest('target'));
});