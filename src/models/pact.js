'use strict';

var Interaction = require('./interaction');

module.exports = function Pact(options) {
	this.provider = options.provider;
	this.consumer = options.consumer;
	this.interactions = options.interactions.map(
		function (interaction) {
			return new Interaction(interaction);
		}
	);
	this.metadata = options.metadata;
};