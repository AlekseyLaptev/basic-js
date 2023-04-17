const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(a) {
  for (let i = 0; i < a.length; i++) {
    let el = a[i];
    if(el == -1) continue;  
    
    for (let j = 0; j < a.length; j++) {
        if(a[j] == -1) continue; 
        if(a[i] < a[j]) {
          let temp = a[i]
          a[i]= a[j]
          a[j] = temp
        }     
    }
  }
  return a
}

module.exports = {
  sortByHeight
};
