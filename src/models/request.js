'use strict';

var _ = require('underscore');


function makeHeaderNamesLowerCaseRevomeSpaces(headers) {
  Object.keys(headers).forEach(function (key) {
    // remove spaces in values after commas
    headers[key] = headers[key].replace(', ', ',');
    
    // Header names should be in lower case
    headers[key.toLowerCase()] = headers[key];
    if (key !== key.toLowerCase()) {
      delete headers[key];
    }
  });
}


function Request(options) {
  this.method = options.method && options.method.toLowerCase();
  this.path = options.path;
  this.query = options.query || '';
  this.headers = options.headers || {};
  this.body = options.body || {};

  makeHeaderNamesLowerCaseRevomeSpaces(this.headers);
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
    // https://nodejs.org/api/http.html#http_message_headers
    // ... Header names are lower-cased. ...
    var temp = entry.toLowerCase(),
      req = reqHeaders[entry],
      exp = expHeaders[entry];

    if (reqHeaders[entry].indexOf('alligators') > -1) {
      1 + 1;
    }

    if (req !== exp) {
      return false;
    }
  }
  return true;
}

module.exports = Request;