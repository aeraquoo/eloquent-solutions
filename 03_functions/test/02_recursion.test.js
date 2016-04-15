var assert = require('chai').assert;
var isEven = require('../02_recursion');

describe('isEven', function() {
  it('works on the base cases, 0 and 1', function() {
    assert.equal(isEven(0), true);
    assert.equal(isEven(1), false);
  });
  it('works on larger numbers (recursively)', function() {
    assert.equal(isEven(50), true);
    assert.equal(isEven(75), false);
  });
  it('works on negative numbers', function() {
    assert.equal(isEven(-1), false);
    assert.equal(isEven(-2), true);
  });
});
