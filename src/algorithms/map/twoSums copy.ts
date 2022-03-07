// 无重复字符的最长子串
// leetcode 3
//
// 时间O() 空间O()
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
