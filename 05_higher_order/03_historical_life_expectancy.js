// Averages an array of numbers
function average(array) {
  return array.reduce((a,b) => a+b) / array.length;
}

// Returns a person's century of death
function century(person) {
  return Math.ceil(person.died / 100);
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

function lifeExpectanciesByCentury(people) {
  var byCentury = groupBy(people, century);
  var agesByCentury = Object.create(null);
  var expectancies = Object.create(null);

  // Map people to their ages
  for (century in byCentury) {
    agesByCentury[century] = byCentury[century].map(function deathYear(person) {
      return person.died - person.born;
    });
  }

  // Get the average of the ages for each century
  for (century in agesByCentury) {
    expectancy = average(agesByCentury[century]);
    // Convert to string form rounded to 1 decimal place, + to go back to Number
    expectancies[century] = +expectancy.toFixed(1);
  }

  return expectancies;
}

module.exports = {
  average: average,
  century: century,
  groupBy: groupBy,
  lifeExpectanciesByCentury: lifeExpectanciesByCentury
};
