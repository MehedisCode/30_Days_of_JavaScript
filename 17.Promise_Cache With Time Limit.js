var TimeLimitedCache = function() {
    this.catch = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */

TimeLimitedCache.prototype.set = function(key, value, duration) {
    let existsValue = this.catch.get(key)
    if(existsValue){
        clearTimeout(existsValue.clrTime)
    }
    const clrTime = setTimeout(() => {
        this.catch.delete(key)
    }, duration)
    this.catch.set(key, {value, clrTime}) 
    return Boolean(existsValue)
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(this.catch.has(key)){
        return this.catch.get(key).value
    } else {
        return -1
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.catch.size;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */