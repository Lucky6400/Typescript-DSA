// Huffman Coding (Greedy) in TypeScript
class Node {
  constructor(public char: string, public freq: number) {}
}

function buildHuffmanTree(s: string): { [key: string]: string } {
  const freqMap: { [key: string]: number } = {};

  for (const char of s) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  const priorityQueue: Node[] = [];
  for (const [char, freq] of Object.entries(freqMap)) {
    priorityQueue.push(new Node(char, freq));
  }

  priorityQueue.sort((a, b) => a.freq - b.freq);

  while (priorityQueue.length > 1) {
    const left = priorityQueue.shift()!;
    const right = priorityQueue.shift()!;
    const internalNode = new Node('', left.freq + right.freq);

    priorityQueue.push(internalNode);
    priorityQueue.sort((a, b) => a.freq - b.freq);
  }

  return buildCode(priorityQueue[0], '');
}

function buildCode(node: Node, code: string): { [key: string]: string } {
  const result: { [key: string]: string } = {};
  if (!node.char) {
    result[node.char] = code;
  }
  return result;
}
