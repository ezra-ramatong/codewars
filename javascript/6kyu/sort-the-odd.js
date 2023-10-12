// Sort the odd

/*
  * input: array of numbers 
  * desired output: array of odd numbers sorted in ascending order.
  * even numbers must remain in their positions. 
  * 
*/

/* function sortArray(array) {
  let oddNum = array.filter(num => num % 2 === 1);
  for (let num of array) {
    if (num % 2 === 1) {
      array.splice(array.indexOf(num), 1, "");
    }
  }
  let sortedOddNum = oddNum.sort();
  let j = 0;
  for (let num of array) {
    if (num === "") {
      array.splice(array.indexOf(num), 1, sortedOddNum[j]);
      j++;
    }
  }
  return array;
} */
// ^ THIS WORKS


// testing ground:
// ------------------------------------
// 1. modified selection sort algorithm

// const nums2 = [5, 8, 6, 3, 4]; // => [3, 8, 6, 5, 4]
const nums2 = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];  // =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

/* for (let i = 0; i < nums2.length - 1; i++) {
  let min_index = i;
  if (nums2[min_index] % 2 === 1) {
    for (let j = i + 1; j < nums2.length; j++) {
      if (nums2[j] % 2 === 1) {
        if (nums2[min_index] > nums2[j]) min_index = j;
      }
    }
    if (min_index != i) {
      let temp = nums2[i];
      nums2[i] = nums2[min_index];
      nums2[min_index] = temp;
    }
  }
}
console.log(nums2); */
// ^ this code works ala modified selection sort
// took 151 steps for input num2

// 2. 
/* function isOdd(num) {
  return num % 2 === 1;
}

for (let num of nums2) {
  if (isOdd(num)) {

  };
  console.log(isOdd ? num : "even");
} */

const test = ["cat", "", "bird", ""];
const food = ["burger", "pizza", "pasta", "wings"];

console.log("before", test);

let j = 0;
let oddNums = nums2.filter(num => num % 2 === 1);
console.log(oddNums);
for (let animal of test) {
  let i = test.indexOf(animal);
  if (animal === "") {
    test.splice(i, 1, food.at(j));
    j++;
  }
}


console.log("after", test);
console.log(sortArray(nums2));

// final draft

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



