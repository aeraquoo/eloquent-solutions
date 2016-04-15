function isEven(number) {
  switch (number) {
    case 0:
      return true;
    case 1:
      return false;
    default:
      return isEven(number - 1);
  }
}
console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
