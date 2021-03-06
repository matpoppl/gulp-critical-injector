'use strict';

const through = require('through2');
const PluginError = require('plugin-error');
const injector = require('critical-injector');
const PLUGIN_NAME = 'gulp-critical-injector';

module.exports = function(options) {
  // Will always pass file contents
  options.isPath = false;

  return through.obj(function(file, encoding, callback) {

    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
    }

    file.contents = Buffer.from(
      injector(
        file.contents.toString('utf8'),
        options
      ),
      'utf8'
    );

    return callback(null, file);
  });
};
