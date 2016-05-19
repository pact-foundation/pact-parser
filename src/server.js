'use strict';

function PactRunnerServer(pactFiles, port) {
  var http = require('http'),
    app = require('./main.js')(pactFiles, port),
    log = require('./logger.js');

  /*eslint no-console: 0 */

  var startPort = app.get('port');
  http.createServer(app).listen(startPort, function () {
    log.info('Server listening on: http://localhost:%s', startPort);
  });
}

module.exports = PactRunnerServer;