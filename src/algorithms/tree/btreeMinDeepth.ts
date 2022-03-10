// 二叉树最小深度
// leetcode 111
//
// 时间O(n) 空间O(n)
import Node from '../../data-structures/Tree/Node';

const btreeMinDeepth = (root: Node): number => {
  if (!root) {
    return 0;
  }
  let res = 0;
  const q = [root];
  while (q.length) {
    res++;
    const node = q.pop();
    console.log(node?.key);
    if (!node?.left && !node?.right) {
      break;
    }
    if (node?.left) {
      q.push(node.left);
    }
    if (node?.right) {
      q.push(node.right);
    }
  }
  return res;
};

export default btreeMinDeepth;
