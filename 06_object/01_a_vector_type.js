// Returns Euclidean distance between two points
function euclideanDistance(x1, y1, x2, y2) {
  // Get the differences in x and y values
  var deltaX = Math.abs(x2 - x1);
  var deltaY = Math.abs(y2 - y1);

  // Square the differences, add and square-root the result
  return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
}

function Vector(x, y) {
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function(vector) {
  // Add the two Vectors x and y values, return new Vector of result
  return new Vector(this.x + vector.x, this.y + vector.y);
};

Vector.prototype.minus = function(vector) {
  // Minu the two Vectors x and y values, return new Vector of result
  return new Vector(this.x - vector.x, this.y - vector.y);
};

Object.defineProperty(Vector.prototype, "length", {
  get: function() {
    // When getting length of vector, return Euclidean Distance from the origin
    return euclideanDistance(0, 0, this.x, this.y);
  }
});

module.exports = {
  euclideanDistance: euclideanDistance,
  Vector: Vector
};
