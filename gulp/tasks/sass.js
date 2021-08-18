module.exports = function () {

    $.sass.forEach(function (item, i) {
        $.gulp.task('sass:' + $.sass[i][0], function () {
            return $.gulp.src($.sass[i][2])
                    .pipe($.gp.concat($.sass[i][1] + '.scss'))
                    // .pipe($.gp.sourcemaps.init())
                    .pipe($.gp.sass())
                    .on("error", $.gp.notify.onError({title: "style"}))
                    .pipe($.gp.postcss([$.autoprefixer()]))
                    .pipe($.cleanCSS())
                    // .pipe($.gp.cssnano({reduceIdents: false, zindex: false}))
                    .pipe($.gp.rename({suffix: '.min'}))
                    // .pipe($.gp.sourcemaps.write())
                    .pipe($.gulp.dest($.sass[i][4]))
                    .pipe($.bs.reload({stream: true}));
        });
    });

};