const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indArr = [];
  let indx = arr.indexOf(-1);
  while (indx != -1) {
    indArr.push(indx);
    indx = arr.indexOf(-1, indx +1);
  }
  arr.sort(function(a,b) {
    return a - b;
  })
  arr.splice(0, indArr.length);
  for (let i = 0; i < indArr.length; i++) {
    arr.splice(indArr[i],0, -1);
  }
  return arr
}

module.exports = {
  sortByHeight
};
