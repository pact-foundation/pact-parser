'use strict';

exports.Response = function (options) {
    this.status = options.status;
    this.headers = options.headers;
    this.body = options.body;
};