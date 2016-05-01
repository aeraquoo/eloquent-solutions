window.onload = function() {

  var trails = [];
  var trail;
  // mouse will store an array of recent places the mouse has been
  var mouse = [];
  mouse[0] = mouse[1] = mouse[2] = {x:0, y:0};

  for (var i = 0; i < 3; i++) {
    // add the dots to the document
    trail = document.createElement('div');
    trail.className   = 'trail';
    trail.style.left  = '0px';
    trail.style.top   = '0px';
    trails.push(trail);
    document.body.appendChild(trail);
  }

  function mouseMoveHandler(event) {
    // add a new recent position
      mouse.unshift({
        x: event.x + 'px',
        y: event.y + 'px'
      });
      // get rid of the oldest one
      mouse.pop();
  }

  function moveTrail(timestamp) {
    // move trail elements to each of the  most recent recorded mouse positions
    for (var i in trails) {
      trails[i].style.left = mouse[i].x;
      trails[i].style.top = mouse[i].y;
    }
  }

  // move the trail every 50 milliseconds
  setInterval(moveTrail, 50);

  window.addEventListener("mousemove", mouseMoveHandler);
};
