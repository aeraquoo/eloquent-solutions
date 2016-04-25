var assert = require('chai').assert;

describe("RegExp Golf", function() {

  it("car and cat", function() {
    verify(/ca(r|t)/,
           ["my car", "bad cats"],
           ["camper", "high art"]);
  });

  it("pop and prop", function() {
    verify(/pr?op/,
           ["pop culture", "mad props"],
           ["plop"]);
  });

  it("ferret, ferry, and ferrari", function() {
    verify(/ferr(et|y|ari)/,
           ["ferret", "ferry", "ferrari"],
           ["ferrum", "transfer A"]);
  });

  it("Any word ending in ious", function() {
    verify(/\b\w*ious\b/,
           ["how delicious", "spacious room"],
           ["ruinous", "consciousness"]);
  });

  it("A whitespace character followed by a dot, comma, colon, or semicolon", function() {
    verify(/\s(\.|\,|,;)/,
           ["bad punctuation ."],
           ["escape the dot"]);
  });

  it("A word longer than six letters", function() {
    // the tests would work without the "\b"'s, but the regexp would lose
    // specificity.  I choose correctness over style
    verify(/\b\w{7,}\b/,
           ["hottentottententen"],
           ["no", "hotten totten tenten"]);
  });

  it("A word without the letter e", function() {
    verify(/\b[^\seE]+\b/,
           ["red platypus", "wobbling nest"],
           ["earth bed", "learning ape"]);
  });
  
});

function verify(regexp, yes, no) {
  yes.forEach(function(s) {
    assert.isOk(regexp.test(s));
  });

  no.forEach(function(s) {
    assert.isNotOk(regexp.test(s));
  });
}
