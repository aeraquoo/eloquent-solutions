var assert = require('chai').assert;
var historicalLifeExpectancy
  = require('../03_historical_life_expectancy');
var average = historicalLifeExpectancy.average;
var groupBy = historicalLifeExpectancy.groupBy;
var century = historicalLifeExpectancy.century;
var lifeExpectanciesByCentury =
  historicalLifeExpectancy.lifeExpectanciesByCentury;

var people = JSON.parse(require('../data/ancestry.js'));

describe('Historical Life Expectency', function() {

  describe('average', function() {

    it('averages', function() {
      assert.equal(average([1,2,3,4]), 2.5);
    });

  });

  describe('century', function () {
    it('returns person\'s century', function () {
      person = {
        name: 'Jaye Heffernan',
        died: '2016'
      };
      assert.equal(century(person), 21);
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

    it('seems to group by century', function () {
      function deathYear(person) {
        return person.died;
      }

      // Group people by century.  Check that the years of death of those people
      // grouped into the 16th century are as we expect them to be
      var byCentury = groupBy(people, century);
      assert.deepEqual(byCentury[16].map(deathYear), [1582, 1582]);
    });

  });

  describe('lifeExpectanciesByCentury', function () {
  
    it('works with the example given', function () {
      var actual = lifeExpectanciesByCentury(people);
      var expected = {
        16: 43.5,
        17: 51.2,
        18: 52.8,
        19: 54.8,
        20: 84.7,
        21: 94
      };
      assert.deepEqual(actual, expected);
    });
  
  });

});
