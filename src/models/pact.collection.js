'use strict';

var Pact = require('./pact.js'),
  requestsMatchHelper = require('../helpers/requests.match.js');

function PactCollection(pactFiles) {
  this.pacts = pactFiles.map(function (pactFile) {
    return new Pact(pactFile);
  });
}

PactCollection.prototype.match = function (request) {
  return requestsMatchHelper(this.pacts, request);
};

module.exports = PactCollection;