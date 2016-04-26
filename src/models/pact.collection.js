'use strict';

var Pact = require('./pact.js');

function PactCollection(pactFiles) {
  this.pacts = pactFiles.map(function (pactFile) {
    return new Pact(pactFile);
  });
}

PactCollection.prototype.match = function (request) {
  this.pacts.forEach(function (pact) {
      
  });
}

module.exports = PactCollection;