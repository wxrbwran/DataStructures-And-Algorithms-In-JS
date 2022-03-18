import invertString from './invertString';

test('反转字符串中的单词', () => {
  const str1 = '';
  expect(invertString(str1)).toBe('');
  expect(invertString('hello world')).toBe('olleh dlrow');
});
