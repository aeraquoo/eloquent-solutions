// Returns an array from start  to end (inclusive) in steps of step
// (all integers)
function range(start, end, step) {
  // Set the default `step` value (if not given)
  if (step === undefined) {
    step = 1;
  }

  // Guard against zero or fractional step-sizes
  if (step === 0 || !isInteger(step)) {
    throw new Error('Step argument must be a non-zero integer');
  }

  // Initialize the array
  var arr = [];

  // Check that `end` is reachable from `start` in a finite number of `step`s
  var plausible = ((Math.sign(end - start)) === Math.sign(step)) ||
    start === end;
  if (!plausible) {
    throw new Error('Cannot get from ' + start + ' to ' + end +
                    ' in steps of ' + step);
  }

  // Build the array.
  // `i !== end`, combined with the `plausible` check above will ensure that we
  // are guaranteed an end to this loop, for steps both positive or negative
  for (var i = start; i !== end; i += step) {
    arr.push(i);
  }
  // Include the endpoint
  arr.push(i);

  return arr;
}

// Returns the sum of an array of numbers
function sum(array) {
  // Reduce over the array, calculating a cumulative sum at each step
  if (array.length === 0) {
    // Don't try to sum an empty array
    throw new Error('Cannot sum an empty array.');
  }
  return array.reduce(function(cumulativeSum, currentValue) {
    // Guard against non-numerical values, which could cause unexpected results,
    // e.g. `sum([1,2,3,'a',4,5,6])` should not equal '6a456'
    if (typeof currentValue !== 'number') {
      throw new Error('"' + currentValue + '" is not a number, cannot sum.');
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
