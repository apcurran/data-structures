"use strict";

// /**
//  * solution 1 -- iterative
//  * n = num of nodes
//  * e = num of edges
//  * time: O(e)
//  * space: O(n)
//  * 
//  * @param {object} graph 
//  * @returns {void}
//  */
// function depthFirstPrint(graph, sourceNode) {
//     let stack = [sourceNode];

//     while (stack.length > 0) {
//         const currNode = stack.pop();
//         console.log(currNode);

//         // consider neighboring nodes
//         const neighborArr = graph[currNode];

//         for (let neighbor of neighborArr) {
//             stack.push(neighbor);
//         }
//     }
// }

// const graph = {
//     a: ["c", "b"],
//     b: ["d"],
//     c: ["e"],
//     d: ["f"],
//     e: [],
//     f: [],
// };

/**
 * solution 2 -- recursive
 * n = num of nodes
 * e = num of edges
 * time: O(e)
 * space: O(e)
 * 
 * @param {object} graph
 * @param {string} sourceNode
 * @returns {void}
 */
function depthFirstPrint(graph, sourceNode) {
    console.log(sourceNode);
    
    const neighborArr = graph[sourceNode];

    for (let neighbor of neighborArr) {
        depthFirstPrint(graph, neighbor);
    }
}

const myGraph = {
    a: ["b", "c"],
    b: ["d"],
    c: ["e"],
    d: ["f"],
    e: [],
    f: [],
};

console.log( depthFirstPrint(myGraph, "a") ); // a b d f c e
