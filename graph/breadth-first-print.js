"use strict";

/**
 * solution 1
 * time: O(n^2) -- calls array.shift() inside of while loop
 * space: O(n)
 *
 * @param {object} graph
 * @param {string} sourceNode
 * @returns {void}
 */
function breadthFirstPrint(graph, sourceNode) {
    let queue = [sourceNode];

    while (queue.length > 0) {
        const currNode = queue.shift();
        console.log(currNode);

        // add neighbors to queue
        const adjacentNeighbors = graph[currNode];

        for (let neighbor of adjacentNeighbors) {
            queue.push(neighbor);
        }
    }
}

const myGraph = {
    a: ["c", "b"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};

console.log(breadthFirstPrint(myGraph, "a")); // a c b e d f
