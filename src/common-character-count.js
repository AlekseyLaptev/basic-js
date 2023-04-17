const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2 ) {
  if(s1.trim().length === 0 || s2.trim().length === 0) return 0
  const transform = (str)=> str
          .split("")
          .reduce((acc,el)=>{
            acc[el] = acc[el]+1 || 1 ; return acc
          } ,{})
          

  const s1Transformed = transform(s1)
  const s2Transformed = transform(s2)
  let occ = 0
  for(letter in s1Transformed) {
    occ = occ + Math.min(s1Transformed[letter],s2Transformed[letter] || 0)
  }
  return occ
}

module.exports = {
  getCommonCharacterCount
};
