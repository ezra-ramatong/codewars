// Binary Addition
/* let sum = 106;
let quotient = sum;
let remainder = [];
while (quotient > 0) {
  remainder.push(quotient % 2);
  quotient = Math.floor(quotient / 2);
}
console.log(Number(remainder.reverse().join("")));
*/

/* function addBinary(a, b) {
  let quotient = a + b;
  let remainders = [];
  while (quotient > 0) {
    remainders.push(quotient % 2);
    quotient = Math.floor(quotient / 2);
  }
  return remainders.reverse().join("");
} */

function addBinary(a, b) {
  return (a + b).toString(2); // <--- Radix, aka change numerical base system!
}

console.log(addBinary(5, 9));
