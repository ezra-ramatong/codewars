// Quarter of the year
const quarterOf = (month) => {
  if (month > 9 && month <= 12) return 4;
  if (month > 6 && month <= 9) return 3;
  if (month > 3 && month <= 6) return 2;
  if (month >= 1 && month <= 3) return 1;
}

console.log(quarterOf(3))
console.log(quarterOf(5))
console.log(quarterOf(1))
console.log(quarterOf(7))
console.log(quarterOf(11))
console.log(quarterOf(12))
console.log(quarterOf(6))
console.log(quarterOf(2))
console.log(quarterOf(4))
console.log(quarterOf(8))
console.log(quarterOf(10))
