var results = [
    {name: "Satisfied", count: 1043, color: "lightblue"},
    {name: "Neutral", count: 563, color: "lightgreen"},
    {name: "Unsatisfied", count: 510, color: "pink"},
    {name: "No comment", count: 175, color: "silver"}
];

var ctx = document.querySelector("canvas").getContext("2d");

drawPieChart(ctx, results);

function drawPieChart(ctx, data) {

  var total = data.reduce(function(sum, choice) {
    return sum + choice.count;
  }, 0);
  
  var currentAngle = -0.5 * Math.PI;
  var centerX = 300, centerY = 150;
  var radius = 100;

  data.forEach(function(result) {
    var sliceAngle = (result.count / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius,
           currentAngle, currentAngle + sliceAngle);
    // Get the angular position of the text around the center point
    textAngle = currentAngle + 0.5 * sliceAngle;
    currentAngle += sliceAngle;
    ctx.lineTo(centerX, centerY);
    ctx.fillStyle = result.color;
    ctx.fill();

    ctx.fillStyle = "black";
    // Get the distance of the text from the center point
    // Maximum 10 pixels, but put it closer if the chart is very small
    textRadius = radius + Math.min(0.2*radius, 10);

    // Convert to cartesian coordinates
    textX = centerX + textRadius * Math.cos(textAngle);
    textY = centerY + textRadius * Math.sin(textAngle);


    var right = (textAngle < 0.5 * Math.PI);
    if (!right) {
      // If we are on the left of the chart, move our label left so that it ends
      // close to the chart border, rather than startng there and overlapping
      // the chart
      var width = ctx.measureText(result.name).width;
      textX -= width;
    }

    // Draw the label
    ctx.fillText(result.name, textX, textY);
  });
}
