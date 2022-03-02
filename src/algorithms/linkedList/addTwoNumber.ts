// 两数相加
// leetcode 2
//
// 时间O(n) 空间O(n)
// import LinkedList from 'src/data-structures/LinkedList/LinkedList';
import Node from 'src/data-structures/LinkedList/Node';

// type numberLink = LinkedList<number>;
type numberNode = Node<number> | undefined;
export const addTwoNumber = (l1: numberNode, l2: numberNode): numberNode => {
  const l3: numberNode = new Node(0);
  let p1 = l1;
  let p2 = l2;
  let p3 = l3;
  let carry = 0;
  while (p1 || p2 || carry) {
    const v1 = p1 ? p1.ele : 0;
    const v2 = p2 ? p2.ele : 0;
    const val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    p3.next = new Node(val % 10);
    if (p1) {
      p1 = p1.next;
    }
    if (!!p2) {
      p2 = p2.next;
    }
    p3 = p3.next;
  }
  return p3.next;
};
