var assert = require('chai').assert;

var every = require('../04_every_and_then_some').every;
var some = require('../04_every_and_then_some').some;

describe('Every and then Some', function () {

  describe('every', function () {
  
    it('works with true example', function () {
      assert.equal(every([NaN, NaN, NaN], isNaN), true);
    });

    it('works with false example', function () {
      assert.equal(every([NaN, NaN, 4], isNaN), false);
    });
  
  });

  describe('some', function () {
  
    it('works with true example', function () {
      assert.equal(some([NaN, 3, 4], isNaN), true);
    });

    it('works with false example', function () {
      assert.equal(some([2, 3, 4], isNaN), false);
    });
  
  });

});
