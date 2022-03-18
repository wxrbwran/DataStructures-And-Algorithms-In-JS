import countingBinarySubString from './countingBinarySubString';

test('计数二进制子串', () => {
  const str1 = '';
  expect(countingBinarySubString(str1)).toBe(0);

  const str2 = '00110011';
  expect(countingBinarySubString(str2)).toBe(6);
});
