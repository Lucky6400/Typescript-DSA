class TrieNode {
    children: Map<string, TrieNode>;
    isEndOfWord: boolean;
    count: number;

    constructor() {
        this.children = new Map();
        this.isEndOfWord = false;
        this.count = 0;
    }
}

class Trie {
    private root: TrieNode;
    private wordCount: number;

    constructor() {
        this.root = new TrieNode();
        this.wordCount = 0;
    }

    // Insert a word into the trie
    insert(word: string): void {
        let current = this.root;
        
        for (const char of word) {
            if (!current.children.has(char)) {
                current.children.set(char, new TrieNode());
            }
            current = current.children.get(char)!;
            current.count++;
        }
        
        if (!current.isEndOfWord) {
            current.isEndOfWord = true;
            this.wordCount++;
        }
    }

    // Check if a word exists in the trie
    search(word: string): boolean {
        const node = this.searchNode(word);
        return node !== null && node.isEndOfWord;
    }

    // Check if there is any word in the trie that starts with the given prefix
    startsWith(prefix: string): boolean {
        return this.searchNode(prefix) !== null;
    }

    // Get all words with a given prefix
    getWordsWithPrefix(prefix: string): string[] {
        const result: string[] = [];
        const node = this.searchNode(prefix);

        if (node !== null) {
            this.dfs(node, prefix, result);
        }

        return result;
    }

    // Remove a word from the trie
    remove(word: string): boolean {
        return this.removeHelper(this.root, word, 0);
    }

    // Get the count of words with a given prefix
    countWordsWithPrefix(prefix: string): number {
        const node = this.searchNode(prefix);
        return node ? node.count : 0;
    }

    // Get the total number of words in the trie
    getWordCount(): number {
        return this.wordCount;
    }

    // Check if the trie is empty
    isEmpty(): boolean {
        return this.wordCount === 0;
    }

    // Clear the trie
    clear(): void {
        this.root = new TrieNode();
        this.wordCount = 0;
    }

    // Helper method to find a node for a given string
    private searchNode(str: string): TrieNode | null {
        let current = this.root;

        for (const char of str) {
            if (!current.children.has(char)) {
                return null;
            }
            current = current.children.get(char)!;
        }

        return current;
    }

    // Helper method for depth-first search to find all words
    private dfs(node: TrieNode, prefix: string, result: string[]): void {
        if (node.isEndOfWord) {
            result.push(prefix);
        }

        for (const [char, childNode] of node.children) {
            this.dfs(childNode, prefix + char, result);
        }
    }

    // Helper method to remove a word
    private removeHelper(node: TrieNode, word: string, depth: number): boolean {
        // Base case: reached the end of the word
        if (depth === word.length) {
            if (!node.isEndOfWord) {
                return false;
            }
            node.isEndOfWord = false;
            this.wordCount--;
            return node.children.size === 0;
        }

        const char = word[depth];
        const childNode = node.children.get(char);

        if (!childNode) {
            return false;
        }

        childNode.count--;
        const shouldDeleteChild = this.removeHelper(childNode, word, depth + 1);

        if (shouldDeleteChild) {
            node.children.delete(char);
            return node.children.size === 0 && !node.isEndOfWord;
        }

        return false;
    }
}

// Example usage:
// const trie = new Trie();
// trie.insert("apple");
// trie.insert("app");
// trie.insert("apricot");
// console.log(trie.search("apple")); // true
// console.log(trie.startsWith("app")); // true
// console.log(trie.getWordsWithPrefix("app")); // ["app", "apple"]
// console.log(trie.countWordsWithPrefix("app")); // 2
// trie.remove("apple");
// console.log(trie.search("apple")); // false 