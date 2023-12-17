const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(/* date */)  {
  throw new NotImplementedError('Not implemented');
  // let year = date.getFullYear();
  // let month = date.getMonth();
  // let dateN = date.getDate();
  // let hours = date.getHours();
  // let minute = date.getMinutes();
  // let sec = date.getSeconds();
  // let milSec = date.getMilliseconds();
  // let newDate = new Date(year, month, dateN, hours, minute, sec, milSec);
  // console.debug(newDate);
  // if (newDate != date) {
  //   throw new Error("Invalid date!")
  // }

  
  // if (date.hasOwnProperty("getMonth")) {
  //   throw new Error("Invalid date!")
  // }
  // if (!(date instanceof Date && !isNaN(date))) {
  //   throw new Error("Invalid date!")
  // }
  // if (date.getDay() == 0 && date.getHours() == 3) {
  //   throw new Error("Invalid date!")
  // }
 
  // const dateOfMonth = date.getMonth()
  // console.debug(date)
  // const dateOfDay = date.getDay();
  // console.debug(dateOfDay)
  // console.debug(date.getHours())
  // let months = ["winter", "winter", "spring", "spring", "spring", "summer", "summer", "summer", "autumn (fall)", "autumn (fall)", "autumn (fall)", "winter"];
  // let goalMonth = months[dateOfMonth]
  // return goalMonth
  
}

module.exports = {
  getSeason
};
