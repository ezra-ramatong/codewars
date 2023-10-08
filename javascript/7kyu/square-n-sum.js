// Square(n) Sum

function squareSum(numbers) {
  return numbers.map(x => x * x).reduce(((x, y) => x + y), 0);
}

console.log(squareSum([1, 2, 2]));
console.log(squareSum([]));
