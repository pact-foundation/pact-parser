'use strict';

var argv = require('yargs').argv;

if (!argv.path) {
  throw new Error('Please specify path to pact files with `--path <path_to_files>` argument.')
}