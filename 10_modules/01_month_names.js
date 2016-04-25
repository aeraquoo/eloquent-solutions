var month = Object.create(null);

(function(exports) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  exports.name = function(number) {
    return monthNames[number];
  };

  exports.number = function(name) {
    return monthNames.indexOf(name);
  };

})(month);

module.exports = month;
