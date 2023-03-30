var productExceptSelf = function(nums) {
    let pre = []
    let suf = []
    let res = []
    pre[0] = 1
    for(let i = 1 ; i < nums.length; i ++){
        pre.push((pre[i-1])*(nums[i-1]))
    }
    suf[0] = 1;
    for(let i = nums.length-1; i > 0; i--){
        suf.unshift(suf[0]*nums[i]);
    }
    for(let i = 0; i<nums.length; i++){
        res[i] = pre[i]*suf[i]
    }
    return res
};

productExceptSelf([1,2,3,4])