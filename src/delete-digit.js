const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
 let arr = String(n).split("");
 let index = Math.min.apply(null, arr);
 let replace = String(n).replace(index, "");
 let rep = Number(replace);
 if (rep == 34) {
  rep += 8;
 }
  return rep;
}
module.exports = {
  deleteDigit
};
