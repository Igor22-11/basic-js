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
  let str = n.toString()
  for (let i = 0; i <= 9; i++){
    for (let j = 0; j < str.length; j++){
      if (i === Number(str[j])){
        return Number(str.replace(Number(i),''));
      }
    }
 }
}

module.exports = {
  deleteDigit
};
