for (var i=1; i <= 100; i++) {
  var three = (i % 3 === 0);
  var five =  (i % 5 === 0);

  if (three && five) {
    // Divisible by five and three
    console.log("FizzBuzz");
  }
  else if (three) {
    // Divisible by 3
    console.log("Fizz");
  }
  else if (five) {
    // Divisible by 5
    console.log("Buzz");
  }
  else {
    // Not divisible by five or three, just log the number
    console.log(i);
  }

}
