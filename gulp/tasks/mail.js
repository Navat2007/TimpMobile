module.exports = function () {

    let inlineCss = require('gulp-inline-css');

    $.mail.forEach(function (item, i) {
        $.gulp.task('mail:' + $.mail[i][0], function () {
            return $.gulp.src($.mail[i][3])
                .pipe($.gp.pug())
                .pipe(inlineCss())
                .pipe($.gulp.dest($.mail[i][2]))
                .pipe($.bs.reload({stream: true}));
        });
    });
};