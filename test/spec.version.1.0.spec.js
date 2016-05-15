// read files
// parse them

'use strict';

var expect = require('chai').expect,
  glob = require('glob'),
  path = require('path'),
  Request = require('../src/models/request');

describe('Pact specification v.1.0 compliance', function () {
  // todo extract this into some kind of configuration
  var pactSpecPath = 'testData/pact.spec.v.1.0/';

  describe('Request', function () {
    var requestFiles = [],
      requestFilesPath = pactSpecPath + '/request/**/*.json';
    glob.sync(requestFilesPath).forEach(function (file) {
      requestFiles.push(require(path.resolve(file)));
    });

    requestFiles.forEach(function (spec) {
      it(spec.comment, function () {
        var exp = new Request(spec.expected),
          act = new Request(spec.actual);
        expect(exp.match(act)).to.equal(spec.match);
      });
    });
  });

});