Gulp Critical Injector
===

Inject CSS, JS file contents using [critical-injector](https://github.com/matpoppl/critical-injector).

## Usage

```js
const gulp = require('gulp'),
  injector = require('gulp-critical-injector');

gulp.task('html', function () {
  return gulp.src('src/*.html')
  .pipe(injector({
    basePath: 'src'
  }))
  .pipe(gulp.dest('build'));
});
```
