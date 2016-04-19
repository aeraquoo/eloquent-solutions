module.exports = function deepEqual(a, b) {
  // If they are the same object, or equal primitive values, return true
  if (a === b) {
    return true;
  }

  // Get both objects keys
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);

  // Check the keys are the same
  if (!simpleListEqual(aKeys, bKeys)) {
    return false;
  }

  // For each key:value pair in a and b, recursively check that the "value"'s
  // are deeply equal
  for (var i = 0, key = aKeys[i]; i < aKeys.length; i++) {
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  // To have not returned so far means the keys are equal, and their values are
  // deeply equal.  The objects are thus deeply equal
  return true;

};

function simpleListEqual(listA, listB) {
  // Sort the lists (not in place though, no side effects!)
  var a = listA.slice(0).sort();
  var b = listB.slice(0).sort();

  // They must be the same length
  if (a.length !== b.length) {
    return false;
  }

  // If any of the elements are not equal, return false
  for (var i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  // Same length, same elements.  Lists are equal
  return true;
}
