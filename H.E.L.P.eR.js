(function(window){
    window.O_O = {
        isInArray: function(array, value) {
            return array.indexOf(value) > 0;
        },

        isInPrototype: function(object, key) {
            return !object.hasOwnProperty(key);
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
    	}
})(this);
