// Isograms
// An isogram is a word that has no repeating letters, consecutive or non-consecutive.

// check for repeating letters:
// 1. pick first letter in word
// 2. compare it to the next letter.
// 3. if the letters are equal, return false;
//
/* 
let string = "undefined";
let repeatingLetters = [];

let matches = 0;
for (let i = 0; i < string.length - 1; i++) {
  for (let j = i + 1; j < string.length; j++) {
    if (string[i] === string[j]) {
      matches += 1;
      repeatingLetters.push(string[j]);
    }
  }
}

console.log(matches, repeatingLetters.sort()) */;

function isIsogram(str) {
  let matches = 0;
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i].toLowerCase() == str[j].toLowerCase()) matches += 1;
    }
  }
  return matches === 0;
}

console.log(isIsogram('isogram'));
