var URL = "http://eloquentjavascript.net/author";

var contentTypes = [
  "text/plain",
  "text/html",
  "application/json"
];

var table = document.getElementById("results");

contentTypes.forEach(function(ctype) {
  var req = new XMLHttpRequest();
  req.open("GET", URL, true);
  req.setRequestHeader("Accept", ctype);

  req.addEventListener("load", function() {
    var row = document.createElement("tr");

    var label = document.createElement("td");
    label.textContent = ctype;
    row.appendChild(label);

    var data = document.createElement("td");
    data.textContent = req.responseText;
    row.appendChild(data);

    table.appendChild(row);
  });

  req.send(null);
});
