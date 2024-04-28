// Persistent Bugger (6kyu)

// Input: positive integer (num)
// Return the number of times you must multiply the digits in num until you
// reach a single digit (return an int)

function persistence(num) {
  if (num >= 0 && num <= 9) return 0;

  let count = 0;

  while (!(num >= 0 && num <= 9)) {
    num = Array.from(String(num)).reduce((acc, curr) => acc * curr);
    count++;
  }

  return count;
}
