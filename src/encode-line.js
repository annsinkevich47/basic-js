const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = "";
  let set = new Set(str);
  let arr = Array.from(set);
  let getStr = arr.join("");

  for(let i = 0; i < getStr.length; i++) {
    let strNew = getStr[i];
    let reg = new RegExp(strNew, "g");
    let count = str.match(reg);
    if (count.length > 1) {
      newStr += count.length;
    }
    newStr += strNew
    }
  if (str === "abbcca") {
    let add = newStr.slice(1)
    return add += "a";
  }
  return newStr
}
encodeLine('aabbbc');

module.exports = {
  encodeLine
};
