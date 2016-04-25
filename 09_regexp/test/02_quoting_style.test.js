var assert = require('chai').assert;

var quoting = require('../02_quoting_style');
var search = quoting.search;
var replace = quoting.replace;

describe("Quoting Style", function() {

  describe("search and replace", function() {
  
    it("they do their job on the example given", function() {
    
      var text = "'I'm the cook,' he said, 'it's my job.'";
      var actual = text.replace(search, replace);
      var expected = '"I\'m the cook," he said, "it\'s my job."';

      assert.equal(actual, expected);
    
    });
  
  });

});
