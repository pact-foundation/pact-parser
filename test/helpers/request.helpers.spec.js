'use strict';

var expect = require('chai').expect,
  RequestHelpers = require('../../src/helpers/request.helpers.js');

describe('Helpers', function () {
  describe('Request Helpers', function () {
    describe('.makeHeaderNamesLowerCaseRemoveSpaces', function () {
      var fn = RequestHelpers.makeHeaderNamesLowerCaseRemoveSpaces,
        headers;


      beforeEach(function () {
        headers = { 'ACCepT': 'qwe, 123, text/html' };
        fn(headers);
      });


      it('result should contain lower case keys', function () {
        expect(Object.keys(headers)[0] == 'accept').to.be.truth;
      });


      it('removes spaces after commas in values', function () {
        expect(Object.keys(headers)[0].indexOf(' ')).to.equal(-1);
      });


    });
    describe('.areAllExpectationHeadersPesentInRequest', function () {

      var fn = RequestHelpers.areAllExpectationHeadersPesentInRequest,
        expHeaders,
        reqHeaders;

      beforeEach(function () {
        expHeaders = { 'accept': 'test' },
          reqHeaders = { 'user-agent': 'testingSourcer', 'accept': 'test' };
      });

      it('return true if req contains only listed headers', function () {
        delete reqHeaders['user-agent'];
        expect(fn(expHeaders, reqHeaders)).to.be.truth;
      });

      it('return true if req contains listed headers', function () {
        expect(fn(expHeaders, reqHeaders)).to.be.truth;
      });

      it('return false if req doesn\'t contain listed headers', function () {
        delete reqHeaders['accept'];
        expect(fn(expHeaders, reqHeaders)).to.be.false;
      });


      it('returns true if exp headers object is empty', function () {
        delete expHeaders['accept'];
        expect(fn(expHeaders, reqHeaders)).to.be.truth;
      });


    });
    describe('.parseQueryParams', function () {
      var fn = RequestHelpers.parseQueryParams,
        queryParams, expected, actual;

      it('parse query parameters object into string', function () {
        queryParams = { name: 'test', page: '1', offset: 10 };
        expected = 'name=test&page=1&offset=10';
        actual = fn(queryParams);
        expect(actual).to.equal(expected);
      });

      it('should return empty string if query params object is emtpy', function () {
        queryParams = {};
        expected = '';
        actual = fn(queryParams);
        expect(actual).to.equal(expected);
      });

      it('should return passed string', function () {
        queryParams = 'name=test&page=1&offset=10';
        expected = 'name=test&page=1&offset=10';
        actual = fn(queryParams);
        expect(actual).to.equal(expected);
      });

      it('should encode query params object parts', function () {
        queryParams = { name: 'test+name', page: '1', offset: 10 };
        expected = 'name=test%2Bname&page=1&offset=10';
        actual = fn(queryParams);
        expect(actual).to.equal(expected);
      });




    });
  });
});