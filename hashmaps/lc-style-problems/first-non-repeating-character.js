/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string|null}
 */
function firstNonRepeatingChar(str) {
    let charCounts = new Map();

    for (let char of str) {
        const charPrevCount = charCounts.get(char) || 0;
        charCounts.set(char, charPrevCount + 1);
    }

    for (let [char, charCount] of charCounts) {
        if (charCount === 1) return char;
    }

    return null;
}

console.log(firstNonRepeatingChar("leetcode")); // "l"
console.log(firstNonRepeatingChar("hello")); // "h"
console.log(firstNonRepeatingChar("aabbcc")); // null
