// Graph Representations (Adjacency List and Matrix) in TypeScript
class Graph {
  adjacencyList: Map<number, number[]>;
  
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(v: number) {
    this.adjacencyList.set(v, []);
  }

  addEdge(v1: number, v2: number) {
    this.adjacencyList.get(v1)?.push(v2);
    this.adjacencyList.get(v2)?.push(v1);  // For undirected graph
  }

  printGraph() {
    this.adjacencyList.forEach((value, key) => {
      console.log(key + ' -> ' + value.join(', '));
    });
  }
}

// Usage
const g = new Graph();
g.addVertex(1);
g.addVertex(2);
g.addEdge(1, 2);
g.printGraph();
