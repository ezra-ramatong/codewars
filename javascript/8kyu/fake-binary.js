function fakeBin(x) {
  return x.split("").map(digit => Number(digit) < 5 ? 0 : 1).join("");
}
