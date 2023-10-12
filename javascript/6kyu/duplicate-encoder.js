// Duplicate Encoder

/* 
  * input: word
  * output: new string with "(" if char appears only once in original string
    or ")" if that character appears more than once in original array.
*/

function duplicateEncode(word) {
  let encoded = "";
  word = word.toLowerCase();
  for (let char of word) {
    let duplicate = word.split("").filter(x => char === x);
    if (duplicate.length > 1) {
      encoded += ")";
    } else {
      encoded += "("
    }
  }
  return encoded;
}

const word = "Success";

console.log(duplicateEncode(word))
