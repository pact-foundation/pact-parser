'use strict';

var argv = require('yargs').argv,
  glob = require('glob'),
  path = require('path'),
  pactFiles = [],
  pacts = [];

if (!argv.path) {
  throw new Error('Please specify path to pact files with `--path <path_to_files>` argument.');
}

// Read the pact files into array
glob.sync(argv.path).forEach(function (file) {
  pactFiles.push(require(path.resolve(file)));
});

// Digest the pact files into array of pact objects
var PactCollection = require('./src/models/pact.collection.js');
pacts = new PactCollection(pactFiles);

// Spawn the Node server
var pactConfig = require('./pact.config.json');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

function pactChecker(req, res) {
  var response = pacts.match(req);
  if (response) {
    res.status(response.status).send(response.body);  
  } else {
    res.status(500).send('No interaction found for your request');
  }  
}

app.use(pactChecker);

/*eslint no-console: ["error", { allow: ["log"] }] */

app.listen(pactConfig.PORT, function () {
  console.log('Server listening on: http://localhost:%s', pactConfig.PORT);
});


