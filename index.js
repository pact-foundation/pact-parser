'use strict';

var argv = require('yargs').argv,
  glob = require('glob'),
  path = require('path'),
  pactsFiles = [],
  pacts = [];

if (!argv.path) {
  throw new Error('Please specify path to pact files with `--path <path_to_files>` argument.');
}

// Read the pact files into array
glob.sync(argv.path).forEach(function (file) {
  pactsFiles.push(require(path.resolve(file)));
});

// Digest the pact files into array of pact objects
var PactObject = require('./src/models/pact.js');
pactsFiles.forEach(function (pactFile) {
  pacts.push(new PactObject(pactFile));
}); 

// Spawn the express server

