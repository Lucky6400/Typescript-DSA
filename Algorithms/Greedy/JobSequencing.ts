// Job Sequencing Problem (Greedy) in TypeScript
function jobSequencing(jobs: { id: string, profit: number, deadline: number }[]): string[] {
  jobs.sort((a, b) => b.profit - a.profit);
  
  const n = jobs.length;
  const result: string[] = [];
  const slots: boolean[] = Array(n).fill(false);

  for (let i = 0; i < n; i++) {
    for (let j = Math.min(n, jobs[i].deadline) - 1; j >= 0; j--) {
      if (!slots[j]) {
        slots[j] = true;
        result.push(jobs[i].id);
        break;
      }
    }
  }

  return result;
}
