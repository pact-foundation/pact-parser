'use strict';

var PactCollection = require('../models/pact.collection.js');

var PactChecker = function (pactFiles) {
  // Digest the pact files into array of pact objects
  var pacts = new PactCollection(pactFiles);

  return function pactChecker(req, res) {
    var response = pacts.match(req);
    if (response) {
      res.status(response.status).send(response.body);
    } else {
      res.status(500).send('No interaction found for your request');
    }
  };
};

module.exports = PactChecker;