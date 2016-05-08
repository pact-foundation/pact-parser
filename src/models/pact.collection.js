'use strict';

var Pact = require('./pact.js'),
  requestMatchHelper = require('../helpers/request.match.js');

function PactCollection(pactFiles) {
  this.pacts = pactFiles.map(function (pactFile) {
    return new Pact(pactFile);
  });
}

PactCollection.prototype.match = function (request) {
  return requestMatchHelper(this.pacts, request);
};

module.exports = PactCollection;