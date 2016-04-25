var assert = require('chai').assert;

var number = require('../03_numbers_again');

describe("Numbers Again", function() {

  describe("number (regexp)", function() {
  
    it("does match some", function() {
    
      ["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
       "1e+12"].forEach(function(s) {
         assert.match(s, number);
       })
    
    });

    it("doesn't match others", function() {
    
      ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
       "."].forEach(function(s) {
         assert.notMatch(s, number);
       })
    
    });
  
  });

});
