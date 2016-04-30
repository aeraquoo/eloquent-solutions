var buildTable = require('../01_build_a_table');
var assert = require('chai').assert;
var mountains = require('../data/mountains.js');

var EXAMPLE_HTML = 
"<table>" +
  "<tr>" +
    "<th>name</th>" +
    "<th>height</th>" +
    "<th>country</th>" +
  "</tr>" +
  "<tr>" +
    "<td>Kilimanjaro</td>" +
    "<td>5895</td>" +
    "<td>Tanzania</td>" +
  "</tr>" +
"</table>";

describe("Build a Table", function() {

  describe("buildTable", function() {
  
    it("works with example", function() {
    
      var actual = buildTable([mountains[0]]).outerHTML;
      var expected = EXAMPLE_HTML;
      assert.equal(actual, expected);
    
    });
  
  });

});
