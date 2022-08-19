/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = new Map();
    let res = [];
    for(let i = 0;i<nums.length;i++){
        map.set(nums[i],i);
    }
    for(let i = 0;i<nums.length;i++){
        let num2 = target - nums[i];
        if(map.has(num2) && map.get(num2) != map.get(nums[i])){
            res.push(map.get(nums[i]));
            res.push(map.get(num2));
            return res;
        }
    }
};