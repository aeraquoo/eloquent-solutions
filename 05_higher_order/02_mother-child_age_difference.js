var ancestry = JSON.parse(require('./data/ancestry'));

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function ageAt(year, person) {
  return year - person.born;
}

function mcAgeDiff(people) {
  var motherAgesAtBirths = [];

  people.forEach(function(person) {

    var mother = byName[person.mother];

    if (!mother) {
      // We don't know about this mother, skip her
      return;
    }

    motherAgesAtBirths.push(person.born - mother.born);

  });

  return average(motherAgesAtBirths);
}

module.exports = mcAgeDiff;
