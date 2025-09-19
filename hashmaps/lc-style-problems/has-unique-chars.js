/**
 * solution 1 -- hashset
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {boolean}
 */
function hasUniqueChars(str) {
    const allUnique = new Set(str);

    return allUnique.size === str.length;
}

console.log(hasUniqueChars("abcdefg")); // true
console.log(hasUniqueChars("hello")); // false
console.log(hasUniqueChars("")); // true
console.log(hasUniqueChars("0123456789")); // true
