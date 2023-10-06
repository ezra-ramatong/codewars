//Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
  if (!Array.isArray(input) || input.length === 0) return [];
  let positives = input.filter(num => num > 0);
  let negatives = input.filter(num => num < 0);
  // let negativesSum = (negatives.length > 0) ? negatives.reduce((a, b) => a + b) : 0;
  return [positives.length, negatives.reduce(((a, b) => a + b), 0)]
}
console.log(countPositivesSumNegatives([1, 2]));

