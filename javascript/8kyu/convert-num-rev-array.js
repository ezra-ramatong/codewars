function digitize(n) {
  const arr = n.toString().split("");
  return arr.map(Number).reverse();
}

console.log(digitize(35231))

