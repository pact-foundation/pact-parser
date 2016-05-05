'use strict';

var Interaction = require('./interaction');

function Pact(options) {
	this.provider = options.provider;
	this.consumer = options.consumer;
	this.interactions = options.interactions.map(
		function (interaction) {
			return new Interaction(interaction);
		}
	);
	this.metadata = options.metadata;
}

Pact.prototype.match = function (request) {
	var result, i;
	for (i = 0; i < this.interactions.length; i++) {
		  result = this.interactions[i].match(request);
		  if (result) return result;
	}
  return result;
};

module.exports = Pact; 