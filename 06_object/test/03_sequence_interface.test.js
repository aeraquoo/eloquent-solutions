var assert = require('chai').assert;

var module = require('../03_sequence_interface');

var logFive         = module.logFive;
var ArraySeq        = module.ArraySeq;
var RangeSeq        = module.RangeSeq;
var sequenceToArray = module.sequenceToArray;

describe('Sequence Interface', function () {

  describe('sequenceToArray (more testable than logFive)', function () {
  
    it('works with ArraySeq example', function () {
      var actual   = sequenceToArray(new ArraySeq([1, 2]));
      var expected = [1, 2];
      assert.deepEqual(actual, expected);
    });

    it('works with RangeSeq example', function () {
      // Just check the first five elements, as logFive would use
      var actual   = sequenceToArray(new RangeSeq(100 ,1000)).slice(0, 5);
      var expected = [100, 101, 102, 103, 104];
      assert.deepEqual(actual, expected);
    });
  
  });

});
