// 二叉树最大深度
// leetcode 104
//
// 时间O(n) 空间O(n)
import Node from '../../data-structures/Tree/Node';

const btreeMaxDeepth = (root: Node): number => {
  let res = 0;
  const dfs = (node: Node | null, level = 0) => {
    if (node) {
      console.log(node.key);
      const l = level + 1;
      dfs(node?.left, l);
      dfs(node?.right, l);
      if (!node.left && !node.right) {
        res = Math.max(res, l);
      }
    }
  };
  // 递归堆栈
  dfs(root);
  return res;
};

export default btreeMaxDeepth;
