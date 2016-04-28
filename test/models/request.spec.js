'use strict';

var expect = require('chai').expect,
    Request = require('../../src/models/request.js');

describe('Models', function () {

    describe('Request', function () {

        it('should be defined', function () {
            expect(Request).to.be.a('function');
        });


        describe(' instance should expose public api', function () {
            var instance,
                options = {
                    method: 'GET',
                    url: '/some/url',
                    query: { test: 12 },
                    headers: { test: 12 },
                    body: { test: 12 }
                };

            beforeEach(function () {
                instance = new Request(options);
            });

            it('.method', function () {
                expect(instance.method).to.equal(options.method.toLowerCase());
            });

            it('.path', function () {
                expect(instance.path).to.equal(options.path);
            });

            it('.query', function () {
                expect(instance.query).to.deep.equal(options.query);
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