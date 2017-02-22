'use strict';

const gulp = require('gulp');
const fs = require('fs');
const assert = require('assert');
const injector = require('../');

describe('gulp-critical-injector', function() {

  it('should match expected.html', function(done) {

    var actual = null;
    // Read file and normalize it by removing white spaces
    var expected = fs.readFileSync('test/_files/expected.html', 'utf8')
      .replace(/\s+/g, '');

    gulp.src('test/_files/index.html')
      // Actual test
      .once('end', function() {

        assert.ok(null !== actual);

        if (null !== actual) {
          assert.equal(
            actual,
            expected
          );
        }

        done();
      })
      // Run module
      .pipe(injector({
        basePath: 'test/_files',
      }))
      // Get new contents
      .on('data', function(file) {
        actual = file.contents.toString().replace(/\s+/g, '');
      });
  });
});
