// You are given two integer arrays nums1 and nums2, sorted in ascending order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements
// that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
// E.g.
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6], n = 3

const merge = function(nums1, m, nums2, n) {
    let j = 0;
    for(let i=nums1.length - n; i<nums1.length; i++) {
        // Replace the 0 in num1 with the elements in num2
        nums1[i] = nums2[j]
        j++;
    }
    // Sort nums1 in ascending order
    return nums1.sort((a, b) => a-b);
};

console.log(merge([1,2,3,0,0,0], 3, [2,5,6], 3)) // expect [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)) // expect [1]
