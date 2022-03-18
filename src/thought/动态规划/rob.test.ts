import rob from './rob';

test('打家劫舍', () => {
  const arr = [1, 2, 3, 4, 5];
  expect(rob(arr)).toBe(9);
  const arr2 = [1];
  expect(rob(arr2)).toBe(1);
  const arr3 = [1, 8];
  expect(rob(arr3)).toBe(8);
});
