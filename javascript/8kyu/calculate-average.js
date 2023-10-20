// Calculate average

function findAverage(array) {
  if (Array.isArray(array) && array.length) {
    return array.reduce((a, b) => a + b) / array.length;
  } else return 0;
}

console.log(findAverage("hug"));


