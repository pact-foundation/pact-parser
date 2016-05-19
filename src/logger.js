'use strict';

var bunyan = require('bunyan'),
  config = require('../pact.config.json'),
  argv = require('yargs').argv,
  log = bunyan.createLogger({ name: 'pact-parser' });

// If we would need we can configure the logging here
if (argv.log) {
  var logLevels = ['trace', 'debug', 'info', 'warn', 'error', 'fatal'],
    input = argv.log.toLowerCase();
  if (logLevels.indexOf(input) > -1) {
    log.level(input);
    log.info('Log level set at level ' + input);
  } else {
    log.info('Possible log levels are ' + logLevels);
    throw new Error('Please specify existing logging level!');
  }
} else {
  log.level(config.log.level);
  bunyan.levels;
  log.info('Using default log level ' + log.level());
}

module.exports = log;