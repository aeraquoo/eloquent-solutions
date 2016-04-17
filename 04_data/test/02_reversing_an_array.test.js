var assert = require('chai').assert;

var reversing = require('../02_reversing_an_array');
var reverseArray = reversing.reverseArray;
var reverseArrayInPlace = reversing.reverseArrayInPlace;

// Wrap the array in a function so it will act immutable between test cases
function sArray() {
  return ["A", "B", "C"];
}

function nArray() {
  return [1, 2, 3, 4, 5];
}

var reversedStringArray = ["C", "B", "A"];
var reversedNumberArray = [5, 4, 3, 2, 1];

describe("Reversing an Array", function() {

  describe("reverseArray", function() {

    it("reverses string array", function() {
      assert.deepEqual(reverseArray(sArray()), reversedStringArray);
    });

    it("reverses number array", function() {
      assert.deepEqual(reverseArray(nArray()), reversedNumberArray);
    });

    it("works with empty array", function() {
      assert.deepEqual(reverseArray([]), []);
    });

    it("works with array of length one", function() {
      assert.deepEqual(reverseArray([1]), [1]);
    });

  });

  describe("reverseArrayInPlace", function() {

    it("reverses string array (of odd length)", function() {
      var arr = sArray();
      reverseArrayInPlace(arr);
      assert.deepEqual(arr, reversedStringArray);
    });

    it("reverses number array (of odd length)", function() {
      var arr = nArray();
      reverseArrayInPlace(arr);
      assert.deepEqual(arr, reversedNumberArray);
    });

    it("works with even-lengthed array too", function() {
      var arr = [1,2,3,4];
      reverseArrayInPlace(arr);
      assert.deepEqual(arr, [4,3,2,1]);
    });

    it("works with empty array", function() {
      var arr = [];
      reverseArrayInPlace(arr);
      assert.deepEqual(arr, []);
    });

    it("works with array of length one", function() {
      var arr = [1];
      reverseArrayInPlace(arr);
      assert.deepEqual(arr, [1]);
    });

  });

});
