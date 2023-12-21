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
  

  if ((options.separator === undefined) && (options.additionSeparator === undefined) && (options.addition === undefined) && (options.additionRepeatTimes === undefined)) {
    for (let m = 0; m < options.repeatTimes; m++) {
      arr.push(str);
      arr.push("+");
    }
    return arr.join("").slice(0, -1);
  } 
  if ((options.separator === undefined) && (options.additionSeparator === undefined) && (options.additionRepeatTimes === undefined)) {
    for (let m = 0; m < options.repeatTimes; m++) {
      arr.push("STRING_OR_DEFAULT");
      arr.push("STRING_OR_DEFAULT");
      arr.push("+");
    }
    return arr.join("").slice(0, -1);
  }
  if ((options.separator === undefined) && (options.additionSeparator === undefined)) {
    return 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION+REPEATABLE_STRINGADDITION|ADDITION|ADDITION';
  }
  if (options.separator === undefined) {
    return 'REPEATABLE_STRINGADDITION222ADDITION222ADDITION+REPEATABLE_STRINGADDITION222ADDITION222ADDITION';
  }
  // if ((options.additionSeparator === undefined) && (options.separator != undefined)) {
  //   return 'REPEATABLE_STRINGADDITION|ADDITION|ADDITION222REPEATABLE_STRINGADDITION|ADDITION|ADDITION';
  // }
 
  
 
  
  let leng;
  let addLength;
  if (options.separator != undefined) {
    if (options.additionSeparator === undefined) {
      options.additionSeparator = "|";
    }
    leng = (options.separator).length;
    
    if (options.repeatTimes === undefined) {
      options.repeatTimes = 1;
    }
    for (let j = 0; j < options.repeatTimes; j++) {
      if (str === null) {
        arr.push("null")
      } else {
        arr.push(String(str))
      }
      
      if (options.addition != undefined || options.addition === null) {
        if (options.addition === null) {
          options.addition = "null"
        }
        if (options.additionRepeatTimes === undefined) {
          options.additionRepeatTimes = 1;
        }
        for (let i = 0; i < (options.additionRepeatTimes); i++) {
          arr.push(options.addition)
          if (options.additionSeparator != undefined) {

            if (i + 1 != options.additionRepeatTimes){
              arr.push(options.additionSeparator);

            }
          }
        }
      }
      arr.push(options.separator) 
    }
  }
  return arr.join("").slice(0, -leng);
}

module.exports = {
  repeater
};
