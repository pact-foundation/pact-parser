'use strict';

var _ = require('underscore');

function Request(options) {
  this.method = options.method && options.method.toLowerCase();
  this.path = options.path;
  this.query = options.query || {};
  this.headers = options.headers || {};
  this.body = options.body || {};
}

Request.prototype.match = function (request) {
  if (request.constructor !== Request) {
    request = new Request(request);
  }

  var isMethodTheSame = request.method && request.method.toLowerCase();
  isMethodTheSame = _.isEqual(this.method, isMethodTheSame);

  return isMethodTheSame &&
        _.isEqual(this.path, request.path) &&
        _.isEqual(this.query, request.query) &&
        _.isEqual(this.headers, request.headers) &&
        _.isEqual(this.body, request.body);
};

module.exports = Request;