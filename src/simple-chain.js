const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links : [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === undefined) {
      this.links.push("");
      return this.links;
    }
    this.links.push(`${value}`);
    return this.links
  },
  removeLink(/* position */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
