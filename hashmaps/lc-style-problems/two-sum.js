/**
 * solution 1 -- hashmap
 * time: O(n)
 * space: O(n)
 *
 * single pass, no repeat iterations of nums
 * @param {number[]} nums
 * @param {number} target
 * @returns {[number, number] | []} [num1Index, num2Index]
 */
function twoSum(nums, target) {
    let valueToIndex = new Map(); // [numValueKey, numIndex]

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const neededValue = target - num;

        if (valueToIndex.has(neededValue)) {
            const neededIndex = valueToIndex.get(neededValue);

            return [neededIndex, i];
        } else {
            valueToIndex.set(num, i);
        }
    }

    return []; // no matches found
}

console.log(twoSum([5, 1, 7, 2, 9, 3], 10)); // [1, 4]
console.log(twoSum([1, 2, 3, 4, 5], 10)); // []
console.log(twoSum([2, 1, 2, 7, 11, 15], 9)); // [2, 3]
