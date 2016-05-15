'use strict';

var _ = require('underscore'),
  helpers = require('../helpers/request.helpers.js');

function Request(options) {
  this.method = options.method && options.method.toLowerCase();
  this.path = options.path;
  this.query = options.query || '';
  this.headers = options.headers || {};
  this.body = options.body || {};

  helpers.makeHeaderNamesLowerCaseRemoveSpaces(this.headers);
}

Request.prototype.match = function (request) {
  if (request.constructor !== Request) {
    request = new Request(request);
  }

  var isMethodTheSame = request.method && request.method.toLowerCase();
  isMethodTheSame = _.isEqual(this.method, isMethodTheSame);

  return isMethodTheSame &&
    _.isEqual(this.path, request.path) &&
    _.isEqual(decodeURIComponent(this.query), decodeURIComponent(request.query)) &&
    // https://github.com/realestate-com-au/pact/wiki/Matching-gotchas
    areAllExpectationHeadersPesentInRequest(this.headers, request.headers) &&
    _.isEqual(this.body, request.body);
};

function areAllExpectationHeadersPesentInRequest(expHeaders, reqHeaders) {
  for (var entry in expHeaders) {
    if (reqHeaders[entry] !== expHeaders[entry]) {
      return false;
    }
  }
  return true;
}

module.exports = Request;