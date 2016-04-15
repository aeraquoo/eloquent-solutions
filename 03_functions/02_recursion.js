function isEven(number) {
  if (number < 0) {
    // The even-ness of `number` is the same as for `-number`
    // we deal with negatives by converting them to positives
    return isEven(-number);
  } else if (number === 0) {
    // 0 is even
    return true;
  } else if (number === 1) {
    // 1 is odd
    return false;
  } else {
    // `number` is even iff `(number - 1)` is even
    return isEven(number - 2);
  }
}
