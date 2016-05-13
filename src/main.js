'use strict';

var pactConfig = require('../pact.config.json'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  PactCollection = require('./models/pact.collection.js');

function PactParser(pactFiles, port) {
  // Digest the pact files into array of pact objects
  var pacts = new PactCollection(pactFiles);

  // Spawn the Node server  
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

  /*eslint no-console: 0 */

  var startPort = port || pactConfig.PORT;
  return app.listen(startPort, function () {
    console.log('Server listening on: http://localhost:%s', startPort);
  });
} 

module.exports = PactParser;