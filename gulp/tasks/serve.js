module.exports = function () {
    $.gulp.task('server', function () {
        $.bs.init({
            proxy: 'Localhost/TimpMobile/template.php',
        });
    });
};
