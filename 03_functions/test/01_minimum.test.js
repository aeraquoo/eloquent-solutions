var assert = require('chai').assert;
var min = require('../01_minimum');

describe('minimum', function() {
  it('should return the minimum of two numbers', function() {
    assert.equal(min(0,1), 0);
    assert.equal(min(1,0), 0);
    assert.equal(min(0.5, -1), -1);
  });
});
