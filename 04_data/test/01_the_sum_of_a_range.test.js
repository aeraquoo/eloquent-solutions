var assert = require('chai').assert;
var range = require('../01_the_sum_of_a_range').range;
var sum = require('../01_the_sum_of_a_range').sum;

describe("The Sum of a Range", function() {
  describe("sum", function() {
    it("sums all positives", function() {
      assert.strictEqual(sum([1,2,3]), 6);
    });
    it("sums some negatives", function() {
      assert.strictEqual(sum([1,2,-3]), 0);
    });
    it("throws error on empty array", function() {
      assert.throws(sum.bind(sum, []), Error, "Cannot sum an empty array.");
    });
    it("can't sum strings", function() {
      assert.throws(sum.bind(null, [1,2,3,'abc']), Error, '"abc" is not a number, cannot sum.');
    });
  });
  describe("range", function() {
    it("works with good 'ol range(1,10)", function() {
      assert.deepEqual(range(1,10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it("works with negative steps", function() {
      var out = range(10, 1, -1);
      var expected  = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
      assert.deepEqual(out, expected);
    });
    it("returns range of length one when start==end", function() {
      assert.deepEqual(range(1,1), [1]);
    });
    it("doesn't work with fractional steps", function() {
      assert.throws(range.bind(null, 0,1,0.5), Error, "Step argument must be a non-zero integer");
    });
    it("can't go backwards with a positive step size", function() {
      assert.throws(range.bind(null, 10, 1), Error, "Cannot get from 10 to 1 in steps of 1");
    });
  });
  describe("sum of range", function() {
    it("both functions work together", function() {
      assert.strictEqual(sum(range(1,10)), 55);
    });
  });
});
