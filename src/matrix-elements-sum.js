const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(array) {
  let res = 0;
  for (let column = 0; column < array[0].length; column++) {
    for (let row = 0;row < array.length; row++) {
      if(array[row][column] == 0) break;
      res += array[row][column];
    }
  }
  return res;
}

module.exports = {
  getMatrixElementsSum
};
