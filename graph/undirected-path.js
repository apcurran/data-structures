"use strict";

/**
 * solution 1 -- recursion
 * time: O(e)
 * space: O(e)
 *
 * @param {string[][]} edges
 * @param {string} nodeA
 * @param {string} nodeB
 * @returns {boolean}
 */
function undirectedPath(edges, nodeA, nodeB) {
    const constructedGraph = buildGraph(edges);

    return hasPath(constructedGraph, nodeA, nodeB, new Set());
}

/**
 * @param {object} graph
 * @param {string} src
 * @param {string} dest
 * @param {Set} visited
 * @returns {boolean}
 */
function hasPath(graph, src, dest, visited) {
    if (src === dest) return true;

    if (visited.has(src)) return false;

    // add curr node to visited Set
    visited.add(src);

    const neighbors = graph[src];

    for (let neighbor of neighbors) {
        if (hasPath(graph, neighbor, dest, visited) === true) {
            return true;
        }
    }

    return false;
}

/**
 * @param {string[][]} edges
 * @returns {object}
 */
function buildGraph(edges) {
    let graph = {};

    for (let edge of edges) {
        const [a, b] = edge;

        if (!(a in graph)) {
            graph[a] = [];
        }

        if (!(b in graph)) {
            graph[b] = [];
        }

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const myEdges = [
    ["i", "j"],
    ["k", "i"],
    ["m", "k"],
    ["k", "l"],
    ["o", "n"],
];

console.log(undirectedPath(myEdges, "j", "m")); // true
