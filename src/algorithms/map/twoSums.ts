// 两数之和
// leetcode 1
//
// 时间O(n) 空间O(1)
export default function twoSums(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    const n2 = target - n;
    const n2Index = nums.indexOf(n2);
    if (n2Index != -1 && n2Index != i) {
      return [i, n2Index];
    }
  }
  return [];
}
