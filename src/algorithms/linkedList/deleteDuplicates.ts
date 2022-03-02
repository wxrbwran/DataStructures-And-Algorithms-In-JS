// 删除排序链表的重复元素
// leetcode 83
//
// 时间O(n) 空间O(1)
import Node from 'src/data-structures/LinkedList/Node';

type numberNode = Node<number> | undefined;
export const deleteDuplicates = (head: numberNode) => {
  let p = head;
  while (p && p.next) {
    if (p.ele === p.next?.ele) {
      p.next = p.next.next;
    } else {
      p = p.next;
    }
  }
  return head;
};
