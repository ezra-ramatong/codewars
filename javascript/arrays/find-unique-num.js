function findUniq(arr) {
  let uniqueNum = 0;
  let currentNumber = arr[0];
  let repeatingDigit = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === currentNumber) {
      repeatingDigit = arr[i];
      break;
    } else {
      currentNumber = arr[i];
    }
  }
  uniqueNum = arr.filter((element) => element !== repeatingDigit)[0];
  return uniqueNum;
}

console.log(findUniq([0, 0, 0.55, 0, 0]));
