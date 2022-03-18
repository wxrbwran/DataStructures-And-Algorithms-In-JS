// 对称二叉树
// leetcode 101
//
// 时间O(n) 空间O(n)
import Node from '../../data-structures/Tree/Node';

export default function symmtricTree(root: Node | null): boolean {
  if (!root) {
    return true;
  }
  const isMirror = (left: Node | null, right: Node | null): boolean => {
    if (!left && !right) {
      return true;
    }
    if (
      left &&
      right &&
      left.key === right.key &&
      isMirror(left.left, right.right) &&
      isMirror(left.right, right.left)
    ) {
      return true;
    }
    return false;
  };
  return isMirror(root.left, root.right);
}
