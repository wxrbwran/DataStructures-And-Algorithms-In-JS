// 爬楼梯
// leetcode 70
//
// 时间O(n) 空间O(n)

export default function climbStairs(n: number): number {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
}
