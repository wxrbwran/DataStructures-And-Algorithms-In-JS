import { swap } from '../utils';
// O(n^2)
function bubbleSort(array: number[]) {
  const { length } = array;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

export default bubbleSort;
