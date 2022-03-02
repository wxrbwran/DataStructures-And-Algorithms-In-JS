// 反转链表
// leetcode 206
// [1,2,3,4,5] -> [5,4,3,2,1]
// 时间O(n) 空间O(1)
const inverseList = (head) => {
  let p1 = head;
  let p2 = null;
  while (p1) {
    const tmp = p1.next;
    p1.next = p2;
    p2 = p1;
    p1 = tmp;
  }
  return p2;
};
