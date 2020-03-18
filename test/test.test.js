var expect = require('chai').expect;
var test = require('../test');

describe('Test', function() {
  describe('#methodOne', function() {
    it('should return true when the value is true', function() {

        expect(test()).to.be.true;
    });
  });
});