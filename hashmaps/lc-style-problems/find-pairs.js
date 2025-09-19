/**
 * solution 1 -- hashset
 * n = nums1 length
 * m = nums2 length
 * time: O(n + m)
 * space: O(m)
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} target
 * @returns {number[][]}
 */
function findPairs(nums1, nums2, target) {
    const nums2Set = new Set(nums2);
    let results = [];

    for (let num1Value of nums1) {
        const neededValue = target - num1Value;

        if (nums2Set.has(neededValue)) {
            results.push([num1Value, neededValue]);
        }
    }

    return results;
}

console.log(findPairs([1, 2, 3, 4, 5], [2, 4, 6, 8, 10], 7));
// [[5, 2], [3, 4], [1, 6]]
