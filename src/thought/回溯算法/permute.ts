// 全排列
// leetcode 46
//
// 时间O(n!) 空间O(n)

export default function permute(nums: number[]): number[][] {
  const res: number[][] = [];
  const backtrack = (path: number[]) => {
    if (path.length === nums.length) {
      res.push(path);
      return;
    }
    // n, n-1, n-2, n-3
    nums.forEach((n) => {
      if (!path.includes(n)) {
        backtrack([...path, n]);
      }
    });
  };
  backtrack([]);
  return res;
}
