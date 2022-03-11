// 二叉树的中序遍历
// leetcode 94
//
// 时间O(n) 空间O(n)
import Node from '../../data-structures/Tree/Node';

const btreeInOrder = (root: Node): number[] => {
  if (!root) {
    return [];
  }
  let res: number[] = [];
  // const rec = (node: Node | null) => {
  //   if (node) {
  //     rec(node.left);
  //     res.push(node.key);
  //     rec(node.right);
  //   }
  // };
  // rec(root);
  const stack: Node[] = [];
  let p: Node | null = root;
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const n = stack.pop() as Node;
    res.push(n.key);
    p = n.right;
  }
  return res;
};

export default btreeInOrder;
