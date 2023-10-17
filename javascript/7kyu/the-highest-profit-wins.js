// The highest profit wins!

function profit(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}


console.log(profit([1,2,3,4,5]))
