'use strict';

var Request = require('./request'),
    Response = require('./response'),
    ResponseTransformer = require('../helpers/request.transformer.js');

function Interaction(options) {
    options.request = ResponseTransformer(options.request);

    this.provider_state = options.provider_state;
    this.description = options.description;
    this.request = new Request(options.request);
    this.response = new Response(options.response);
};

Interaction.prototype.match = function (request) {
    if (this.request.match(request)) {
        return this.response;
    }
    return;
}

module.exports = Interaction;

