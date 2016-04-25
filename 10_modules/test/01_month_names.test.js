var assert = require('chai').assert;

var month = require('../01_month_names');

describe("Month Names", function() {

  describe("month", function() {
  
    describe(".name()", function() {
    
      it("works with given example (March)", function() {
      
        assert.equal(month.name(2), "March");
      
      });
    
    });

    describe(".number()", function() {
    
      it("works with given example (November)", function() {
        assert.equal(month.number("November"), 10);
        
      
      });
    
    });
  
  });

});
