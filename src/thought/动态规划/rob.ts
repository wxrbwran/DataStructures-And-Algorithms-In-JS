// 打家劫舍
// leetcode 198
//
// 时间O() 空间O()
// f(k) = max((f(k - 2) + k), f(k - 1));
export default function rob(n: number[]): number {
  const length = n.length;
  if (length === 1) {
    return n[0];
  }
  if (length === 2) {
    return Math.max.apply(null, n);
  }
  const before2 = n.slice(0, length - 2);
  const before1 = n.slice(0, length - 1);
  return Math.max(rob(before2) + n[length - 1], rob(before1));
}
