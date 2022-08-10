// Given an integer array nums, find the contiguous subarray
// (containing at least one number) which has the largest sum and return its sum.

// E.g.
// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

const maxSubArray = function(nums) {

  let maxCurrent = 0;
  let maxGlobal = nums[0];

  for (let i=0; i<nums.length; i++) {
      maxCurrent = Math.max(nums[i], nums[i] + maxCurrent)
      if(maxCurrent > maxGlobal){
         maxGlobal = maxCurrent;
         }
  }
  return maxGlobal;

};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // expect 6
console.log(maxSubArray([1])) // expect 1
console.log(maxSubArray([5,4,-1,7,8])) // expect 23
