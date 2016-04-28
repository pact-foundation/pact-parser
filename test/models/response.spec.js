'use strict';

var expect = require('chai').expect,
    Response = require('../../src/models/response.js');

describe('Models', function () {

    describe('Response', function () {

        it('should be defined', function () {
            expect(Response).to.be.a('function');
        });


        describe(' instance should expose public api', function () {
            var instance,
                options = {
                    status: 200,
                    headers: { test: 123 },
                    body: { test: 123 }
                };

            beforeEach(function () {
                instance = new Response(options);
            });

            it('.status', function () {
                expect(instance.status).to.equal(options.status);
            });
            
            it('.headers', function () {
                expect(instance.headers).to.deep.equal(options.headers);
            });
            
            it('.body', function () {
                expect(instance.body).to.deep.equal(options.body);
            });
        });




    });

});