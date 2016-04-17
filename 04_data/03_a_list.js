// Convert an array to a list
function arrayToList(array) {
  var list = null;

  // The last array element should be the innermost list element.  We iterate
  // backwards through `array`, adding elements to `list` by wrapping in a list
  // with first value equal to the array element, and `rest` pointing to the old
  // list
  for (var i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list
    };
  }

  return list;
}

// Convert a  list to an array
function listToArray(list) {
  var array = [];
  var rest = list;

  // While there is more `list` to process, push the current value to `array`
  // and dig another level deeper
  while (rest !== null) {
    array.push(rest.value);
    rest = rest.rest;
  }

  return array;
}

// Return a new list, made up of `list` with `element` prepended
function prepend(element, list) {
  // Return a list with first value set to `element` and `rest` set to the
  // `list` parameter passed in
  return {
    value: element,
    rest: list
  };
}

// Recursively find the n-th element of a list, or undefined if does not exist
function nth(list, index) {
  // Asked for the first value, return it
  if (index === 0) {
    return list.value;
  }
  // The index is negative, there is no valid list, or we have reached the end
  // of the list by being given an out-of-bounds index.  Return undefined
  if (index < 0 || !list || list.rest === null) {
    return undefined;
  }
  // Asked for n-th element of list, return (n-1)-th element of the rest of list
  return nth(list.rest, index - 1);
}

module.exports = {
  arrayToList: arrayToList,
  listToArray: listToArray,
  prepend: prepend,
  nth: nth
};
