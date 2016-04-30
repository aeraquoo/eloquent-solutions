var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0, lastTime = null;

var TOP = 20;
var LEFT = 200;

function animate(time) {
	if (lastTime !== null) {
		angle += (time - lastTime) * 0.001;
	}
	lastTime = time;
	cat.style.top = TOP + (Math.sin(angle) * 20) + "px";
	hat.style.top = TOP + (-Math.sin(angle) * 20) + "px";
	cat.style.left = LEFT + (Math.cos(angle) * 200) + "px";
	hat.style.left = LEFT + (Math.cos(angle) * 200) + "px";
	requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
