class UnweightedGraph<T> {
    private vertices: Map<T, Set<T>>;
    private isDirected: boolean;

    constructor(isDirected: boolean = false) {
        this.vertices = new Map();
        this.isDirected = isDirected;
    }

    // Add a vertex to the graph
    addVertex(vertex: T): void {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, new Set());
        }
    }

    // Add an edge between two vertices
    addEdge(source: T, destination: T): void {
        // Add vertices if they don't exist
        this.addVertex(source);
        this.addVertex(destination);

        // Add edges
        this.vertices.get(source)!.add(destination);
        if (!this.isDirected) {
            this.vertices.get(destination)!.add(source);
        }
    }

    // Remove a vertex and all its edges
    removeVertex(vertex: T): void {
        if (!this.vertices.has(vertex)) return;

        for (const [_, edges] of this.vertices) {
            edges.delete(vertex);
        }

        this.vertices.delete(vertex);
    }

    // Remove an edge between two vertices
    removeEdge(source: T, destination: T): void {
        if (!this.vertices.has(source) || !this.vertices.has(destination)) return;

        this.vertices.get(source)!.delete(destination);
        if (!this.isDirected) {
            this.vertices.get(destination)!.delete(source);
        }
    }

    // Get all vertices
    getVertices(): T[] {
        return Array.from(this.vertices.keys());
    }

    // Get all edges
    getEdges(): [T, T][] {
        const edges: [T, T][] = [];
        for (const [vertex, neighbors] of this.vertices) {
            for (const neighbor of neighbors) {
                if (this.isDirected || vertex < neighbor) {
                    edges.push([vertex, neighbor]);
                }
            }
        }
        return edges;
    }

    // Get neighbors of a vertex
    getNeighbors(vertex: T): T[] {
        return this.vertices.has(vertex) 
            ? Array.from(this.vertices.get(vertex)!)
            : [];
    }

    // Check if the graph has a vertex
    hasVertex(vertex: T): boolean {
        return this.vertices.has(vertex);
    }

    // Check if the graph has an edge
    hasEdge(source: T, destination: T): boolean {
        return this.vertices.has(source) && 
               this.vertices.get(source)!.has(destination);
    }

    // Breadth-First Search
    bfs(startVertex: T): T[] {
        if (!this.vertices.has(startVertex)) {
            return [];
        }

        const visited = new Set<T>();
        const result: T[] = [];
        const queue: T[] = [startVertex];

        visited.add(startVertex);

        while (queue.length > 0) {
            const vertex = queue.shift()!;
            result.push(vertex);

            for (const neighbor of this.vertices.get(vertex)!) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }

        return result;
    }

    // Depth-First Search
    dfs(startVertex: T): T[] {
        if (!this.vertices.has(startVertex)) {
            return [];
        }

        const visited = new Set<T>();
        const result: T[] = [];

        const dfsHelper = (vertex: T) => {
            visited.add(vertex);
            result.push(vertex);

            for (const neighbor of this.vertices.get(vertex)!) {
                if (!visited.has(neighbor)) {
                    dfsHelper(neighbor);
                }
            }
        };

        dfsHelper(startVertex);
        return result;
    }

    // Get the number of vertices
    getVertexCount(): number {
        return this.vertices.size;
    }

    // Get the number of edges
    getEdgeCount(): number {
        let count = 0;
        for (const edges of this.vertices.values()) {
            count += edges.size;
        }
        return this.isDirected ? count : count / 2;
    }

    // Clear the graph
    clear(): void {
        this.vertices.clear();
    }
}

// Example usage:
const graph = new UnweightedGraph<number>();
graph.addEdge(1, 2);
graph.addEdge(2, 3);
graph.addEdge(3, 1);
console.log(graph.getVertices()); // [1, 2, 3]
console.log(graph.getEdges()); // [[1, 2], [2, 3], [3, 1]]
console.log(graph.bfs(1)); // [1, 2, 3]
console.log(graph.dfs(1)); // [1, 2, 3] 