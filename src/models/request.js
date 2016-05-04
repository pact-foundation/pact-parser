'use strict';

var _ = require('underscore');

function Request(options) {
    this.method = options.method.toLowerCase();
    this.path = options.path;
    this.query = options.query;
    this.headers = options.headers;
    this.body = options.body;
};

Request.prototype.match = function (request) {
    // todo throw an error if request is not an erorr
    return _.isEqual(this.method, request.method.toLowerCase()) &&
           _.isEqual(this.path, request.path) &&
           _.isEqual(this.query, request.query) &&
           _.isEqual(this.headers, request.headers) &&
           _.isEqual(this.body, request.body);
}

module.exports = Request;