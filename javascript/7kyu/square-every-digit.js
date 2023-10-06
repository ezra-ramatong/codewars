// Square every digit

function squareDigits(num) {
  // turn num into string to split the digits
  // convert string into array of digits
  // square every digit in the array
  // join the array
  // return the array
  let squareNum = Array.from(String(num)).map(x => Number(x * x)).join("");
  return Number(squareNum);

}

console.log(squareDigits(3212))
