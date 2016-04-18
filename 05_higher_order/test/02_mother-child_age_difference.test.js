var mcAgeDiff = require("../02_mother-child_age_difference");
var data = JSON.parse(require("../data/ancestry"));

var assert = require('chai').assert;

describe("Mother-Child Age Difference", function() {

  describe("mcAgeDiff", function() {

    it("works on the example data set", function() {
      assert.approximately(mcAgeDiff(data), 31.2, 0.1);
    });

  });

});
