// 无重复字符的最长子串
// leetcode 3
//
// 时间O(n) 空间O(1)
export default function lengthOfLongestSubstring(str: string): number {
  let l = 0;
  let res = 0;
  const map = new Map();
  for (let r = 0; r < str.length; r++) {
    const rightStr = str[r];
    if (map.has(rightStr) && map.get(rightStr) >= l) {
      l = map.get(rightStr) + 1;
    }
    res = Math.max(res, r - l + 1);
    map.set(rightStr, r);
  }
  return res;
}
