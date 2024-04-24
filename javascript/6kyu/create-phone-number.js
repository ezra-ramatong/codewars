/* function createPhoneNumber(array) {
  const phoneNumber = array.join("");
  const firstThreeDigits = phoneNumber.slice(0, 3);
  const nextThreeDigits = phoneNumber.slice(3, 6);
  const lastFourDigits = phoneNumber.slice(6);
  return `(${firstThreeDigits}) ${nextThreeDigits}-${lastFourDigits}`;
} */

function createPhoneNumber(number) {
  return number.join("").replace(/(\d{3})(\d{3})(\d{4})/, `($1) $2-$3`);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
