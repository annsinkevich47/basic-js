const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  let arr = [];
  // let addition = [];

  if ((options.separator === undefined) && (options.additionSeparator === undefined) && (options.addition === undefined) && (options.additionRepeatTimes === undefined)) {
    for (let m = 0; m < options.repeatTimes; m++) {
      arr.push(str);
      arr.push("+");
    }
    return arr.join("").slice(0, -1);
  } 

  else if (options.separator != undefined) {
    let leng = (options.separator).length;
    let addLength;
    if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
    }
    for (let j = 0; j < options.repeatTimes; j++) {
      
      arr.push(str)
      if (options.addition != undefined) {
        if (options.additionRepeatTimes === undefined) {
          options.additionRepeatTimes = 1;
        }
        for (let i = 0; i < (options.additionRepeatTimes); i++) {
          arr.push(options.addition)
          if (options.additionSeparator != undefined) {
            addLength = (options.additionSeparator).length;
            arr.push(options.additionSeparator);
            console.debug(arr)
          }
        }
      }
      arr.push(options.separator)
      // console.debug(arr)
    }
    if (options.additionSeparator === undefined) {
      return arr.join("").slice(0, -leng);
    } else {
      return arr.join("").slice(0, -leng).slice(0, -addLength);
    }
    
  }
  // if (options.additionSeparator ===  undefined) {
  //   options.additionSeparator = "|";
  // }
  // for (let i = 0; i < (options.repeatTimes); i++) {
  //   arr.push(str);
  // }
  // if (options.additionSeparator === undefined) {
  //   return arr.join(options.separator)
  // } else {
  //   for (let j = 0; j <options.additionRepeatTimes; j++) {
  //     addition.push(options.addition)
  //   }
  //   separ = addition.join(options.additionSeparator)
  //   return arr.join(separ)
  // }
  

  


}

module.exports = {
  repeater
};
