/**
 * @param {string} s
 * @return {boolean}
 */
 
 
 
var isValid = function(s) {
    const map ={ "(":")", "{":"}", "[":"]" };
    const stack = [];
    //console.log(s);  // (){}[]
    //console.log(s[0]);  // (
    //console.log(map["("])  // )
    for(let ch of s){
        if(map[ch]){
            // ch is opening bracket
            stack.push(map[ch]);
            //console.log(stack);
        } else if(stack.length > 0 && stack[stack.length -1] === ch){
            // ch is a closing bracket and top of stack matches
            // console.log(stack);
            stack.pop(); // pop() 移除最后一个数组元素
            //console.log(stack);
        } else {
            // ch is a closing bracket and top of the stack doesn't match
            return false
        }
    }
    return stack.length === 0;
    
};
