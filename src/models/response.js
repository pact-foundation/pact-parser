'use strict';

module.exports = function Response(options) {
    this.status = options.status;
    this.headers = options.headers;
    this.body = options.body;
};