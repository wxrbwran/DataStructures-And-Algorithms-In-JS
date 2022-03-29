import hasGroupSizeX from './hasGroupSizeX';

test('permute', () => {
  expect(hasGroupSizeX([1])).toBeFalsy();
  expect(hasGroupSizeX([1, 1, 2, 2, 2, 2])).toBeTruthy();
  expect(hasGroupSizeX([1, 1, 2, 2, 3, 3])).toBeTruthy();
  expect(hasGroupSizeX([1, 1, 2, 2, 3, 3, 3])).toBeFalsy();
});
