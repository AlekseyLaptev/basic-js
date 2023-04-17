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
  if(str.length == 0) return str
  let res = "";
  let amount = 1;
  str.split("").forEach((el,idx,arr)=>{
    console.log(el)
    console.log("Next",arr[idx++])
    if(el === arr[idx++]) {
      amount++; 
    } else {
      let num = amount == 1? "" : amount;
      res = res + num + el;
      amount = 1
    }
  })
  return res
}

module.exports = {
  encodeLine
};
