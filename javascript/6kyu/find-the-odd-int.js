// Find the odd int

const arr = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
const digits = [...new Set(arr)];

for (const digit of digits) {
  let count = arr.filter(x => x === digit).length;
  if (count % 2 === 1 ) console.log(digit);
}
