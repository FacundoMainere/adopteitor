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

gulp.task('default', ['css']);
