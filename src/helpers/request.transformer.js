'use strict';

function RequestTransformer(request) {
  var result = {};
  result.method = request.method;
  result.path = request.url;
  result.query = request.query;
  result.headers = request.headers;
  result.body = request.body;
  return result;
}

module.exports = RequestTransformer;