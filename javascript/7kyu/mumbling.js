// Mumbling
//
/* const testStr = "abcd".split("");


console.log(testStr.join("-"));


for (let i = 0; i < testStr.length; i++) {
  console.log(testStr[i].repeat(i + 1));
} */

function capitalize(s) {
  return s[0].toUpperCase() + s.slice(1).toLowerCase();
}

function accum(s) {
  let chars = s.split("").map((char, i) => char.repeat(i + 1));
  return chars.map(char => capitalize(char)).join("-");
}

console.log(accum("RqaEzty"))

// let word = "word";

// capitalize 
// word = word[0].toUpperCase() + word.slice(1);

// console.log();

