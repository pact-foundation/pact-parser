'use strict';

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: 'pact-parser'});

// If we would need we can configure the logging here

module.exports = log;