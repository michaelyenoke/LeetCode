/**
 * @param {number} x
 * @return {boolean}
 */
 
 
var isPalindrome = function(x) {
    let reversedStr = '';
    let xStr = x.toString();
    //console.log(xStr);
    
    for(let i of xStr){
        //console.log(i);
        reversedStr = i + reversedStr;
    }
    return (xStr === reversedStr)
};
