'use strict';

exports.Request = function (options) {
    this.method = options.method.toLowerCase();
    this.path = options.path;
    this.query = options.query;
    this.headers = options.headers;
    this.body = options.body;
};