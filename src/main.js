'use strict';

var pactConfig = require('../pact.config.json'),
  express = require('express'),
  bodyParser = require('body-parser'),
  app = express(),
  PactCheckerMiddleware = require('./middleware/pact.checker.js');

function PactParser(pactFiles, port) {
  port = port || pactConfig.PORT;
  app.set('port', port);
  
  var options = {
    // force not to parse url get query part
    extended: false
  };
  app.use(bodyParser.json(options));
  app.use(PactCheckerMiddleware(pactFiles));
  
  return app;
} 

module.exports = PactParser;