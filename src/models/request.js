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

  function parseQueryParams(queryParams) {
    queryParams = queryParams ? queryParams : {};
    if (typeof (queryParams) == 'object') {
      var str = [];
      for (var p in queryParams)
        if (queryParams.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) +
            '=' +
            encodeURIComponent(queryParams[p]));
        }
      return str.join('&');
    }
    return queryParams;
  }

  var expQuery = decodeURIComponent(this.query),
    reqQuery = decodeURIComponent(request.query),
    queryEquals = _.isEqual(parseQueryParams(expQuery), parseQueryParams(reqQuery));

  return isMethodTheSame &&
    _.isEqual(this.path, request.path) &&
    queryEquals &&
    helpers.areAllExpectationHeadersPesentInRequest(this.headers, request.headers) &&
    _.isEqual(this.body, request.body);
};

module.exports = Request;