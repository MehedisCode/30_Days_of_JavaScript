/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    return (typeof(obj)==="object" && Object.keys(obj).length === 0 ) || (Array.isArray(obj) && obj.length === 0)
};