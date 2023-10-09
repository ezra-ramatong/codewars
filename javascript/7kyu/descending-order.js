// Descending Order

function descend(number) {
  return Number(String(number).split("").sort((a, b) => b - a).join(""));
}

let testNum = 123456;

console.log(descend(testNum))
