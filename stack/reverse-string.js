"use strict";

/**
 * solution 1
 * time: O(n)
 * space: O(n)
 *
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
    let stack = [];

    for (let char of str) {
        stack.push(char);
    }

    let reversedResult = "";

    while (stack.length > 0) {
        const char = stack.pop();
        reversedResult += char;
    }

    return reversedResult;
}

console.log(reverseString("birthday")); // "yadhtrib"
