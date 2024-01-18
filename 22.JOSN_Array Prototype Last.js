/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const val = this[this.length - 1];
    if(val === null && typeof(val) == "object") return null;
    if(val != undefined){
        return this[this.length - 1]
    }
    return -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */