function countBs(string) {
  return countChar(string, 'B');
}

function countChar(string, countChar) {
  /* We split the string into an array and reduce over the array,
   * with the returned value at each step being the number of countChar's seen up
   * to the current position.  The second argument to reduce is the initial
   * value for count, thus zero
   */
  return string.split('').reduce( function(count, currentChar) {
    if (currentChar === countChar) {
      // we've seen a `countChar`, increment the counter
      return count + 1;
    } else {
      return count;
    }
  }, 0 );
}

exports.countBs = countBs;
exports.countChar = countChar;
