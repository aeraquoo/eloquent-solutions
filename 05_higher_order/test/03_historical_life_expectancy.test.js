var assert = require('chai').assert;
var historicalLifeExpectancy
  = require('../03_historical_life_expectancy');
var average = historicalLifeExpectancy.average;
var groupBy = historicalLifeExpectancy.groupBy;

describe('Historical Life Expectency', function() {

  describe('average', function() {

    it('averages', function() {
      assert.equal(average([1,2,3,4]), 2.5);
    });

  });

  describe('groupBy', function() {

    it('groups by Math.floor', function() {
      var array = [0.0, 0.33, 0.67, 1.0, 1.33, 1.67, 2.0, 2.33, 2.67, 3.0];
      var actual = groupBy(array, Math.floor);
      var expected = {
        0: [0.0, 0.33, 0.67],
        1: [1.0, 1.33, 1.67],
        2: [2.0, 2.33, 2.67],
        3: [3.0]
      };
      assert.deepEqual(actual, expected);
    });

    it('groups by first letter', function() {
        var lorem = ['vero', 'eos', 'et', 'accusam', 'et', 'justo', 'duo',
          'gubergren'];

        function first(word) {
          return word[0];
        }  

        var expected = {
          'a': ['accusam'],
          'd': ['duo'],
          'e': ['eos', 'et', 'et'],
          'j': ['justo'],
          'g': ['gubergren'],
          'v': ['vero']
        };

        var actual = groupBy(lorem, first);

        assert.deepEqual(actual, expected);
    });

  });

});
