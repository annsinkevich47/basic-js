const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function sumOfDigit () {
    let sum = 0;
    let arr = String(n).split("");
    for (let i = 0; i < arr.length -1; i++) {
      if (i === 0) {
        sum += (Number(arr[i]) + Number(arr[i+1]));
      } else {
        sum += + Number(arr[i+1]);
      }
    }
    n = sum;
    return n
  }
  while (String(n).length > 1) {
    sumOfDigit()
  }
  return n
}

module.exports = {
  getSumOfDigits
};
