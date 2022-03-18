// 翻转二叉树
// leetcode 226
//
// 时间O(n) 空间O(n)
import Node from '../../data-structures/Tree/Node';

export default function invertTree(n: Node) {
  const tmp = n.left;
  n.left = n.right;
  n.right = tmp;
  if (n.left) {
    invertTree(n.left);
  }
  if (n.right) {
    invertTree(n.right);
  }
}
