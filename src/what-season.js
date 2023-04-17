const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  if(!(date instanceof Date)) throw new Error('Invalid date!')
  if(Object.prototype.toString.call(date) !== "[object Date]") throw new Error('Invalid date!')
  if(Object.getOwnPropertySymbols(date).length != 0) throw new Error('Invalid date!')
  const winter = new Set([11,0,1]);
  const spring = new Set([2,3,4]);
  const summer = new Set([5,6,7]);
  const autumn = new Set([8,9,10]);
  const month = date.getMonth()
  if(winter.has(month)) return 'winter'
  if(spring.has(month)) return 'spring'
  if(summer.has(month)) return 'summer'
  if(autumn.has(month)) return 'autumn'
}

module.exports = {
  getSeason
};
