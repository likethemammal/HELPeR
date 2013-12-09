(function(window){
    window.O_O = {
        isInArray: function(array, value) {
            return array.indexOf(value) > 0;
        },

        isInPrototype: function(object, key) {
            return !object.hasOwnProperty(key);
        }
    };
})(this);