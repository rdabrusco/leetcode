/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     //loop through each num in nums
//     for(let i = 0; i < nums.length; i++){
//         for(let j = 0; j < nums.length; j++){
//             if(i !== j){
//                 if(nums[i] + nums[j] === target){
//                     return [i,j]
//                 }
//             }
//         }
//     }
//     // if currentNum + other = target, return indices of both
    
// };
var twoSum = function(nums, target) {
    //create hashmap
    let numsMap = {}
    //loop through each num in nums
    for(let i = 0; i < nums.length; i++){
        //if target - current num already in numsMap, return it
        if(target - nums[i] in numsMap){
            return [numsMap[target-nums[i]], i]
        //else add current num to numsMap with value of i
        }else{
            numsMap[nums[i]] = i
        }
    }
    //return empty arr to not get undefined
    return []
};


//nums, target. 

//nums => 2 <= nums.length, arr of nums, will always be nums
//target => num, num that needs to be added up to. 

// return => indices of the two nums in nums that add up to target. 


console.log(twoSum([2,7,11,15], 9), [0,1])
console.log(twoSum([5,2,4,6], 11), [0,3])
