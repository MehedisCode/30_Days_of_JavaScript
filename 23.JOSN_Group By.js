/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}
    this.forEach((ele, index) => {
        const key = fn(ele)
        if(obj[key]){
            obj[key].push(ele)
        }else{
            obj[key] = [ele]
        }
    })
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */