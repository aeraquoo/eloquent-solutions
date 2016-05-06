var assert = require('chai').assert;

var urlToPath = require('../02_fixing_a_leak');

describe('Fixing a Leak', function () {

    describe('urlToPath', function () {
    
        it('handles a legal path', function () {
            var actual = urlToPath("css/file.css");
            var expected = "css/file.css";
            assert.equal(actual, expected);
        });

        it('handles an illegal path', function () {
            var actual = urlToPath("../../secret_data/secrets.txt");
            var expected = ".";
            assert.equal(actual, expected);
        });
    
    });

});
