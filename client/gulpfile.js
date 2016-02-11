var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

var config = {
    sassPath: './app/scss',
    bowerDir: './bower_components'
};
gulp.task('watch', function() {
    gulp.watch(config.sassPath + '/**/*.scss', ['css']);
});

gulp.task('css', function() {
    return sass(config.sassPath + '/app.scss', {
            style: 'compressed',
            loadPath: [
                './app/scss',
                config.bowerDir + '/bootstrap-sass-official/assets/stylesheets',
                config.bowerDir + '/fontawesome/scss',
            ]
        })
        .pipe(gulp.dest('./app/css'));
});

gulp.task('server', function() {
  var server = child.spawn('node', ['server.js']);
  var log = fs.createWriteStream('server.log', {flags: 'a'});
  server.stdout.pipe(log);
  server.stderr.pipe(log);
});

gulp.task('default', ['css', 'server']);
