const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");
  let newArray = arr.slice();
	for(let i=0;i<newArray.length;i++) {
		switch(newArray[i]) {
			case '--discard-next':
				if(i < newArray.length-1) {
					delete newArray[i+1];
					delete newArray[i];
				} else
				delete newArray[i];
				break;
			case '--discard-prev':
				if(i > 0) {
					delete newArray[i-1];
					delete newArray[i];
				} else
				delete newArray[i];
				break;
			case '--double-next':
				if(i < newArray.length-1) {
					newArray[i] = newArray[i+1];
				} else
				delete newArray[i];
				break;
			case '--double-prev':
				if(i > 0) {
					newArray[i] = newArray[i-1];
				} else			
				delete newArray[i];
				break;
		}
	}
	newArray = newArray.filter(function(element) {
        return element != undefined
    });
	return newArray;
}

module.exports = {
  transform
};
