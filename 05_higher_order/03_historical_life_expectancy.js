function average(array) {
  return array.reduce((a,b) => a+b) / array.length;
}

function groupBy(array, groupFunc) {
  // An object without a prototype will only have the properties we give it
  // This is a mapping with only the keys that we explicitly set
  var groups = Object.create(null);

  for (element of array) {
    var key = groupFunc(element);
    if (key in groups) {
      groups[key].push(element);
    } else {
      groups[key] = [element];
    }
  }

  return groups;

}

module.exports = {
  average: average,
  groupBy: groupBy
};
