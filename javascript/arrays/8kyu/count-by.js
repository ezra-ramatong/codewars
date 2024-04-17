/* Count by (8kyu)*/

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x);
  }
  return z;
}

// Recursive
/* let z = [];
function countBy(x, n) {
  if (n === 0) {
    return z.reverse();
  }
  z.push(x * n);
  return countBy(x, n - 1);
}

console.log(countBy(1, 10)); */
