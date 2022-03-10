// 二叉树的层序遍历
// leetcode 102
//
// 时间O(n) 空间O(n)
import Node from '../../data-structures/Tree/Node';

const btreeLevelOrder = (root: Node): number[][] => {
  if (!root) {
    return [];
  }
  // 1.
  // let res: number[][] = [];
  // const q = [[root, 0]];
  // while (q.length) {
  //   const [node, level] = q.pop() as [Node, number];
  //   const levelArr = res[level] || [];
  //   levelArr.push(node?.key);
  //   res[level] = levelArr;
  //   // console.log(node?.key);
  //   if (node?.left) {
  //     q.push([node.left, level + 1]);
  //   }
  //   if (node?.right) {
  //     q.push([node.right, level + 1]);
  //   }
  // }
  // return res;
  // 2.
  let res: number[][] = [];
  const q = [root];
  while (q.length) {
    let len = q.length;
    res.push([]);
    while (len--) {
      const n = q.shift() as Node;
      res[res.length - 1].push(n?.key);
      if (n?.left) {
        q.push(n.left);
      }
      if (n?.right) {
        q.push(n.right);
      }
    }
  }
  return res;
};

export default btreeLevelOrder;
