'use strict';

var Request = require('./request');
var Response = require('./response');

function Interaction(options) {
    this.provider_state = options.provider_state;
    this.description = options.description;
    this.request = new Request(options.request);
    this.response = new Response(options.response);
};

// define Interaction methods in prototype

module.exports = Interaction;

