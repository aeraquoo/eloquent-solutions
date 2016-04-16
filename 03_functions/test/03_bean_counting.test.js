var assert = require('chai').assert;
var countBs = require('../03_bean_counting').countBs;
var countChar = require('../03_bean_counting').countChar;

describe( "counting beans", function() {
  describe("countBs", function() {
    it("counts some Bs", function() {
      assert.strictEqual(countBs("The Brady Bunch"), 2);
    });
    it("counts no Bs", function() {
      assert.strictEqual(countBs("No capital b's here"), 0);
    });
  });
  describe("countChar", function() {
    it("counts some chars", function() {
      assert.strictEqual(countChar("Too Many Cooks", 'o'), 4);
    });
    it("counts no chars", function() {
      assert.strictEqual(countChar("The quick fox jumped over the lazy brown doe.", 'g'), 0);
    });
  });
});
