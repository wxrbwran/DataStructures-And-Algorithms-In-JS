import { decimalToBinary, isValid } from './Example';

test('decimalToBinary', () => {
  expect(decimalToBinary(10)).toBe('1010');
});

test('isValid', () => {
  const str1 = '';
  const str2 = '({[]})(){}[]';
  const str3 = '({[]})(1){}[]';
  expect(isValid(str1)).toBe(true);
  expect(isValid(str2)).toBe(true);
  expect(isValid(str3)).toBe(false);
});
