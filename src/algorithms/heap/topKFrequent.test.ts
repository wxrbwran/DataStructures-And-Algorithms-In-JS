import topKFrequent from './topKFrequent';

test('topKFrequent', () => {
  expect(topKFrequent([1], 1)).toMatchObject([1]);
  expect(topKFrequent([1, 1, 1, 1, 2, 2, 2, 3, 3, 4], 2)).toMatchObject([1, 2]);
});
