const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {	
	chainArr : [],
	splitter : "~~",
  getLength:function() {
    return this.chainArr.length;
    // remove line with error and write your code here
  },
  addLink:function(value) {
   let cell = `( ${value} )`;
   this.chainArr.push(cell);
   return this;
  },
  removeLink:function(position) {
	if(typeof(position) !== "number") {
		throw new Error("You can't remove incorrect link!");	
	}
    if(typeof(this.chainArr[position-1])=== "undefined") {
		this.chainArr = [];
		throw new Error("You can't remove incorrect link!");	
	} else {
		delete this.chainArr[position-1];
		this.chainArr = this.chainArr.filter(function(element) {
			return element != undefined;
		});	
	}	
	return this;
  },
  reverseChain:function() {
    this.chainArr = this.chainArr.reverse();
	return this;
  },
  finishChain:function() {
    let ans = this.chainArr.join(this.splitter);
	this.chainArr = [];
	return ans;
  }
};

module.exports = {
  chainMaker
};
