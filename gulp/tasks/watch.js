module.exports = function () {

    $.gulp.task('watch', function () {
        $.gulp.watch($.watch).on('change', $.bs.reload);
        $.sass.forEach(function (item, i) {
            $.gulp.watch($.sass[i][3], $.gulp.series('sass:' + $.sass[i][0]));
        });
        /*$.js.forEach(function (item, i) {
            $.gulp.watch($.js[i][2], $.gulp.series('script:' + $.js[i][0]));
        });*/
        /*$.mail.forEach(function (item, i) {
            $.gulp.watch($.mail[i][1], $.gulp.series('mail:' + $.mail[i][0]));
        });*/
        // $.gulp.watch(['template/mail-school/*.pug', 'template/mail-school/parts/*.pug'], $.gulp.series('mail-school'));
    });
};