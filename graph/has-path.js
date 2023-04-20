"use strict";

// /**
//  * Obj representing the adjacency list of a directed acyclic graph and two nodes (src, dest)
//  * The func should return a bool indicating whether or not there exists a directed path between the src and dest nodes
//  * 
//  * solution 1 -- recursive dfs
//  * time: O(e)
//  * space: O(e)
//  * 
//  * @param {object} graph
//  * @param {string} src
//  * @param {string} dest
//  * @returns {boolean}
//  */
// function hasPath(graph, src, dest) {
//     // found my destination
//     if (src === dest) return true;

//     const adjacencyArr = graph[src];

//     for (let neighbor of adjacencyArr) {
//         if (hasPath(graph, neighbor, dest) === true) {
//             return true;
//         }
//     }

//     return false;
// }

// const graph = {
//     f: ["g", "i"],
//     g: ["h"],
//     h: [],
//     i: ["g", "k"],
//     j: ["i"],
//     k: []
// };
// console.log( hasPath(graph, "f", "k") ); // true

// /**
//  * Obj representing the adjacency list of a directed acyclic graph and two nodes (src, dest)
//  * The func should return a bool indicating whether or not there exists a directed path between the src and dest nodes
//  * 
//  * solution 2 -- iterative bfs
//  * time: O(n^2)
//  * space: O(n)
//  * 
//  * @param {object} graph
//  * @param {string} src
//  * @param {string} dest
//  * @returns {boolean}
//  */
// function hasPath(graph, src, dest) {
//     let queue = [src];

//     while (queue.length > 0) {
//         const current = queue.shift();

//         if (current === dest) return true;

//         // otherwise, check neighbors
//         const adjacencyArr = graph[current];

//         for (let neighbor of adjacencyArr) {
//             queue.push(neighbor);
//         }
//     }

//     return false;
// }

// const graph = {
//     f: ["g", "i"],
//     g: ["h"],
//     h: [],
//     i: ["g", "k"],
//     j: ["i"],
//     k: []
// };

/**
 * Obj representing the adjacency list of a directed acyclic graph and two nodes (src, dest)
 * The func should return a bool indicating whether or not there exists a directed path between the src and dest nodes
 * 
 * solution 3 -- iterative DFS
 * time: O(e)
 * space: O(n)
 * 
 * @param {object} graph
 * @param {string} src
 * @param {string} dest
 * @returns {boolean}
 */
function hasPath(graph, src, dest) {
    let stack = [src];

    while (stack.length > 0) {
        const current = stack.pop();

        if (current === dest) return true;

        // otherwise, check neighbors
        const adjacencyArr = graph[current];

        for (let neighbor of adjacencyArr) {
            stack.push(neighbor);
        }
    }

    return false;
}

const graph = {
    f: ["g", "i"],
    g: ["h"],
    h: [],
    i: ["g", "k"],
    j: ["i"],
    k: []
};
console.log( hasPath(graph, "f", "k") ); // true
console.log( hasPath(graph, "f", "j") ); // false
