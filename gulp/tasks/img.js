module.exports = function () {

    $.gulp.task('img:big', function (done) {
        var imgFolder = [
            'img/bg',
        ];
        var imgSrc = [
            'src/img/bg/*.*',
        ];
        var imgSize = [
            576,
            768,
            992,
            1200,
            1600
        ];
        var imgOutput = [
            '/sm',
            '/md',
            '/lg',
            '/xl',
            '/xxl',
        ];
        imgFolder.forEach(function (itemX, x, arrayX) {
            imgSize.forEach(function (itemY, y, arrayY) {
                $.gulp.src(imgSrc[x])
                    .pipe($.gp.responsive({
                        '*': [{
                            width: imgSize[y],
                            rename: {
                                extname: '.jpg',
                            },
                            format: 'jpg'
                        }, {
                            width: imgSize[y] * 2,
                            rename: {
                                suffix: '_@2x',
                                extname: '.jpg',
                            },
                            format: 'jpg',
                        }, {
                            width: imgSize[y],
                            rename: {
                                extname: '.webp',
                            },
                        }],
                    }, {
                        withMetadata: false,
                        errorOnEnlargement: false
                    }))
                    .pipe($.gp.imagemin([
                        $.gp.imagemin.jpegtran({progressive: true}),
                        $.gp.imagemin.mozjpeg({
                            progressive: true,
                            quality: 70,
                        }),
                    ]))
                    .pipe($.gulp.dest(imgFolder[x] + imgOutput[y]));
            });
            done();
        })
    });

    $.gulp.task('img:png', function (done) {
        let imgSrc = [
            'template/uor2.mossport.ru/img/*.png',
            // 'img/pictures/sport-types/*.png',
            // 'novels/images/starsDoNotJudge/**/*.*',
        ];
        let imgFolder = [
            'template/uor2.mossport.ru/img/',
            // 'img/pictures/sport-types/',
            // 'novels/images/starsDoNotJudge2/',
        ];
        let imgSize = [
            '80%',
        ];

        imgFolder.forEach(function (item, i, array) {
            $.gulp.src(imgSrc[i])
                .pipe($.gp.imagemin([
                    // $.gifsicle({interlaced: true}),
                    // $.mozjpeg({quality: 75, progressive: true}),
                    $.pngquant({quality: [0.65, 0.80]}),
                ]))
                /*.pipe($.gp.responsive({
                    '*.*': [
                        {
                            width: imgSize[i],
                        },
                    ]
                }))*/
                .pipe($.gulp.dest(imgFolder[i]));
            done();
        })
    });

    $.gulp.task('img:jpg', function (done) {
        var imgFolder = [
            'img/',
        ];
        var imgSrc = [
            'src/img/**/*.{jpg, jpeg}',
        ];
        var imgSize = [
            1000,
        ];

        imgFolder.forEach(function (item, i, array) {
            $.gulp.src(imgSrc[i])
                .pipe($.gp.responsive({
                    '**/*': [{
                        width: imgSize[i],
                        rename: {extname: '.jpg'},
                        format: 'jpeg',
                    }, {
                        width: imgSize[i] * 2,
                        rename: {
                            suffix: '_@2x',
                            extname: '.jpg',
                        },
                        format: 'jpeg',
                    }, {
                        width: imgSize[i] * 2,
                        rename: {extname: '.webp'}
                    }],
                }, {
                    progressive: true,
                    withMetadata: false,
                    errorOnEnlargement: false,
                    withoutEnlargement: true,
                }))
                .pipe($.gp.imagemin([
                    // $.gp.imagemin.gifsicle({interlaced: true}),
                    $.gp.imagemin.jpegtran({progressive: true}),
                    $.gp.imagemin.mozjpeg({
                        progressive: true,
                        quality: 70,
                    }),
                    // $.gp.imagemin.optipng({optimizationLevel: 5}),
                    // $.gp.imagemin.pngquant({quality: [0.65, 0.80]}),
                    // $.gp.imagemin.svgo({plugins: [{removeViewBox: true}]})
                ]))
                .pipe($.gulp.dest(imgFolder[i]));
            done();
        })
    });

    $.gulp.task('img:noresize-jpg', function (done) {
        var imgFolder = [
            // 'img/',
            'template/mossport/img/',
        ];
        var imgSrc = [
            // 'src/img/*.{jpg, jpeg}',
            'template/mossport/img/*.{jpg, jpeg}',
        ];

        imgFolder.forEach(function (item, i, array) {
            $.gulp.src(imgSrc[i])
                .pipe($.gp.responsive({
                    '*': [{
                        rename: {extname: '.jpg'},
                        format: 'jpg',
                    }, /*{
                        rename: {extname: '.webp'}
                    }*/],
                }, {
                    progressive: true,
                    withMetadata: false,
                    errorOnEnlargement: false,
                }))
                .pipe($.gp.imagemin([
                    // $.gp.imagemin.gifsicle({interlaced: true}),
                    $.gp.imagemin.jpegtran({progressive: true}),
                    $.mozjpeg({
                        progressive: true,
                        quality: 80,
                    }),
                    // $.gp.imagemin.optipng({optimizationLevel: 5}),
                    // $.gp.imagemin.pngquant({quality: [0.65, 0.80]}),
                    // $.gp.imagemin.svgo({plugins: [{removeViewBox: true}]})
                ]))
                .pipe($.gulp.dest(imgFolder[i]));
            done();
        })
    });

    $.gulp.task('img:svg', function (done) {
        let imgFolder = [
            // 'public/img/',
            // 'img/svg/icon/icon-controls-v2/',
            // 'img/svg/icon/icon-sport-192/',
            // 'img/svg/icon/icon-sport-v2/',
            // 'img/svg/icon/admin-menu/',
            'template/mossport/img/',
        ];
        let imgSrc = [
            // 'public/img/*.svg',
            // 'img/svg/icon/icon-controls-v2/*.svg',
            // 'img/svg/icon/icon-sport-192/*.svg',
            // 'img/svg/icon/icon-sport-v2/*.svg',
            // 'img/svg/icon/admin-menu/*.svg',
            'template/mossport/img/*.svg',
        ];

        imgFolder.forEach(function (item, i, array) {
            $.gulp.src(imgSrc[i])
                .pipe($.gp.imagemin({
                    interlaced: true,
                    progressive: true,
                    optimizationLevel: 5,
                    svgoPlugins: [
                        {
                            removeViewBox: true,
                            cleanupIDs: true,
                            removeDoctype: true
                        }
                    ]
                }))
                .pipe($.gulp.dest(imgFolder[i] + '/'));
            done();
        })
    });

    $.gulp.task('img:svg-sprite', function (done) {
        let imgFolder = [
            'src-img/icon/',
        ];
        let imgSrc = [
            'src-img/icon/*.svg',
        ];

        let name = [
            'icons.svg',
        ]

        imgFolder.forEach(function (item, i, array) {
            $.gulp.src(imgSrc[i])
                .pipe($.svgSprite({
                    mode: {
                        stack: {
                            sprite: name[i]
                        }
                    }
                }))
                .pipe($.gulp.dest(imgFolder[i] + '/'));
            done();
        })
    });
};