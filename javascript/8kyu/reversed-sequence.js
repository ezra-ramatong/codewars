// Reversed sequence
const reverseSeq = n => {
  let sequence = [];
  for (let i = n; i > 0; i--) {
    sequence.push(i);
  }
  return sequence;
}

console.log(reverseSeq(10));
