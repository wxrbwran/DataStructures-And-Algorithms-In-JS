import twoSums from './twoSums';

test('twoSums 两数之和', () => {
  expect(twoSums([1, 2, 3], 2)).toMatchObject([]);
  expect(twoSums([1, 2, 3], 3)).toMatchObject([0, 1]);
});
