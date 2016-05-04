'use strict';

var expect = require('chai').expect,
  Interaction = require('../../src/models/interaction.js'),
  InteractionMock = require('./mocks/interaction.mock.js'),
  Request = require('../../src/models/request'),
  Response = require('../../src/models/response');

describe('Models', function () {

    describe('Interaction', function () {

        it('should be defined', function () {
            expect(Interaction).to.be.a('function');
        });

        describe(' instance should expose public api', function () {
            var instance,
                options = InteractionMock;

            beforeEach(function () {
                instance = new Interaction(options);
            });

            it('.provider_state', function () {
                expect(instance.provider_state).to.equal(options.provider_state.toLowerCase());
            });

            it('.descriptions', function () {
                expect(instance.descriptions).to.equal(options.descriptions);
            });

            it('.request', function () {
                var temp = new Request(options.request);
                expect(instance.request).to.deep.equal(temp);
            });

            it('.response', function () {
                var temp = new Response(options.response);
                expect(instance.response).to.deep.equal(temp);
            });
            
            it('.match', function () {
                expect(instance.match).to.be.a('function');
            });
        });
    });
});