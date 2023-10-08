// sum of two lowers positive integers

function sumTwoSmallestNumbers(numbers) {
  numbers.sort((a, b) => a - b);
  return numbers[0] + numbers[1];
}

const exArray = [19, 5, 42, 2, 77];

console.log(sumTwoSmallestNumbers(exArray));

