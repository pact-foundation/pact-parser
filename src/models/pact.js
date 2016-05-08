'use strict';

var Interaction = require('./interaction'),
  requestMatchHelper = require('../helpers/request.match.js');

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
  return requestMatchHelper(this.interactions, request);  
};

module.exports = Pact; 