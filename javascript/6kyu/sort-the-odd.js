// Sort the odd

/*
  * input: array of numbers 
  * desired output: array of odd numbers sorted in ascending order.
  * even numbers must remain in their positions. 
  * 
*/

function sortArray(array) {
  let odd = array.filter(x => x % 2).sort((a, b) => a - b);
  let oddIndex = 0;
  array = array.map(x => x % 2 ? x = "" : x);
  return array.map(x => {
    if (x === "") {
      x = odd[oddIndex];
      oddIndex++;
    }
    return x;
  })
}

// cool solution that i like from CW:
//
/* function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x); // odd.shift() magic!
} */



