var assert = require('chai').assert;
var historicalLifeExpectancy
  = require('../03_historical_life_expectancy');
var average = historicalLifeExpectancy.average;

describe("Historical Life Expectency", function() {

  describe("average", function() {

    it("averages", function() {
      assert.equal(average([1,2,3,4]), 2.5);
    });

  });


});
