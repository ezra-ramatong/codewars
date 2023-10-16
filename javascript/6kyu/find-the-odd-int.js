// Find the odd int
function findOdd(A) {
  const uniqueDigit = [...new Set(A)];
  let oddInt = 0;
  for (const digit of uniqueDigit) {
    let count = A.filter(x => x === digit).length;
    if (count % 2) oddInt = digit;
  }
  return oddInt;
}
