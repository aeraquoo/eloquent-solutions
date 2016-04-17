var assert = require('chai').assert;

var listModule = require('../03_a_list');

var arrayToList = listModule.arrayToList;
var listToArray = listModule.listToArray;
var prepend = listModule.prepend;
var nth = listModule.nth;

describe("A List", function() {
  var list = {
    value: 10,
    rest: {
      value: 20,
      rest: {
        value: 30,
        rest: null
      }
    }
  };

  describe("arrayToList", function() {

    it("converts example", function() {
      assert.deepEqual(arrayToList([10, 20]), {
        value: 10,
        rest: {
          value: 20,
          rest: null
        }
      });
    });
  });

  describe("listToArray", function() {

    it("does not modify list in place", function() {
      var listString = JSON.stringify(list);
      listToArray(list);
      var listStringAfter = JSON.stringify(list);

      assert.equal(listStringAfter, listString);
    });

    it("converts example", function() {
      assert.deepEqual(listToArray(list), [10, 20, 30]);
    });

  });

  describe("prepend", function() {

    it("does not modify the list", function() {
      var beforeJSON = JSON.stringify(list);
      prepend(42, list);
      var afterJSON = JSON.stringify(list);

      assert.equal(afterJSON, beforeJSON);
    });

    it("works with the example given", function() {
      var expected = {
        value: 10,
        rest: {
          value: 20,
          rest: null
        }
      };

      assert.deepEqual(prepend(10, prepend(20, null)), expected);
    });
  });

  describe("nth", function() {

    it("gets the first", function() {
      assert.equal(nth(list, 0), 10);
    });

    it("gets the second", function() {
      assert.equal(nth(list, 1), 20);
    });

    it("handles index too high", function() {
      assert.equal(nth(list, 3), undefined);
    });

    it("handles negative index", function() {
      assert.equal(nth(list, -1), undefined);
    });

  });

});
