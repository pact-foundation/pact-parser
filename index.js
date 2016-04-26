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

//Lets require/import the HTTP module
var http = require('http');

//We need a function which handles requests and send response
function handleRequest(request, response) {
  response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(pactConfig.PORT, function () {
  //Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", pactConfig.PORT);
});


