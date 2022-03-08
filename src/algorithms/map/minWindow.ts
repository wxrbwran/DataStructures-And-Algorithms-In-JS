// 最小覆盖子串
// leetcode 76
//
// 时间O(n^2) 空间O(n)
export default function minWindow(s: string, target: string): string {
  let l = 0,
    r = 0;
  const need = new Map();
  for (let c of target) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1);
  }
  let needType = need.size;
  let res = s;
  while (r < s.length) {
    const c = s[r];
    if (need.has(c)) {
      need.set(c, need.get(c) - 1);
      if (need.get(c) === 0) {
        needType--;
      }
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1);
      if (newRes.length < s.length) {
        res = newRes;
      }
      const c2 = s[l];
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1);
        if (need.get(c2) === 1) {
          needType++;
        }
      }
      l++;
    }
    r++;
  }
  return res;
}
