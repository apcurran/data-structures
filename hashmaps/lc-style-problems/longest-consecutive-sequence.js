/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {number[]} nums
 * @returns {number} length of longest sequence
 */
function longestConsecutiveSequence(nums) {
    if (nums.length === 0) return 0; // empty list

    const numsSet = new Set(nums);
    let longestSequenceLength = 0;

    for (let num of nums) {
        // otherwise, previous isn't there
        // this indicates the start of a possible sequence
        if (numsSet.has(num - 1)) continue;

        let currentValue = num;
        while (numsSet.has(currentValue + 1)) {
            currentValue++;
        }

        const currentLength = currentValue - num + 1;
        longestSequenceLength = Math.max(longestSequenceLength, currentLength);
    }

    return longestSequenceLength;
}

console.log(longestConsecutiveSequence([100, 4, 200, 1, 3, 2])); // 4
