import { isValid } from './isValidQuote';

test('测试有效的括号', () => {
  const str1 = '';
  const str2 = '(){}[]({[]})';
  const str3 = '({)}';

  expect(isValid(str1)).toBeTruthy();
  expect(isValid(str2)).toBeTruthy();
  expect(isValid(str3)).toBeFalsy();
});
