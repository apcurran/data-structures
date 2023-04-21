"use strict";

/**
 * solution 1 -- recursive DFS
 * time: O(e)
 * space: O(n)
 * 
 * @param {object} graph 
 * @returns {number}
 */
function largestComponent(graph) {
    let visitedNodes = new Set();
    let longestSize = 0;

    for (let node in graph) {
        const size = exploreSize(graph, node, visitedNodes);

        if (size > longestSize) longestSize = size;
    }

    return longestSize;
}

/**
 * @param {object} graph 
 * @param {string} currentNode 
 * @param {Set} visitedNodes
 * @returns {number}
 */
function exploreSize(graph, currentNode, visitedNodes) {
    if (visitedNodes.has(currentNode)) return 0;

    visitedNodes.add(currentNode);

    const adjacentNeighbors = graph[currentNode];
    let size = 1; // current node we're on right now

    for (let neighbor of adjacentNeighbors) {
        size += exploreSize(graph, neighbor, visitedNodes);
    }

    return size;
}

console.log( largestComponent({
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"]
}) ); // 4

console.log( largestComponent({
        1: ["2"],
        2: ["1", "8"],
        6: ["7"],
        9: ["8"],
        7: ["6", "8"],
        8: ["9", "7", "2"]
}) ); // 6