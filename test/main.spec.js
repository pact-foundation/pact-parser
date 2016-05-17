'use strict';

var request = require('supertest'),
  glob = require('glob'),
  path = require('path'),
  config = require('../pact.config.json'),
  app = require('../src/main.js'),
  pactFiles = [];
  
glob.sync(config.test.supertest.path).forEach(function (file) {
  pactFiles.push(require(path.resolve(file)));
});
  
app = app(pactFiles);
  
describe('GET /alligators/Mary', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/alligators/Mary')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
  
