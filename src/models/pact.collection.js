'use strict';

var Pact = require('./pact.js');

function PactCollection(pactFiles) {
  this.pacts = pactFiles.map(function (pactFile) {
    return new Pact(pactFile);
  });
}

PactCollection.prototype.match = function (request) {
  var result, i;
  
  for( i = 0 ; i < this.pacts.length; i++ ) {
		    result = this.pacts[i].match(request);
		    if (result) return result;
	  }
  return;
};

module.exports = PactCollection;