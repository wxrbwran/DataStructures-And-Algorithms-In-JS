// 子集
// leetcode 78
//
// 时间O(2^n) 空间O(n)

export default function subsets(nums: number[]): number[][] {
  let res: number[][] = [];
  const backtrack = (path: number[], length: number, start: number) => {
    if (path.length === length) {
      res.push(path);
      return;
    }
    for (let i = start; i < nums.length; i++) {
      backtrack([...path, nums[i]], length, i + 1);
    }
  };
  for (let i = 0; i <= nums.length; i++) {
    backtrack([], i, 0);
  }
  return res;
}

// subsets([1, 2, 3]);
