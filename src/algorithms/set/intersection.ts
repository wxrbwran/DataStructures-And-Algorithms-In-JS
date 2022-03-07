// 两个数组的交集
// leetcode 349
//
// 时间O(n^2) 空间O(n)

export default function intersection<T>(a1: T[], a2: T[]): T[] {
  return [...new Set(a1)].filter((k) => a2.includes(k));
}
