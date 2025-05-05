// Permutations/Combinations in TypeScript
function getPermutations(str: string): string[] {
  const result: string[] = [];
  
  function permute(prefix: string, remaining: string): void {
    if (remaining.length === 0) {
      result.push(prefix);
    } else {
      for (let i = 0; i < remaining.length; i++) {
        permute(prefix + remaining[i], remaining.slice(0, i) + remaining.slice(i + 1));
      }
    }
  }

  permute('', str);
  return result;
}