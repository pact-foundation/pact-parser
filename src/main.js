'use strict';

var pactConfig = require('../pact.config.json'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  PactCheckerMiddleware = require('./middleware/pact.checker.js');

function PactParser(pactFiles, port) {
  port = port || pactConfig.PORT;
  app.set('port', port);
  
  app.use(bodyParser.json());
  app.use(PactCheckerMiddleware(pactFiles));
  
  return app;
} 

module.exports = PactParser;