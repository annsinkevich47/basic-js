const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error ("'arr' parameter must be an instance of the Array!");
  }

  if (arr === undefined || arr === null ) {
    throw Error ("'arr' parameter must be an instance of the Array!");
  } else if (arr.length == 0) {
    return arr
  }
  let base = arr.slice();
  let newArr = base;
  if (newArr.includes("--discard-next")) {
    let index = newArr.indexOf("--discard-next");
    if (typeof newArr[index + 2] != "number") {
      newArr.splice(index, 3)
      return newArr
    } else if (index < newArr.length -1) {    
      newArr.splice(index, 2)
    } else {
      newArr.pop();
    }
  } 
  
  if (newArr.includes("--discard-prev")) {
    let index = newArr.indexOf("--discard-prev");
    if (index > 0) {
      let newIndex = newArr[index - 1];
      newArr.splice(newIndex, 2);
    } 
    else {
      newArr.shift();
    }
  }
  if (newArr.includes("--double-next")) {
    let index = newArr.indexOf("--double-next");
    if (newArr[index + 2] == "--double-prev" && index < newArr.length -1) {
      let addInd = index + 2;
      let value = newArr[index + 1];
      newArr.splice(addInd, 1);
      newArr.splice(index, 1, value)
      newArr.splice(index, 0, value)
      return newArr
    }
    else if (newArr[index + 2] == "--discard-prev" && index < newArr.length -1) {
      let addInd = index + 2;
      newArr.splice(addInd, 1);
      newArr.splice(index, 1)
      return newArr
    }
    else if (index < newArr.length -1) {
      let newInd = index + 1;
      newArr.splice(index, 1, newInd);
    } else {
      newArr.pop();
    }
  } 
  if (newArr.includes("--double-prev")) {
    let index = newArr.indexOf("--double-prev");
    if (index > 0) {
      let newInd = index - 1;
      newArr.splice(index, 1, newInd);
    } else {
      newArr.shift();
    }
    
  } 
  if (! newArr.includes("--discard-next") && ! newArr.includes("--discard-prev") && ! newArr.includes("--double-next") && ! newArr.includes("--double-prev")) {
    return base
  }
  // arr = base;
  return newArr
}

module.exports = {
  transform
};
