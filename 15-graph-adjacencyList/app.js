class Graph {
    constructor() {
        this.nodes = {};
        this.edges = {};
    }

    addNode(identifier, value) {
        if (this.nodes[identifier]) throw new Error('Node already exists');
        this.nodes[identifier] = value;
    }

    addEdge(startNode, endNode) {
        if (!this.nodes[startNode] || !this.nodes[endNode]) throw new Error('Node doesn\'t exist');

        if (this.edges[startNode] && this.edges[startNode].has(endNode) === -1) {
            this.edges[startNode].add(endNode);
        } else {
            this.edges[startNode] = new Set([endNode]);
        }
    }

    hasEdge(startNode, endNode) {
        if (!this.edges[startNode]) return false;
        return this.edges[startNode].has(endNode);
    }

    getNodesEdges(node) {
        return this.edges[node];
    }

    removeNode(nodeID) {
        delete this.nodes[nodeID];
        delete this.edges[nodeID];

        for (const edgeID in this.edges) {
            this.edges[edgeID].delete(nodeID);
        }
    }

    removeEdge(startNode, endNode) {
        if (!this.edges[startNode]) return false;
        if (!this.edges[startNode].has(endNode)) throw new Error('Edge does not exist');
        this.edges[startNode].delete(endNode);
    }
}

const graph = new Graph();
graph.addNode(1, 'Sophie');
graph.addNode(2, 'Maxwell');
graph.addNode(3, 'Oliver');

graph.addEdge(1, 2);
graph.addEdge(2, 1);
graph.addEdge(2, 3);
graph.addEdge(3, 2);

console.log(graph.hasEdge(3, 1));
console.log(graph.hasEdge(3, 2));

console.log(graph.getNodesEdges(2));

graph.removeEdge(3, 2);
debugger
