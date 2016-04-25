var valley = require('./07_elife').valley;

function Animated(world) {
  this.world = world;
  console.log(this.world.toString());
  var self = this;
  this.interval = setInterval(function() { self.tick(); }, 333);
}

Animated.prototype.tick = function() {
  this.world.turn();
  console.log(this.world.toString());
};

function animateWorld(world) { new Animated(world); }
animateWorld(valley);
