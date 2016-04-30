var assert = require('chai').assert;
var byTagName = require('../02_elements_by_tag_name');
var jsdom = require("node-jsdom").jsdom;

var HTML = "" +
  "<h1>Heading with a <span>span</span> element.</h1>" +
  "<p>A paragraph with <span>one</span>, <span>two</span>" +
    "pans.</p>";

var document = jsdom(HTML);
//var window = doc.parentWindow;


describe("Elements by Tag Name", function() {

  describe("byTagName", function() {
  
    it("works on h1s", function() {
    
      var actual = byTagName(document.body, "h1").length;

      assert.equal(actual, 1);
    
    });

    it("works on spans", function() {
    
      assert.equal(byTagName(document.body, "span").length, 3);
    
    });

    it("works on ps", function() {
    
      var para = document.querySelector("p");
      assert.equal(byTagName(para, "span").length, 2);
    
    });
  
  });

});
