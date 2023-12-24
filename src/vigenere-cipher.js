const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

class VigenereCipheringMachine {
  constructor (bool) {
    this.bool = bool;
  }
  
  case (char) {
    if (char === char.toUpperCase()) {
      return true
    }
    if (char === char.toLowerCase()) {
      return false
    }
  }


  checkLetter (str) {
    return str.length === 1 && str.match(/[a-zA-Z]/i);
  }


  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error ("Incorrect arguments!");
    }
    let code = "";
    for (let i = 0, j = 0; i < message.length; i++) {
      const charA = message.charAt(i);
      if (this.checkLetter(charA)) {
        if (this.case(charA)) {
          code += String.fromCharCode((charA.charCodeAt(0) + key.toUpperCase().charCodeAt(j) - 2 * 65) % 26 + 65)
        } else {
          code += String.fromCharCode((charA.charCodeAt(0) + key.toLowerCase().charCodeAt(j) - 2 * 97) % 26 + 97)
        }
        j = ++j % key.length;
      } else {
        code += charA;
      }
    }
     if(message === "attack at dawn!") {
        console.debug(code.toUpperCase())
      }
    if (this.bool === false) {
      return code.split("").reverse().join("").toUpperCase();
    } else {
      return code.toUpperCase();
    }
  };

  decrypt(encryptedMessage, key) {
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error ("Incorrect arguments!");
    }
    let code = "";
    for (let i = 0, j = 0; i < encryptedMessage.length; i++) {
      const charA = encryptedMessage.charAt(i)
      if (this.checkLetter(charA)) {
        if (this.case(charA)) {
          code += String.fromCharCode(90 - (25 - (charA.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
        } else {
          code += String.fromCharCode(112 - (25 - (charA.charCodeAt(0) - key.toUpperCase().charCodeAt(j))) % 26)
        }
        j = ++j % key.length;
      } else {
        code += charA;
      }
    }
    if (this.bool === false) {
      return code.split("").reverse().join("");
    } else {
      return code;
    }
  };
}


module.exports = {
  VigenereCipheringMachine
};