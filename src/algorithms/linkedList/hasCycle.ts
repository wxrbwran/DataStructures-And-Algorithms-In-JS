// 判断链表中有没有环
// leetcode 141
//
// 时间O(n) 空间O(1)
import Node from 'src/data-structures/LinkedList/Node';

type numberNode = Node<number> | undefined;
export const hasCycle = (head: numberNode): boolean => {
  let p1 = head;
  let p2 = head;
  while (p1 && p2 && p2.next) {
    p1 = p1.next;
    p2 = p2.next?.next;
    if (p1?.ele === p2?.ele) {
      return true;
    }
  }
  return false;
};
