/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {    
    for(let [index,num] of nums.entries()){
        //console.log(index);
        //console.log(num);
        //console.log(target);
        let y = target-num
        //console.log(y);
        for(var i=0;i<nums.length;i++){
            if(y == nums[i]){
                if(index < i){
                    return [index,i]
                }
            }
        }
    }
};
