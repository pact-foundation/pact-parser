'use strict';

var Request = require('./request');
var Response = require('./response');
var ResponseTransformer = require('../helpers/request.transformer.js');

function Interaction(options) {
    options.request = ResponseTransformer(options.request);
    
    this.provider_state = options.provider_state;
    this.description = options.description;
    this.request = new Request(options.request);
    this.response = new Response(options.response);
};

// define Interaction methods in prototype

module.exports = Interaction;

