var SPEED = 10;
var RADIUS = 20;

var canvas = document.querySelector("canvas");
var cx = canvas.getContext("2d");

var startAngle = Math.random() * 2 * Math.PI;
var ball = {
  x: canvas.width/2,
  y: canvas.height/2,
  v: {
    x: SPEED * Math.cos(startAngle),
    y: SPEED * Math.sin(startAngle)
  }
};

var lastTime = null;

function frame(time) {
  if (lastTime !== null)
    updateAnimation(Math.min(100, time - lastTime) / 1000);
  lastTime = time;
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);

function updateAnimation(step) {
  if ((ball.x - RADIUS) < 0 || (ball.x + RADIUS) > canvas.width) {
    ball.v.x *= -1;
  } else if ((ball.y - RADIUS) < 0 || (ball.y + RADIUS > canvas.height)) {
    ball.v.y *= -1;
  }

  ball.x += ball.v.x;
  ball.y += ball.v.y;

  cx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall(cx, ball);
}

function drawBall(cx, ball) {
  // Draw the circle
  cx.beginPath();
  cx.arc(ball.x, ball.y, RADIUS, 0, 2 * Math.PI);
  cx.closePath();

  // Colour it blue
  cx.save();
  cx.fillStyle = "blue";
  cx.fill();
  cx.restore();
}
