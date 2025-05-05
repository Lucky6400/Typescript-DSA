// N-Queens Problem in TypeScript
function solveNQueens(n: number): string[][] {
  const result: string[][] = [];
  const board: string[][] = Array.from({ length: n }, () => Array(n).fill('.'));
  
  function isSafe(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q' || 
          board[i][col - (row - i)] === 'Q' || 
          board[i][col + (row - i)] === 'Q') {
        return false;
      }
    }
    return true;
  }
  
  function solve(row: number): void {
    if (row === n) {
      result.push(board.map(row => row.join('')));
      return;
    }
    for (let col = 0; col < n; col++) {
      if (isSafe(row, col)) {
        board[row][col] = 'Q';
        solve(row + 1);
        board[row][col] = '.'; // Backtrack
      }
    }
  }
  
  solve(0);
  return result;
}