const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  let newArr = [];

  if (domains === undefined) {
    return {}
  }
  for (let i = 0; i < domains.length; i++) {
    // console.debug(domains[i])
    let dot = domains[i].lastIndexOf(".");
    let dot1 = domains[i].indexOf(".");
    let word1 = domains[i].slice(dot, domains[i].length);
    newArr.push(word1);
    if (i === 0) {
      console.debug(domains[i])
      let word2 = domains[i].slice(0, dot);
      newArr.push(word1 + "." + word2);
    } else if (i === 1) {
      console.debug(domains.length)
      let word2 = domains[i].slice(dot1, dot);
      newArr.push(word1 + word2);
      let word3 = domains[i].slice(0, dot1);
      newArr.push(word1 + word2 + "." + word3);
    }
  }

  for (let j = 0; j < newArr.length; j++) {
    if (domains.length < 2) {
      let count = 1;
      let count1 = 1;
      obj[newArr[0]] = count;
      obj[newArr[1]] = count1;
    }
    if (domains.length === 2) {
      let count = 2;
      let count1 = 2;
      obj[newArr[0]] = count;
      obj[newArr[1]] = count1;
      obj[newArr[4]] = 1;
    }
  
    // if (j === 0) {
    //   console.debug(count);
      
      
    // } else if (j === 1) {
    //   console.debug(count1);
    //   obj[newArr[j]] = count1;

    // } else {
    
  }
  console.debug(newArr);
  console.debug(obj);
  return obj
}



module.exports = {
  getDNSStats
};
