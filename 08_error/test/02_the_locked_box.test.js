var assert = require('chai').assert;

var withBoxUnlocked = require('../02_the_locked_box').withBoxUnlocked;

describe("The Locked Box", function() {

  describe("withBoxUnlocked", function() {

    it("works with no errors", function() {

      assert.doesNotThrow( function () {

        withBoxUnlocked(function() {
          box.content.push("gold piece");
        });

      }, Error);

    });

    it("handles an error", function() {

      assert.doesNotThrow( function() {

        withBoxUnlocked(function() {
            throw new Error("Pirates on the horizon! Abort!");
        });

      }, Error );

    });

  });

});
