// Union-Find (Disjoint Set Union - DSU) in TypeScript
class UnionFind {
  parent: number[];
  rank: number[];

  constructor(n: number) {
    this.parent = Array(n).fill(0).map((_, i) => i);
    this.rank = Array(n).fill(1);
  }

  find(x: number): number {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x: number, y: number) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX !== rootY) {
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

// Usage
const uf = new UnionFind(5);
uf.union(0, 1);
uf.union(1, 2);
uf.union(3, 4);

console.log(uf.find(0));  // Output: 2
