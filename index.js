'use strict';

var argv = require('yargs').argv,
  glob = require('glob'),
  path = require('path'),
  pactFiles = [],
  PactParser = require('./src/main.js');

if (!argv.path) {
  throw new Error('Please specify path to pact files with `--path <path_to_files>` argument.');
}

// Read the pact files into array
glob.sync(argv.path).forEach(function (file) {
  pactFiles.push(require(path.resolve(file)));
});

PactParser(pactFiles, argv.port);


