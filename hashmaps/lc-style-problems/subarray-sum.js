/**
 * solution 1 -- brute force
 * time: O(n^2)
 * space: O(1)
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function subarraySum(nums, target) {
    for (let start = 0; start < nums.length; start++) {
        let sum = 0;

        for (let end = start; end < nums.length; end++) {
            sum += nums[end];

            if (sum === target) {
                return [start, end];
            }
        }
    }

    return []; // no indices worked
}

console.log(subarraySum([1, 2, 3, 4, 5], 9)); // [1, 3]
console.log(subarraySum([-1, 2, 3, -4, 5], 0)); // [0, 3]
console.log(subarraySum([2, 3, 4, 5, 6], 3)); // [1, 1]
console.log(subarraySum([], 0)); // []
