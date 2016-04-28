'use strict';

var expect = require('chai').expect,
    Interaction = require('../../src/models/interaction.js'),
    Request = require('../../src/models/request'),
    Response = require('../../src/models/response'),
    ResponseTransformer = require('../../src/helpers/request.transformer.js');

describe('Models', function () {

    describe('Interaction', function () {

        it('should be defined', function () {
            expect(Interaction).to.be.a('function');
        });

        describe(' instance should expose public api', function () {
            var instance,
                options = {
                    provider_state: "test",
                    description: "test",
                    request: {method: "DELETE"},
                    response: {body: {test: 123}}
                };

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
                expect(instance.request).to.deep.equal(options.request);
            });

            it('.response', function () {
                expect(instance.response).to.deep.equal(options.response);
            });
        });
       
        describe('during construction', function () {
            
            it('should call ResponseTransformer', function (done) {
                sinon.spy(ResponseTransformer);
                new Interaction({});
                expect(ResponseTransformer,called).to.be.truthy();                
            });
            
        });
        
    });
});