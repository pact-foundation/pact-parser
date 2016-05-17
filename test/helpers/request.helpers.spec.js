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
        expHeaders;
        
        it('parse query parameters object into string', function () {
          
        });
        
        it('should return empty string if query params object is emtpy', function () {
          
        });
        
        it('should return passed string', function () {
          
        });
        
        it('should encode query params object parts', function () {
          
        });
        
        
        
        
    });
    

  });
});