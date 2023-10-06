// Find maximum and minimum values of a list
// find the max value in array 
function maxVal(arr) {
  let max = 0;
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}

// find the min value in array
function minVal(arr) {
  let min = 1000000000000000;
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}

console.log(maxVal([500, 2, 3, 76]))
console.log(minVal([-52, 56, 30, 29, -54, 0, -110]))
