"use strict";

/**
 * solution 1
 * e = number of edges
 * n = number of nodes
 * time: O(e)
 * space: O(n)
 * 
 * @param {object} graph 
 * @returns {number}
 */
function connectedComponentsCount(graph) {
    let vistedNodes = new Set();
    let count = 0;

    for (let node in graph) {
        const isNewComponent = exploreNeighborNodes(graph, node, vistedNodes);

        if (isNewComponent) count++;
    }

    return count;
}

/**
 * 
 * @param {object} graph 
 * @param {string} currentNode 
 * @param {Set} vistedNodes
 * @returns {boolean}
 */
function exploreNeighborNodes(graph, currentNode, vistedNodes) {
    const numCurrentNode = Number(currentNode);

    if (vistedNodes.has(numCurrentNode)) return false;

    vistedNodes.add(numCurrentNode);

    for (let neighbor of graph[currentNode]) {
        exploreNeighborNodes(graph, neighbor, vistedNodes);
    }
    // new node explored
    return true;
}

console.log( connectedComponentsCount({
    0: [8, 1, 5],
    1: [0],
    5: [0, 8],
    8: [0, 5],
    2: [3, 4],
    3: [2, 4],
    4: [3, 2]
}) ); // 2

console.log( connectedComponentsCount({
    1: [2],
    2: [1,8],
    6: [7],
    9: [8],
    7: [6, 8],
    8: [9, 7, 2]
}) ); // 1