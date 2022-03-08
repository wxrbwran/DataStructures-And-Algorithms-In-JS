import lengthOfLongestSubstring from './lengthOfLongestSubstring';

test('lengthOfLongestSubstring 无重复字符的最长子串', () => {
  expect(lengthOfLongestSubstring('abcda')).toBe(4);
  expect(lengthOfLongestSubstring('pppppp')).toBe(1);
  expect(lengthOfLongestSubstring('pwlzasd')).toBe(7);
});
