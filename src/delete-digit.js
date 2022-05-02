const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  // throw new NotImplementedError('Not implemented');
  let toStr = n.toString();
  let array = [];
  for (let i = 0; i < toStr.length; i++) {
    let arr = toStr.split('');
    arr.splice(i, 1);
    array.push(+arr.join(''));
  }

  return array.sort((a, b) => b-a)[0];
}

module.exports = {
  deleteDigit
};
