// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays
// and you may return the result in any order.

// E.g.
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

const intersect = function(nums1, nums2) {
  // If nums 2 arr is longer
  if (nums2.length >= nums1.length) {
      return findCommonElements(nums1, nums2);
  } else {
      return findCommonElements(nums2, nums1);
  }
};

// nums2 is always longer than nums1 here
const findCommonElements = (nums1, nums2) => {
  let common = [];

  for (let i=nums2.length-1; i>=0; i--) {
      let val = nums2[i];
      if(nums1.includes(val)) {
         common.push(val);
          // remove that one occurence of val from nums1
          nums1.splice(nums1.indexOf(val), 1);
         }
  }
  return common;
}


console.log(intersect([1,2,2,1], [2,2])) // expect [2,2]
console.log(intersect([4,9,5], [9,4,9,8,4])) // expect [4,9] or [9, 4]
