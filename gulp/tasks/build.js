var gulp = require('gulp');

gulp.task('build', ['jade', 'html', 'images', 'sass', 'javascript-prepare',
    'javascript', 'styleguide']);
