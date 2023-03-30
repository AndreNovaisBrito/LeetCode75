/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map;
    for(let i = 0; i < nums.length; i++){
        console.log(nums[i])
        console.log(map.get(nums[i]))
        if(map.has(nums[i])) {
            console.log('entrou no if')
            return [map.get(nums[i]), i];
        }
        map.set(target - nums[i], i)
        console.log(map)
    }
    console.log(map.get(2))

    return -1;
};

console.log(twoSum([2,7,11,15], 9))