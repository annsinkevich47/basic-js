const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],
  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === undefined) { 
      this.links.push("( )"); 
      return this;
    }
    this.links.push(`~( ${value} )~`);
    return this;
  },
  removeLink(position) {
    if (Number (position) && position >= 1 && position <= this.links.length) {
      this.links.splice(position-1, 1)
      return this
    } 
    else {
      this.links = []
      throw new Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    this.links.reverse();
    return this
  },
  finishChain() {
    this.links.slice(1, this.links.length - 1);
    let x = this.links.join("").slice(1, this.links.join("").length -1);
    this.links = [];
    return x;
  }
};

module.exports = {
  chainMaker
};
