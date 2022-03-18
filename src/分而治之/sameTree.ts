// 相同的树
// leetcode 100
//
// 时间O(n) 空间O(n)
import Node from '../data-structures/Tree/Node';

export default function sameTree(n: Node | null, n1: Node | null): boolean {
  if (!n || !n1) {
    return true;
  }
  if (n && n1 && n.key === n1.key && sameTree(n.left, n1.left) && sameTree(n.right, n1.right)) {
    return true;
  }
  return false;
}
