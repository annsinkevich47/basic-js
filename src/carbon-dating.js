const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity ) {
  if ( isNaN(sampleActivity) === true || typeof sampleActivity !== "string" || sampleActivity === undefined || sampleActivity < 1 || sampleActivity < 0 || sampleActivity > MODERN_ACTIVITY) {
    return false
  } else if (isFinite (sampleActivity)) {
    let k = 0.693 / 5730;
    let n = 15 / sampleActivity;
    return Math.ceil(Math.log(n) / k);
  } else {
    return false
  }
}

module.exports = {
  dateSample
};
