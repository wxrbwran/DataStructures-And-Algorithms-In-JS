import bubbleSort from './BubbleSort';
import countingSort from './CountingSort';
import insertionSort from './InsertionSort';
import mergeSort from './MergeSort';
import quickSort from './QuickSort';
import selectionSort from './SelectionSort';

// const arr = [2, 5, 7, 8, 0, 1];
const sorted = [0, 1, 2, 5, 7, 8];
test('sort', () => {
  console.time('bubbleSortHandled');
  const bubbleSortHandled = bubbleSort([2, 5, 7, 8, 0, 1]);
  console.timeEnd('bubbleSortHandled');

  console.time('countingSortHandled');
  const countingSortHandled = countingSort([2, 5, 7, 8, 0, 1]);
  console.timeEnd('countingSortHandled');

  console.time('insertionSortHandled');
  const insertionSortHandled = insertionSort([2, 5, 7, 8, 0, 1]);
  console.timeEnd('insertionSortHandled');

  console.time('mergeSortHandled');
  const mergeSortHandled = mergeSort([2, 5, 7, 8, 0, 1]);
  console.timeEnd('mergeSortHandled');

  console.time('quickSortHandled');
  const quickSortHandled = quickSort([2, 5, 7, 8, 0, 1]);
  console.timeEnd('quickSortHandled');

  console.time('selectionSortHandled');
  const selectionSortHandled = selectionSort([2, 5, 7, 8, 0, 1]);
  console.timeEnd('selectionSortHandled');

  expect(bubbleSortHandled).toMatchObject(sorted);
  expect(countingSortHandled).toMatchObject(sorted);
  expect(insertionSortHandled).toMatchObject(sorted);
  expect(mergeSortHandled).toMatchObject(sorted);
  expect(quickSortHandled).toMatchObject(sorted);
  expect(selectionSortHandled).toMatchObject(sorted);
});
