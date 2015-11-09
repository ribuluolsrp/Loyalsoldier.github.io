var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var image = require('gulp-image');
var rename = require("gulp-rename");


// 压缩图片
gulp.task('images', function () {
	return gulp.src('content/images/**/*')
				.pipe(image({
				    pngquant: true,
				    optipng: true,
				    zopflipng: true,
				    advpng: true,
				    jpegRecompress: true,
				    jpegoptim: true,
				    mozjpeg: true,
				    gifsicle: true,
				    svgo: true
			    }))
				.pipe(gulp.dest('content/images/'));
});

// 压缩 CSS
gulp.task('css', ['js'], function() {
    return gulp.src('assets/css/*.css')
               .pipe(autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
               .pipe(minifyCss({compatibility: 'ie8'}))
               .pipe(gulp.dest('assets/css/'));
});

// 压缩 JS
gulp.task('js', ['images'], function() {
    return gulp.src('assets/js/*.js')
               .pipe(uglify())
               .pipe(gulp.dest('assets/js/'));
});

// 修改 jquery.min.js 文件名
gulp.task('rename', function () {
	return gulp.src('public/*')
			   .pipe(rename('jquery.min.js'))
			   .pipe(gulp.dest("public/"));
});

// 默认任务
gulp.task('default', ['css', 'rename'], function () {
    console.log('恭喜你，博客优化完成啦！');
});
