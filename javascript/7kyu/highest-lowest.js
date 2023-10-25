// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  const numbersArr = numbers.split(" ").sort((a, b) => b - a);
  return `${numbersArr[0]} ${numbersArr[numbersArr.length - 1]}`;
}

const str = "1 2 3 4 5 10 11 12 9 8 7 11 9";

console.log(highAndLow(str))






