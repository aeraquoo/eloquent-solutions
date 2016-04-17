var assert = require("chai").assert;

var deepEqual = require("../04_deep_comparison");

describe("Deep Comparison", function() {

  describe("deepEqual", function() {
    var obj   = {here: {is: "an"}, object: 2};
    var copy  = {here: {is: "an"}, object: 2};
    var other = {here: 1, object: 2};

    it("confirms obj equal to obj", function() {
      assert.isTrue(deepEqual(obj, obj));
    });

    it("confirms obj equal to copy", function() {
      assert.isTrue(deepEqual(obj, copy));
    });

    it("denies obj equal to other", function() {
      assert.isFalse(deepEqual(obj, other));
    });

  });

});
