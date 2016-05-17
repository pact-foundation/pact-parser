'use strict';

var _ = require('underscore'),
  helpers = require('../helpers/request.helpers.js'),
  querystring = require('querystring');

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

  var expQuery = decodeURIComponent(helpers.parseQueryParams(this.query)),
    reqQuery = decodeURIComponent(helpers.parseQueryParams(request.query));

  return isMethodTheSame &&
    _.isEqual(this.path, request.path) &&
    _.isEqual(expQuery, reqQuery) &&
    helpers.areAllExpectationHeadersPesentInRequest(this.headers, request.headers) &&
    _.isEqual(this.body, request.body);
};

module.exports = Request;