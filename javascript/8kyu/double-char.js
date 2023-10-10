// Double Char
/* let testStr = "Hello World"; let doubleStr = "";

for (let i = 0; i < testStr.length; i++) {
  doubleStr += testStr[i] + testStr[i];
}

console.log(doubleStr); */

function doubleChar(str) {
  let doubledStr = "";
  for (let char of str) {
    doubledStr += char + char;
  }
  return doubledStr;
}

console.log(doubleChar("car"));
console.log(doubleChar("string"));
console.log(doubleChar("Hello World"));
