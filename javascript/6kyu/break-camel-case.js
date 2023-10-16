// Break camelCase
// Complete the solution so that the function will 
// break up camel casing, using a space between words.

function solution(string) {
  const strArr = string.split("");
  for (let i = 0; i < strArr.length; ++i) {
    if (strArr[i] === strArr[i].toUpperCase()) {
      strArr[i] = ` ${strArr[i]}`;
    }
  }
  return strArr.join("");
}


  /* for (let char of strArr) {
    if (char === char.toUpperCase()) {
      strArr[strArr.indexOf(char)] = ` ${char}`;
    }
  }

 */

// slick regex solution from codewars using positive lookahead
//
/* function solution(string) {
    return string.replace(/(?=[A-Z])/g," ")
} */
