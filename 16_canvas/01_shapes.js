const ASTEP = 0.01;

/**
 * The main function
 */
function drawShapes(ctx) {
  drawTrapezoid(ctx, 0, 0, 50, 100, 100);
  ctx.stroke();

  ctx.fillStyle = "red";
  fillDiamond(ctx, 100, 0, 100);

  drawZigZag(ctx, 200, 0, 300, 100, 12);
  ctx.stroke();

  drawSpiral(ctx, 350, 50, 50, 6.3 * Math.PI);
  ctx.stroke();

  ctx.fillStyle = "orange";
  drawCurveyStar(ctx, 450, 50, 50, 8, 0.6);
  ctx.fill();
}

/**
 * Draw a trapezoid to a canvas context
 * @param ctx - canvas context
 * @param x - left-most x value
 * @param y - upper-most y value
 * @param top - width of the top of the shape
 * @param bottom - width of the bottom of the shape
 * @param height - height of the shape
 */
function drawTrapezoid(ctx, x, y, top, bottom, height) {
  var offset = (bottom - top) / 2;
  ctx.save();

  ctx.translate(x, y);
  ctx.beginPath();

  // Move to top-left corner
  ctx.moveTo(offset, 0);
  // top-right
  ctx.lineTo(offset + top, 0);
  // bottom-right
  ctx.lineTo(bottom, height);
  // bottom-left
  ctx.lineTo(0, height);
  // close, back to top-left
  ctx.closePath();

  ctx.restore();
}

/**
 * Fill a diamond in the given canvas context
 * @param ctx - context
 * @param x - left-most x value
 * @param y - upper-most y value
 * @param width - width
 */
function fillDiamond(ctx, x, y, width) {
  ctx.save();

  // Translate to the top point of the diamond
  ctx.translate(x + width/2, y);
  // Rotate our coordinate axes 45 degrees around this point
  ctx.rotate(Math.PI / 4);

  // Calculate the side-length from the width/height
  var sideLength = width / Math.sqrt(2);

  // Draw the diamond/square
  ctx.fillRect(0, 0, sideLength, sideLength);

  ctx.restore();
}

function drawZigZag(ctx, x1, y1, x2, y2, zigs) {
  ctx.save();

  var yStep = (y2 - y1) / zigs;
  var width = x2 - x1;
  var y = 0;
  var zigged = false;

  ctx.translate(x1, y1);
  ctx.beginPath();
  ctx.moveTo(0,0);

  for (var i = 0; i < zigs; i++) {
    zigged = !zigged;
    y += yStep;
    x = zigged ? width : 0;
    ctx.lineTo(x, y);
  }

  ctx.restore();
}

/**
 * Draw a spiral to a canvas context
 * @param ctx - context
 * @param centerX - x coordinate of center
 * @param centerY - y coordinate of center
 * @param radius - radius (at the endpoint)
 * @param angle - angle to finish at
 */
function drawSpiral(ctx, centerX, centerY, radius, angle) {
  var numSteps = angle / ASTEP;
  var rStep = radius / numSteps;

  ctx.save();
  ctx.translate(centerX, centerY);

  ctx.beginPath();
  ctx.moveTo(0, 0);

  var r = 0;
  var x, y;
  for (var theta = 0; theta < angle; theta += ASTEP, r += rStep){
    x = r * Math.cos(theta);
    y = r * Math.sin(theta);
    ctx.lineTo(x, y);
  }

  ctx.restore();
}

/**
 * Draws a curvey star
 * @param ctx - canvas context
 * @param points - number of points on the star
 * @param depth - number between 0 and 1, controls the depth of the star's
 * canyons
 */
function drawCurveyStar(ctx, centerX, centerY, radius, points, depth) {
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.beginPath();
  ctx.moveTo(radius, 0);

  var r;

  for (var angle = 0; angle < 2 * Math.PI; angle += ASTEP) {
    // Find the angular coordinates.
    // radius `r` will be the full radius minus an absolute value of a sin
    // function
    subtract = Math.abs(Math.sin(angle * points / 2));
    r = radius * (1 - depth * subtract);

    x = r * Math.cos(angle);
    y = r * Math.sin(angle);

    ctx.lineTo(x, y);
  }

  ctx.closePath();
  ctx.restore();
}

/**
 * Run when the dom is loaded
 *
 */
document.addEventListener("DOMContentLoaded", function() {
  var canvas = document.getElementById("shapes");
  var ctx = canvas.getContext("2d");
  drawShapes(ctx);
});
