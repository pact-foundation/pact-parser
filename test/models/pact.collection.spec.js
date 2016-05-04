'use strict';

var expect = require('chai').expect,
  PactCollection = require('../../src/models/pact.collection.js'),
  Pact = require('../../src/models/pact.js'),
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

  });
});