module.exports = function flatten(array) {
  // Why does this not working?
  // return array.reduce(Array.prototype.concat.call);
  
  // Reduce over the array, concatenating the current (`next`) element with the
  // cumulative result (`prev`)
  return array.reduce(function (prev, next) {
    return prev.concat(next);
  });
};
