const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    let count = 1;
    let max = 0;
    for (let sub of array) {
      if (Array.isArray(sub)) {
        max = Math.max(this.calculateDepth(sub), max);
      }
    }
    return count + max;
  }
}

module.exports = {
  DepthCalculator
};
