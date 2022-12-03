/**
 * @param {string} s
 * @return {number}
 */
 
 
var romanToInt = function(s) {
    const map = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
    //console.log(map);
    let res = 0;
    s.split('').forEach((num,i) => {
        //console.log(s.split('')) // [ 'L', 'V', 'I', 'I', 'I' ] *5
        //console.log(num); // L V I I I
        //console.log(i);  //0 1 2 3 4
        //console.log(map[num]); // 50 5 1 1 1
        //console.log(s[i]);
        //console.log(map[s[i]]); // "MCMXCIV" -> 1000 100 1000 10 100 1 5
                                  // "LVIII" -> 50 5 1 1 1
        //console.log(map[s[i+1]]); //  "MCMXCIV" -> 100 1000 10 100 1 5 undefined
                                    //  "LVIII" -> 5 1 1 1 undefined
        if(map[num] < map[s[i+1]]){
            res -= map[num] 
        }
        else{
            res += map[num]
        } 
    })
    return res
};
