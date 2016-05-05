'use strict';

var expect = require('chai').expect,
  RequestTransformer = require('../../src/helpers/request.transformer.js');

describe('Helpers', function () {
  describe('RequestTransformer', function () {
    var request = {
      method: 'GET',
      path: '/some/url',
      query: { test: 12 },
      headers: { test: 12 },
      body: { test: 12 }
    };

    it('should parse data from request', function () {
      var e = request;
      var actual = RequestTransformer(request);
      expect(actual.method).to.equal(e.method);
      expect(actual.path).to.equal(e.path);
      expect(actual.query).to.deep.equal(e.query);
      expect(actual.headers).to.deep.equal(e.headers);
      expect(actual.body).to.deep.equal(e.body);
    });
  });
});