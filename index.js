'use strict';

var argv = require('yargs').argv,
  glob = require('glob'),
  path = require('path'),
  pactFiles = [],
  PactParserServer = require('./src/server.js');

if (!argv.path) {
  throw new Error('Please specify path to pact files with `--path <path_to_files>` argument.');
}

// Read the pact files into array
console.log('Parsing files:');
glob.sync(argv.path).forEach(function (file) {
  console.log(file);
  pactFiles.push(require(path.resolve(file)));
});

PactParserServer(pactFiles, argv.port);


