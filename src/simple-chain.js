const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  array: [],

  getLength() {
    return this.array.length;
  },

  addLink(value) {
    if (value === "") {
      this.array.push("( )~~");
    } else this.array.push(`( ${value} )~~`);
    return this;
  },

  removeLink(position) {
    if (position <= 0 || typeof position !== "number" || position > this.array.length) {
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.array.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this.array.reverse();
    return this;
  },

  finishChain() {
    let newChainString = this.array.join('').slice(0, -2);
    this.array = [];
    return newChainString;
  }

};

module.exports = {
  chainMaker
};
