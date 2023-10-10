// Vowel Count
// Approach 2: Regex
function getCount(str) {
  const count = str.match(/[aAeEiIoOuU]/g);
  return count === null ? 0 : count.length;
}

// Approach 1: Iteration
/* function getCount1(str) {
  let vowelCount = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let vowel in vowels) {
    for (char in str) {
      if (char === vowel) vowelCount++;
    }
  }
  return vowelCount;
} */

const testStr = "brcdbr";

console.log(getCount(testStr));
