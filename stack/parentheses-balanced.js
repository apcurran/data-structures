/**
 * solution 1
 * time: O(n)
 * space: O(n) -- stack extra space
 *
 * @param {string} str
 * @returns {boolean}
 */
function isBalancedParentheses(str) {
    let stack = [];

    for (let char of str) {
        if (char === "(") {
            // add to stack
            stack.push("(");
        } else if (char === ")") {
            // remove from stack
            if (stack.length === 0) return false; // can never be balanced here

            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(isBalancedParentheses("((()))")); // true
console.log(isBalancedParentheses("(()")); // false
console.log(isBalancedParentheses("")); // true
