// Returns an array from start (inclusive) to end (exclusive) in steps of step
// (all integers)
// TODO: guard against fractional start and end values: these will break the for
// loop
// TODO: write betted todo snippet for vim
function range(start, end, step) {
  // Set the default `step` value (if not given)
  if (step === undefined) {
    step = 1;
  }

  // Guard against zero or fractional step-sizes
  var stepZero = step === 0;
  if (step === 0 || !isInteger(step)) {
    throw new Error("Step argument must be a non-zero integer");
  }

  // Initialize the array
  var arr = [];

  // If the range will be empty, return empty array
  var empty = (start === end);
  if (empty) {
    return [];
  }

  // Check that `end` is reachable from `start` in a finite number of `step`s
  var plausible = ((Math.sign(end - start)) == Math.sign(step));

  // Build the array.
  // `i !== end`, combined with the `plausible` check above will ensure that we
  // are guaranteed an end to this loop, for steps both positive or negative
  for (var i = start; i !== end; i += step) {
    arr.push(i);
  }

  return arr;
}

// Returns the sum of an array of numbers
function sum(array) {
  // Reduce over the array, calculating a cumulative sum at each step
  if (array.length === 0) {
    // Don't try to sum an empty array
    throw new Error("Cannot sum an empty array.");
  }
  return array.reduce( function(cumulativeSum, currentValue) {
    // Guard against non-numerical values, which could cause unexpected results,
    // e.g. `sum([1,2,3,'a',4,5,6])` should not equal '6a456'
    if (typeof currentValue !== 'number') {
      throw new Error(currentValue + " is not a Number, cannot sum.");
    }
    return cumulativeSum + currentValue;
  } , 0);
}

function isInteger(number) {
  return Math.round(number) === number;
}

module.exports = {
  range: range,
  sum: sum
};
