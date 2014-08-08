(function(window){
    window.O_O = {
        isInArray: function(array, value) {
            return array.indexOf(value) > 0;
        },

        isInPrototype: function(object, key) {
            return !object.hasOwnProperty(key);
        },
        
        isBetweenNumbers: function(numGiven, numToCheck, ratio) {
            return numGiven >= numToCheck - ratio && numGiven <= numToCheck + ratio;
        },
        
	nodeListToArray: function(nodeList) {
            return [].slice.call(nodeList);
        },

	removeClass: function(el, className) {
	    el.className = el.className.replace(
	        new RegExp('(^|\\s+)' + className + '(\\s+|$)', 'g'),
	            '$1'
	        );
	    }
    	},
    	
    	hasClass: function(el, selector) {
	    var className = ' ' + selector + ' ',
	        elClasses = ' ' + el.className + ' ';
	
	    return elClasses.replace(/[\n\t]/g, ' ').indexOf(className) > -1;
    	},
})(this);
