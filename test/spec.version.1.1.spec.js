// read files
// parse them

'use strict';

var expect = require('chai').expect,
  glob = require('glob'),
  path = require('path'),
  Request = require('../src/models/request');

describe('Pact specification v.1.1 compliance', function () {
  // todo extract this into some kind of configuration
  var pactSpecPath = 'test/specification/version.1.1';

  describe('Request', function () {
    var requestFiles = [],
      requestFilesPath = pactSpecPath + '/request/**/*.json';
    glob.sync(requestFilesPath).forEach(function (file) {
      requestFiles.push(require(path.resolve(file)));
    });

    requestFiles.forEach(function (spec) {
      it(spec.comment, function () {
        if(spec.comment == "Queries are not the same - values are in different order") {
          1+1;
        }
        var exp = new Request(spec.expected),
          act = new Request(spec.actual);
        expect(exp.match(act)).to.equal(spec.match);
      });
    });
  });

});