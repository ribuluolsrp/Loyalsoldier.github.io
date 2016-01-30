var gulp = require('gulp');
var image = require('gulp-image');

gulp.task('image', function () {
  gulp.src('content/images/**/*')
    .pipe(image({
      pngquant: true,
      optipng: true,
      zopflipng: true,
      advpng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      gifsicle: true,
      svgo: true
    }))
    .pipe(gulp.dest('content/images/'));
});

gulp.task('default', ['image'], function() {
  console.log("图片已压缩优化完毕！");
});
