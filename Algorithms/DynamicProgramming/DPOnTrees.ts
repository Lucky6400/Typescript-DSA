// DP on Trees (Advanced) in TypeScript
class TreeNode {
  val: number;
  left: TreeNode | null = null;
  right: TreeNode | null = null;
  constructor(val: number) {
    this.val = val;
  }
}

function rob(root: TreeNode | null): number {
  const dfs = (node: TreeNode | null): [number, number] => {
    if (!node) return [0, 0];

    const [leftInclude, leftExclude] = dfs(node.left);
    const [rightInclude, rightExclude] = dfs(node.right);

    const include = node.val + leftExclude + rightExclude;
    const exclude = Math.max(leftInclude, leftExclude) + Math.max(rightInclude, rightExclude);

    return [include, exclude];
  };

  const [include, exclude] = dfs(root);
  return Math.max(include, exclude);
}
