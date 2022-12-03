/**
 * @param {string[]} strs
 * @return {string}
 */
 
 
var longestCommonPrefix = function(strs) {
    
    let prefix = strs[0];
    //console.log(prefix); //dog
    //console.log(strs[2].indexOf(prefix)); 
    // indexOf () 方法可返回某个指定的字符串值在字符串中首次出现的位置。如果没有找到匹配的字符串则返回 -1。

    for(i=0;i<strs.length;i++){
        // while 跟 for 語法用途一樣，while 是另一種迴圈語法，用來重覆執行 while 區塊內的語句。
        while(strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0,prefix.length -1);
            console.log(prefix);       
        }
    }
    return prefix
    
    
    
    
    /* 
    
// only for first two prefix situation

    //console.log(strs[0]); // flower
    //console.log(strs[0].slice(0,2)); // fl
    //console.log(strs.length); //3
    //console.log(strs[0].length); //6
        
    
    
    for(let i=1;i<strs.length;i++){
        if(strs[i-1].slice(0,2) === strs[i].slice(0,2)){
            let a = strs[i].slice(0,2);
            console.log(a);
        }else{
            console.log('no')
            return ""
        }
        
    }
    return strs[0].slice(0,2)
    */

};
