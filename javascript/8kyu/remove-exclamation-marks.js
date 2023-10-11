function removeExclamationMarks(s) {
  // return s.split("").filter(x => x !== "!").join("") <-- my solution :(
  // return s.split('!').join('');
}

const testString = 'Hejda!Kuw!Quat!!f!'

console.log(removeExclamationMarks(testString))
