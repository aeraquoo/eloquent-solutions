var assert = require('chai').assert;

var Vector = require('../01_a_vector_type').Vector;
var euclideanDistance = require('../01_a_vector_type').euclideanDistance;

describe('A Vector Type', function () {

  describe('euclideanDistance', function () {
  
    it('works on 3,4,5 triangle', function () {
      var actual = euclideanDistance(0, 0, 3, 4);
      var expected = 5;
      assert.equal(actual, expected);
    });
  
  });
  describe('Vector', function () {
  
    it('plusses', function () {
      var actual = new Vector(1, 2).plus(new Vector(2, 3));
      var expected = new Vector(3, 5);
      assert.deepEqual(actual, expected);
    });
  
    it('minuses', function () {
      var actual = new Vector(1, 2).minus(new Vector(2, 3));
      var expected = new Vector(-1, -1);
      assert.deepEqual(actual, expected);
    });

    it('gets length', function () {
      assert.deepEqual(new Vector(3, 4).length, 5);
    });

  });

});
