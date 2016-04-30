var jsdom = require("node-jsdom").jsdom;
var document = jsdom();
var window = document.parentWindow;


function buildTable(array, header) {
  // output a header by default
  if (header === undefined) {
    header = true;
  }

  // initialize the table
  var table = document.createElement('table');

  // get the column names
  var keys = Object.keys(array[0]);

  var row, entry, text;

  if (header) {
    row = document.createElement('tr');
    table.appendChild(row);
    for (var k in keys) {
      entry = document.createElement('th');
      text = document.createTextNode(keys[k]);
      entry.appendChild(text);
      row.appendChild(entry);
    }
  } 

  for (var i in array) {
    row = document.createElement('tr');

    for (var j in keys) {
      entry = document.createElement('td');
      text = document.createTextNode(array[i][keys[j]]);
      entry.appendChild(text);
      row.appendChild(entry);
    }
    table.appendChild(row);
  }

  return table;
}

module.exports = buildTable;
