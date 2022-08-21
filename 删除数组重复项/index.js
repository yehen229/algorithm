/*
    升序排列数组，原地删除重复的元素，使每个元素仅出现一次
    示例 1：

    输入：nums = [1,1,2]
    输出：2, nums = [1,2,_]
    解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
    示例 2：

    输入：nums = [0,0,1,1,1,2,2,3,3,4]
    输出：5, nums = [0,1,2,3,4]
    解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

    */

    var removeDuplicates = function(nums) {
        let i = 0;
        let j = 1;
        let temp = nums;
        while(i<temp.length){
            if(nums[i] == nums[j]){
                nums.splice(j,1);
            } else {
                j++;
                i++;
            }
        }
        console.log(nums);
        
};
    
let nums = [1, 1, 2];

removeDuplicates(nums);
