// Sum without highest and lowest number

const arr = [6, 2, 1, 8, 10];

// how to find the smallest number in the array?
function sumArray(array) {
  if (null || !Array.isArray(array) || array.length < 3) {
    return 0;
  }
  const sorted = array.sort((a, b) => a - b);
  return sorted.slice(1, -1).reduce((a, b) => a + b);
}

console.log(sumArray([3, 2]))


