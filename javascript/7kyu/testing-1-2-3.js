// Testing 1-2-3 (7kyu)

/*
 * Input: list of strings => ["a", "b", "c", "d"]
 * Output: list of strings prepended with a line number starting at 1 => ["1: a", "2: b", "3: c", "4: d"]
 */

var number = function (array) {
  /*   for (let i = 0; i < array.length; i++) {
    array[i] = `${i + 1}: ${array[i]}`;
  }
  return array; */
  return array.map((item, index) => `${index + 1}: ${item}`);
};

console.log(number(["dastadrly"]));
