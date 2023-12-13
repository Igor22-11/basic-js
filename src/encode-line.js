const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let cont = 1;
  let string = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cont = cont + 1;
    } else {
      string += `${cont == 1 ? '' : cont}${str[i]}`;
      cont = 1;
    }

  }
  return string;
}

module.exports = {
  encodeLine
};
