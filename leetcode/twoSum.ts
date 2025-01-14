/**
 * Two Sum Problem
 * 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to the target.
 * 
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * 
 * Example:
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();
  

    for(let i = 0; i < nums.length; i++){
        const el = nums[i];
        const diff = target - el;

        if(numMap.has(diff)){
            return [i, numMap.get(diff) as number]
        }

        numMap.set(el, i)
    }

    return [-1,-1];
}

// Example usage:
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Expected output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Expected output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Expected output: [0, 1]

// Add more test cases if needed