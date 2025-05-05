// Rat in a Maze Problem in TypeScript
function solveMaze(maze: number[][]): boolean {
  const n = maze.length;
  const sol: number[][] = Array.from({ length: n }, () => Array(n).fill(0));

  function isSafe(x: number, y: number): boolean {
    return x >= 0 && x < n && y >= 0 && y < n && maze[x][y] === 1;
  }

  function solve(x: number, y: number): boolean {
    if (x === n - 1 && y === n - 1) {
      sol[x][y] = 1;
      return true;
    }

    if (isSafe(x, y)) {
      sol[x][y] = 1;
      if (solve(x + 1, y) || solve(x, y + 1)) {
        return true;
      }
      sol[x][y] = 0; // Backtrack
    }
    return false;
  }

  if (solve(0, 0)) {
    return sol;
  }
  return [];
}