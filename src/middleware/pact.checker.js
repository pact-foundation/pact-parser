'use strict';

var PactCollection = require('../models/pact.collection.js'),
  log = require('../logger.js');

var PactChecker = function (pactFiles) {
  // Digest the pact files into array of pact objects
  var pacts = new PactCollection(pactFiles);

  return function pactChecker(req, res) {
    var response = pacts.match(req);
    
    log.info('=> ' + req.method + ' ' + req.path);
    log.debug(req.query);
    log.debug(req.headers);
    log.debug(req.body);
    
    if (response) {
      log.info('<= ' + response.status);
      log.debug(response);
      res.status(response.status).send(response.body);
    } else {
      var error = { error: 'No interaction found for your request' };
      log.info('<= 500 ' + error.error);
      res.status(500).json(error);
    }
  };
};

module.exports = PactChecker;