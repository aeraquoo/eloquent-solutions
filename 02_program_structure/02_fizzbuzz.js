for (var i=1; i <= 100; i++) {
  if (i % 3 === 0) {
    // Divisible by 3
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    // Divisible by 5
    console.log("Buzz");
  }
  else {
    console.log(i);
  }
}
