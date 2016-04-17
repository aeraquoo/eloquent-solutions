/* Q & A
 *
 * "Thinking back to the notes about side effects and pure functions in the
 * previous chapter, which variant do you expect to be useful in more
 * situations? Which one is more efficient?"
 *
 * `reverseArray` is a pure function.  It fits the functional programming
 * paradigm and can be more easily composed with other functions such as `map`
 * and `reduce`.  For these reasons I expect it to be more useful in more
 * situations.  `reverseArrayInPlace` is more memory-efficient since it need not
 * hold both the original and reversed array in memory at the same time.  Unless
 * we expect to run out of memory, we should consider the added simplicity and
 * utility of `reverseArray` more valuable than the memory savings.
 */

// Returns a reversed copy of an array
function reverseArray(array) {
  var reversed = [];

  // Iterate backwards over the array, adding items to `reversed`
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
}

// Reverses an array in place
function reverseArrayInPlace(array) {
  // Our strategy is to swap the first element with the last, 2nd with 2nd-last,
  // etc. until we reach the middle of the array.  `swapUntil` is the index of
  // this stopping condition, e.g. 2 for an array of length 6 or 7 (the middle
  // element need not be swapped with itself)
  var swapUntil = Math.floor(array.length / 2 - 1);

  for (var i = 0; i <= swapUntil; i++) {
    doSwap(i);
  }

  // Swaps `i`-th element from front of `array` with `i`-th element from the
  // back
  function doSwap(i) {
    var backI = array.length - 1 - i;
    var oldFirst = array[i];
    array[i] = array[backI];
    array[backI] = oldFirst;
  }
}

module.exports = {
  reverseArray: reverseArray,
  reverseArrayInPlace: reverseArrayInPlace
};
