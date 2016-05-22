var gulp = require('gulp'),
    connect = require('gulp-connect'),
    del = require('del'),
    modRewrite = require('connect-modrewrite');
    sass = require('gulp-ruby-sass'),
    typescript = require('gulp-typescript'),
    tsconfig = require('./tsconfig.json'),
    watch = require('gulp-watch');

gulp.task('clean', function() {
    return del('dist/**/*');
});

gulp.task('compile', function() {
    var tsProject = typescript.createProject('tsconfig.json');
    tsProject.src('app/**/*.ts')
        .pipe(typescript(tsProject))
        .js.pipe(gulp.dest('dist/app'));
});

gulp.task('styles', function() {
    sass('styles/**/*.scss', { style: 'expanded' })
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('livereload', function() {
    watch(['dist/**/*'])
        .pipe(connect.reload());
});

gulp.task('serve', function() {
    connect.server({
        port: 3000,
        livereload: true,
        root: ['.', 'dist'],
        middleware: function() {
            return [
                modRewrite([
                    '^/app/(.*) /app/$1 [L]',
                    '^/dist/(.*) /dist/$1 [L]',
                    '^/img/(.*) /img/$1 [L]',
                    '^/node_modules/(.*) /node_modules/$1 [L]',
                    '^/systemjs[.]config[.]js /systemjs.config.js [L]',
                    '^(.*) /'
                ])
            ]
        }
    });
});

gulp.task('watch', function() {
    gulp.watch('app/**/*.ts', ['compile']);
    gulp.watch('styles/**/*.scss', ['styles']);
});

gulp.task('default', ['clean'], function() {
    gulp.start('compile', 'styles', 'serve', 'livereload', 'watch');
});