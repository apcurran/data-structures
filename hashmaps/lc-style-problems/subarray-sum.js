// /**
//  * solution 1 -- brute force
//  * time: O(n^2)
//  * space: O(1)
//  *
//  * @param {number[]} nums
//  * @param {number} target
//  * @returns {number[]}
//  */
// function subarraySum(nums, target) {
//     for (let start = 0; start < nums.length; start++) {
//         let sum = 0;

//         for (let end = start; end < nums.length; end++) {
//             sum += nums[end];

//             if (sum === target) {
//                 return [start, end];
//             }
//         }
//     }

//     return []; // no indices worked
// }

/**
 * solution 2 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function subarraySum(nums, target) {
    let prefixMap = new Map([[0, -1]]);
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];
        const difference = currentSum - target;

        if (prefixMap.has(difference)) {
            const start = (prefixMap.get(difference) || 0) + 1;

            return [start, i];
        }

        if (!prefixMap.has(currentSum)) {
            prefixMap.set(currentSum, i);
        }
    }

    return []; // no subarray
}

console.log(subarraySum([1, 2, 3, 4, 5], 9)); // [1, 3]
console.log(subarraySum([-1, 2, 3, -4, 5], 0)); // [0, 3]
console.log(subarraySum([2, 3, 4, 5, 6], 3)); // [1, 1]
console.log(subarraySum([], 0)); // []
