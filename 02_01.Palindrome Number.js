
var isPalindrome = function(x) {
    //let reversed = x.toString().split('');
    //console.log(reversed);   //[ '1', '2', '1', '3' ]
    //let reversed = x.toString().split('').reverse();
    //console.log(reversed);  // [ '3', '1', '2', '1' ]
    let reversed = x.toString().split('').reverse().join('');
    console.log(reversed)  //3121
    return (x.toString() === reversed);
    
};
