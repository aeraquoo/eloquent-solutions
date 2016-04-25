var assert = require('chai').assert;

var reliableMultiply = require('../01_retry').reliableMultiply;

describe("Retry", function() {
  describe("reliableMultiply", function() {
    
    it("works on example given (8x8)", function() {
      var actual = reliableMultiply(8,8);
      var expected = 64;
      assert.equal(actual, expected);
    });
  });
});
