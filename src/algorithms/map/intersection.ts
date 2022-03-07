// 两个数组的交集
// leetcode 349
//
// 时间O(n^2) 空间O(n)

export default function intersection<T>(a1: T[], a2: T[]): T[] {
  const m = new Map();
  a1.forEach((n) => m.set(n, true));
  const res: T[] = [];
  a2.forEach((n) => {
    if (m.get(n)) {
      res.push(n);
      m.delete(n);
    }
  });
  return res;
}
