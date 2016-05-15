'use strict';

var expect = require('chai').expect,
  RequestsMatch = require('../../src/helpers/requests.match.js'),
  Pact = require('../../src/models/pact.js'),
  PactMock = require('../models/mocks/pact.mock.js');

describe('Helpers', function () {
  describe('RequestsMatch', function () {
    var interations,
      options = PactMock;

    beforeEach(function () {
      var temp = new Pact(options);
      interations = [temp];
    });

    it('should return undefined if no request matches', function () {
      expect(RequestsMatch(interations, {})).to.equal(undefined);
    });

    it('should return response if request is matched', function () {
      var temp = PactMock.interactions[0],
        res = RequestsMatch(interations, temp.request);
      expect(res.status).to.equal(temp.response.status);
    });
  });
});