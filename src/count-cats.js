const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
const cat = '^^'
function countCats(matrix) {
  if(Array.isArray(matrix)) {
    return matrix.map(el => countCats(el)).reduce((acc,el)=> acc + el,0)
  } else {
    if(typeof matrix == 'string' && matrix === cat) return 1
    else return 0
  }
}

module.exports = {
  countCats
};
