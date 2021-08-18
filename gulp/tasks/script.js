module.exports = function () {

    $.gulp.task('scripts:lib', function () {
        return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',])
                .pipe($.gulp.dest('js/libs'));
    });

    $.js.forEach(function (item, i) {
        $.gulp.task('script:' + $.js[i][0], function () {
            return $.gulp.src($.js[i][2])
                    // .pipe($.gp.sourcemaps.init())
                    .pipe($.gp.babel({"presets": ["@babel/env"]}))
                    // .pipe($.gp.concat($.js[i][1] + '.js'))
                    .pipe($.gp.uglify({mangle: {keep_fnames: true,}}))
                    .pipe($.gp.rename({suffix: '.min'}))
                    // .pipe($.gp.sourcemaps.write())
                    .pipe($.gulp.dest($.js[i][3]))
                    .pipe($.bs.reload({stream: true}))
                    .on('end', $.bs.reload);
        });
    });
};