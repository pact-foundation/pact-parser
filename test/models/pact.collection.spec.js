'use strict';

var expect = require('chai').expect,
  PactCollection = require('../../src/models/pact.collection.js'),
  PactMock = require('./mocks/pact.mock.js');


describe('Models', function () {

  describe('PactCollection', function () {

    it('should be defined', function () {
      expect(PactCollection).to.be.a('function');
    });


    describe(' public API should contain', function () {
      var instance,
        pactFiles = [PactMock];

      beforeEach(function () {
        instance = new PactCollection(pactFiles);
      });


      it('.pacts', function () {
        expect(instance.pacts).to.be.a('array');
      });

      it('.match', function () {
        expect(instance.match).to.be.a('function');
      });

    });


    describe('public API', function () {

      var instance,
        pactFiles = [PactMock];

      beforeEach(function () {
        instance = new PactCollection(pactFiles);
      });

      describe('.match', function () {

        it('should return undefined if no request matches', function () {
          expect(instance.match({ method: 'DELETE' })).to.equal(undefined);
        });

        it('should return response of the matching request', function () {
          var temp = PactMock.interactions[0],
            res = instance.match(temp.request);
          expect(res.status).to.equal(temp.response.status);
        });

      });

    });


  });
});