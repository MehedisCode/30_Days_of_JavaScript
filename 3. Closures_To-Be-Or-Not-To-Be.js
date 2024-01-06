/**
 * @param {string} val
 * @return {Object}
 */
function expect(val) {
  function toBe(num){
      if(val === num){
          return true;
      }else{
          throw new Error("Not Equal")
      }
  }
  function notToBe(num2){
      if(val !== num2){
          return true;
      }else{
          throw new Error("Equal")
      }
  }
    return {
      toBe,
      notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
