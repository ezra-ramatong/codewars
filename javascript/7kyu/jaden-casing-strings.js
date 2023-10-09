// Jaden Casing Strings

let testStr = "How can mirrors be real if our eyes aren't real";
console.log(testStr.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" "))
