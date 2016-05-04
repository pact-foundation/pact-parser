'use strict';

var expect = require('chai').expect,
  Interaction = require('../../src/models/interaction.js'),
	Pact = require('../../src/models/pact.js'),
	PactMock = require('./mocks/pact.mock.js');


describe('Models', function () {

		describe('Pact', function () {

		it('should be defined', function () {
			expect(Pact).to.be.a('function');
		});

		describe(' instance should expose public api', function () {
			var instance,
				options = PactMock;

			beforeEach(function () {
				instance = new Pact(options);
			});

			it('.provider', function () {
				expect(instance.provider).to.equal(options.provider);
			});

			it('.consumer', function () {
				expect(instance.consumer).to.equal(options.consumer);
			});

			it('.interactions', function () {
				var temp = new Interaction(options.interactions[0]);
				expect(instance.interactions[0]).to.deep.equal(temp);
			});

			it('.metadata', function () {
				expect(instance.metadata).to.deep.equal(options.metadata);
			});

			it('.match', function () {
				expect(instance.match).to.be.a('function');
			});
		});

		describe('public API', function () {

      var instance,
        pactFiles = [PactMock];

      beforeEach(function () {
        instance = new Pact(PactMock);
      });

      describe('.match', function () {

        it('should return undefined if no request matches', function () {
          expect(instance.match({})).to.equal(undefined);
        });
			});
		});
		});
});