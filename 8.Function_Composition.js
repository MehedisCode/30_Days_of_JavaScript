/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(num){
        return functions.reduceRight((accum, curr) => {
            return curr(accum)
        }, num)
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */