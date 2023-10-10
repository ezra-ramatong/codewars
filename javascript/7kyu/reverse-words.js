// Reverse words
/* const testStr = "This is an example!";
const revTestStr = testStr.split("").reverse().join("");
console.log(revTestStr, revTestStr.split(" ").reverse().join(" "));
 */
function reverseWords(str) {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr.split(" ").reverse().join(" ");
}

console.log(reverseWords("double spaces"));
