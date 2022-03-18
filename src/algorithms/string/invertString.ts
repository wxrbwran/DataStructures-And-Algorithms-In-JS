// 反转字符串中的单词
// leetcode 557
//
// 时间O(n) 空间O(1)
// "hello world => olleh dlrow"
export default function invertString(s: string): string {
  let res = '';
  s.split(' ').forEach((str) => (res += ` ${str.split('').reverse().join('')}`));
  return res.trim();
}
