// leetcode 237
// 删除链表中的节点
// 时间 O(1), 空间O(1)
import Node from '../../data-structures/LinkedList/Node';

export const deleteNde = (node: Node<any>) => {
  const nextNode = node.next as Node<any>;
  node.ele = nextNode.ele;
  node.next = nextNode.next;
};
