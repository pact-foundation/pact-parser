'use strict';

function Response(options) {
  this.status = options.status;
  this.headers = options.headers;
  this.body = options.body;
}

module.exports = Response; 