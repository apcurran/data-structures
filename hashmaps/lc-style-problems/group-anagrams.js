/**
 * solution 1
 * time: O(m * n)
 * space: O(m + n)
 *
 * @param {string[]} strs
 * @returns {string[][]}
 */
function groupAnagrams(strs) {
    let result = new Map();

    for (let str of strs) {
        let charCounts = new Array(26).fill(0);

        for (let char of str) {
            charCounts[char.charCodeAt(0) - "a".charCodeAt(0)]++;
        }

        const key = charCounts.join(",");

        if (!result.has(key)) {
            // set empty array value
            result.set(key, []);
        }

        result.get(key).push(str);
    }

    return [...result.values()];
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']]
