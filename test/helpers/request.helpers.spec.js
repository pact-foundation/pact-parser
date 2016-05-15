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
    
    
    describe('what?', function () {
      
    });
    
  });
});