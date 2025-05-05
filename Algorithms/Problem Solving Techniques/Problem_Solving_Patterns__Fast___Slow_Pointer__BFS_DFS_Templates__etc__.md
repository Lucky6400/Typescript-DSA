
# Problem Solving Patterns (Fast & Slow Pointer, BFS/DFS Templates, etc.)

## Problem Solving Patterns
Problem-solving patterns are templates or strategies that have been proven to work for specific types of problems.

## Fast & Slow Pointer
- **Technique**: One pointer moves faster than the other. If the two pointers meet, a cycle exists.

## BFS/DFS Templates
- **Breadth-First Search (BFS)**:
  - Commonly used for finding the shortest path in an unweighted graph.
  - Template:
    ```javascript
    function bfs(startNode) {
      let queue = [startNode];
      let visited = new Set();
      visited.add(startNode);

      while (queue.length > 0) {
        let node = queue.shift();
        // process node
        for (let neighbor of graph[node]) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
    ```
- **Depth-First Search (DFS)**:
  - Used for exploring all nodes in a graph or tree.
  - Template:
    ```javascript
    function dfs(node) {
      visited.add(node);
      // process node
      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    }
    ```

## Conclusion
By mastering these problem-solving patterns, you can improve your problem-solving speed and tackle complex algorithmic challenges with ease.
    