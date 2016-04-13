// `size` can be passed as the first command line argument,
// defaults to 8
var size = process.argv[2] || 8;

var grid = "";

// for each row
for (var i = 0; i < size; i++) {
  // Start a new row, unless this is our first
  if (i) grid += '\n';
  //for  each column
  for (var j = 0; j < size; j++) {
    // White squares occur when row and column indices are either both even or
    // both odd
    var white = (i % 2) === (j % 2);
    grid += white ? ' ' : '#';
  }
}

console.log(grid);
