function every(array, fn) {
  // Test each value of array with fn
  for (var i in array) {

    if (!fn(array[i])) {
      // One of the test fails, return false
      return false;
    }

  }

  // All tests passed
  return true;
}

function some(array, fn) {
  // test each element of array with fn
  for (var i in array) {

    if (fn(array[i])) {
      // this test passed, return true
      return true;
    }
  }

  // all test failed
  return false;
}

module.exports = {
  every: every,
  some: some
};
