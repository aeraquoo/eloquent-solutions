var assert = require('chai').assert;
var flatten = require('../01_flattening');

describe("Flattening", function() {
  describe("flatten", function() {
    it("flattens example array", function() {
      var actual = flatten([[1,2,3], [4,5], [6]]);
      var expected = [1,2,3,4,5,6];
      assert.deepEqual(actual, expected);
    });
  });
});
