// Increasing Triplet Subsequence

// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

 

// Example 1:

// Input: nums = [1,2,3,4,5]
// Output: true
// Explanation: Any triplet where i < j < k is valid.
// Example 2:

// Input: nums = [5,4,3,2,1]
// Output: false
// Explanation: No triplet exists.
// Example 3:

// Input: nums = [2,1,5,0,4,6]
// Output: true
// Explanation: The triplet (3, 4, 5) is valid because nums[3] == 0 < nums[4] == 4 < nums[5] == 6.

// My solution
var increasingTriplet = function(nums) {
    let res = false;
    for(let i = 0; i<nums.length; i++){
        if(nums[i]<nums[i+1] && nums[i+1] < nums[i+2]){
            res = true;
        }
    }
    
    return res;
};
// ---> its not passing on every test case

//Actual Solutiion
function increasingTriplet(nums) {
    let first = Infinity;
    let second = Infinity;

    for (let num of nums) {
        if (num <= first) {
            first = num; // smallest so far
        } else if (num <= second) {
            second = num; // second smallest
        } else {
            // Found a number > first and second
            return true;
        }
    }

    return false;
}


console.log(increasingTriplet([1,2,3,4,5]))
console.log(increasingTriplet([2,1,5,0,4,6]))
console.log(increasingTriplet([5,4,3,2,1]))