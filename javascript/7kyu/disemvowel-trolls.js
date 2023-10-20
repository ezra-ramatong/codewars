// Disemvowel Trolls
function disemvowel(str) {
  return str.replace(/[aeiou]/gi, "");
}

const str = "This website is for losers LOL!";

console.log(disemvowel(str));
