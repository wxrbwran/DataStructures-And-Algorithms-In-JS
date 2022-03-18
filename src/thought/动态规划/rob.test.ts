import rob from './rob';

test('打家劫舍', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(rob(arr)).toBe(9);
  const arr2 = [1];
  expect(rob(arr2)).toBe(1);
  const arr3 = [1, 8];
  expect(rob(arr3)).toBe(8);
  const arr4 = [1, 8, 2, 8];
  expect(rob(arr4)).toBe(16);
  const arr5 = [1, 8, 2, 8, 22];
  expect(rob(arr5)).toBe(30);
  const arr6 = [2];
  expect(rob(arr6)).toBe(2);
});
