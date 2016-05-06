var HEIGHT = 20;
var WIDTH = 20;
// Probability of cell starting as alive
var LIVE_START_PROB = 0.3;

var grid = document.getElementById("grid");
var next = document.getElementById("next");

/**
 * Initializes a grid as an HTML table
 *
 * @param grid - a div element to append table to
 */
function initializeGrid(grid) {
  // Create a table
  var table = document.createElement("table");

  for (var i = 0; i < HEIGHT; i++) {
    // Create a row for our table
    var row = document.createElement("tr");

    for (var j = 0; j < WIDTH; j++) {
      // Create a cell for our row...
      var data = document.createElement("td");
      // with a checkbox
      var check = document.createElement("input");
      check.type = "checkbox";

      // store the cell's row and column number as attributes
      check.setAttribute("data-row", i);
      check.setAttribute("data-col", j);

      data.appendChild(check);
      row.appendChild(data);
    }

    table.appendChild(row);
  }

  grid.appendChild(table);
}

// A function to randomly decide whether to check a box
function randomCheck() {
  return Math.random() < LIVE_START_PROB;
}

// A function that checks no boxes
function noCheck() {
  return false;
}

/**
 * Initialize our world as a 2d array
 *
 * @param liveFunc - a function that is called to decide whether an element
 * should be created as live
 */
function initializeWorld(liveFunc) {
  // Have noCheck as a fallback/default checkElemenn function
  if (liveFunc === undefined) {
    liveFunc = noCheck;
  }

  var world = [];

  for (var i = 0; i < HEIGHT; i++) {
    // Add a row
    world.push([]);
    var row = world[i];

    for (var j = 0; j < WIDTH; j++) {
      // Add an entry to the row: true for live, false for dead
      var live = (liveFunc()) ? true : false;
      row.push(live);
    }
  }

  return world;
}

/**
 * Renders our world (2d array version) to a table
 *
 */
function render(world, table) {
  var tableRows = table.children;

  for (var i = 0; i < HEIGHT; i++) {
    var tableCells = tableRows[i].children;

    for (var j = 0; j < WIDTH; j++) {
      // Set each checkbox to checked if live, or unchecked if dead/barren
      tableCells[j].getElementsByTagName("input")[0].checked = world[i][j];
    }

  }
}

/**
 * Gets all neighbours of an element in a 2d array
 *
 * @param i - row index of element
 * @param j - column index of element
 */
function getNeighbours(i, j, array) {
  var neighbours = [];
  // Get the dimensions of the array
  var height = array.length;
  var width = array[0].length;

  // For each row-index near i
  for (var m = i-1; m <= i+1; m++) {
    // For each column index near j
    for (var n = j-1; n <= j+1; n++) {

      if (m < 0 || m >= height || n < 0 || n >= width) {
        // we are out of bounds of the array
        continue;

      } else if (m === i && n ===j) {
        // an element should not be counted as an neighbour of itself
        continue;

      } else {
        // Confirmed neighbour, add it to the list
        neighbours.push(array[m][n]);
      }
    }
  }

  return neighbours;
}

/**
 * Count the live neighbours for each cell in a world
 *
 * @returns counts - a 2-d array of neighbour counts, same dimensions as world
 */
function countNeighbours(world) {
  var counts = [];

  var width = world[0].length;

  for (var i = 0, len = world.length; i < len; i++) {

    // Copy each row to counts
    counts.push(world[i].slice(0));

    for (var j = 0; j < width; j++) {
      // Set the rows values to the required counts
      counts[i][j] = sum(getNeighbours(i, j, world));
    }

  }

  return counts;
}

/**
 * Helper function to sum an array
 *
 */
function sum(array) {
  return array.reduce(function(prev, next) {
    return prev + next;
  });
}

/**
 * Advance a world forwards one step in time, according to the rules of Conway's
 * Game of Life
 *
 */
function stepWorld(world) {
  var counts = countNeighbours(world);

  for (var i = 0; i < HEIGHT; i++) {
    for (var j = 0; j < WIDTH; j++) {
      // For each (i, j) index of world...

      // Check if this cell is alive
      var live = world[i][j];
      // Get the number of live neighbours
      var neighbours = counts[i][j];

      // If a live cell has < 2 or > 3 neighbours...
      if (live && (neighbours < 2 || neighbours > 3)) {
        // it dies
        world[i][j] = false;
      // If a dead cell has exactly 3 neighbours...
      } else if (neighbours === 3) {
        // it comes to life!
        world[i][j] = true;
      }
    }
  }
}

// Initialize our world:
// Make the grid of checkboxes
initializeGrid(grid);
// Make the internal representation of our world (a 2d array)
var world = initializeWorld(randomCheck);

// Render our world to our table
var table = grid.getElementsByTagName("table")[0];
render(world, table);

// When the user clicks next
next.addEventListener("click", function(event) {
  // Step the state of the world forward
  stepWorld(world);
  // Render the world to the table
  render(world, table);
});

// Action for when a user clicks a checkbox
grid.addEventListener("click", function (event) {
  // If it was not on a checkbox, return early
  if (event.srcElement.tagName !== "INPUT") {
    return;
  }

  var cbox = event.srcElement;
  // Get the row and column number
  var i = Number(cbox.getAttribute("data-row"));
  var j = Number(cbox.getAttribute("data-col"));

  // Toggle that cell in our internal representation of the world
  world[i][j] = !world[i][j];
});
