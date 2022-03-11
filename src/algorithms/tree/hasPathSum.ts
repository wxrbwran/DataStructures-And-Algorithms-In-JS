// 路径总和
// leetcode 112
//
// 时间O(n) 空间O(n)
import Node from '../../data-structures/Tree/Node';

const hasPathSum = (root: Node, target: number): boolean => {
  if (!root) {
    return false;
  }
  let res = false;
  const dfs = (node: Node, s: number) => {
    console.log(s);
    if (!node.left && !node.right && s === target) {
      res = true;
    }
    if (node?.left) {
      dfs(node.left, s + node.left.key);
    }
    if (node?.right) {
      dfs(node.right, s + node.right.key);
    }
  };
  dfs(root, root.key);
  return res;
};

export default hasPathSum;
