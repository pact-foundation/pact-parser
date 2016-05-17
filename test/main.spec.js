'use strict';

var request = require('supertest'),
  expect = require('chai').expect,
  glob = require('glob'),
  path = require('path'),
  config = require('../pact.config.json'),
  app = require('../src/main.js'),
  pactFiles = [];
  
glob.sync(config.test.supertest.path).forEach(function (file) {
  pactFiles.push(require(path.resolve(file)));
});
  
app = app(pactFiles);
  
describe.only('GET /alligators/Mary', function() {
  it('respond with resouce with name Mary', function(done) {
    request(app)
      .get('/alligators/Mary/found')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        expect(res.body.name).to.equal('Mary');
      })
      .expect(200, done);
  });  
  
  it('respond with 404', function(done) {
    request(app)
      .get('/alligators/Mary/not-found')
      .set('Accept', 'application/json')
      .expect(404, done);
  });
  
  it('respond with 500', function(done) {
    request(app)
      .get('/alligators/Mary/server-error')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(500, done);
  });
  
  it('respond with 500 when no request found', function(done) {
    request(app)
      .get('/alligators/Angello')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(function(res) {
        var expected = { error: 'No interaction found for your request'};
        expect(res.body.error).to.equal(expected.error);
      })
      .expect(500, done);
  });
});
  
