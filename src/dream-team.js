const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (members === undefined || members === null || typeof members !== "object") {
    return false
  } else {
    let sortArr = [];
    for (let j = 0; j < members.length; j++) {
      if (typeof members[j] === "string") {
        sortArr.push(members[j].trim().toUpperCase());
      }
    }
    sortArr.sort();
    let newArr = "";
    for (let i = 0; i < sortArr.length; i++) {
      if (typeof sortArr[i] === "string") {
        newArr += sortArr[i].slice(0,1);
        
      }
    }
    return newArr
  }

}

module.exports = {
  createDreamTeam
};
