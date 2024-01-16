/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let len = functions.length;
        let ans = []

        functions.forEach((fn, ind) => {
            fn().then((val) => {
                ans[ind] = val
                len--;
                if(len === 0){
                    resolve(ans)
                }
            }).catch((err) => {
                reject(err)
            })
        })
    })
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */