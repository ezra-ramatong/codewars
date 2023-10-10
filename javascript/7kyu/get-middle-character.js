// Get middle Character
/* const testStr = "string";
const testStr2 = "character";

let middleIndex = Math.floor((testStr2.length - 1) / 2);
console.log(testStr2.charAt(middleIndex)); */

function getMiddle(s) {
  let midChar = Math.floor((s.length - 1) / 2);
  return s.length % 2 ? s.charAt(midChar) : s.slice(midChar, midChar + 2);
}

console.log(getMiddle('string'));

