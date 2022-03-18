// 分饼干
// leetcode 455
//
// 时间O(nlogn) 空间O(1)

export default function findContentChildren(c1: number[], c2: number[]): number {
  const sort = (p: number, n: number) => p - n;
  c1.sort(sort);
  c2.sort(sort);
  let i = 0;
  c2.forEach((cookie) => {
    if (cookie >= c1[i]) {
      i++;
    }
  });
  return i;
}
