var assert = require('chai').assert;

var StretchCell = require('../02_another_cell').StretchCell;
var TextCell = require('../02_another_cell').TextCell;
var padWith = require('../02_another_cell').padWith;
var arrayPad = require('../02_another_cell').arrayPad;

describe('Another Cell', function () {

  describe('padWith', function () {
  
    it('pads a string with a character', function () {
      var actual = padWith('0', 3, '1');
      var expected = '100';
      assert.equal(actual, expected);
    });
  
  });

  describe('arrayPad', function () {
  
    it('pads an array with extra elements', function () {
      var actual = arrayPad('cool', 3, ['cool']);
      var expected = ['cool', 'cool', 'cool'] ;
      assert.deepEqual(actual, expected);
    });
  
  });

  describe('StretchCell', function () {
  
    var sc;

    before( function() {
      sc = new StretchCell(new TextCell("abc"), 1, 2);
    });

    describe('.minWidth', function () {
    
      it('works on example given', function () {
        assert.equal(sc.minWidth(), 3);
      });
    
    });

    describe('.minHeight', function () {
    
      it('works on example given', function () {
        assert.equal(sc.minHeight(), 2);
      });
    
    });

    describe('.draw', function () {
    
      it('works on example given', function () {
        var actual = sc.draw(3, 2);
        var expected = ["abc", "   "];
        assert.deepEqual(actual, expected);
      });
    
    });
  
  });

});



