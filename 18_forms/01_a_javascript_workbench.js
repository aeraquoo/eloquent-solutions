var input = document.getElementById("code");
var button = document.getElementById("button");
var output = document.getElementById("output");

var code;
button.addEventListener("click", function() {
  var code = input.value;

  var f, out;
  try {
    f = new Function("", code);
    out = f();
  } catch (err) {
    out = err.toString();
  }

  output.textContent = out;
});
