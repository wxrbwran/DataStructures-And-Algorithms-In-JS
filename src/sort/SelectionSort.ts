import { swap } from '../utils';

function selectionSort(array: number[]) {
  const { length } = array;
  let indexMin;
  for (let i = 0; i < length - 1; i++) {
    indexMin = i;
    for (let j = i; j < length; j++) {
      if (array[indexMin] > array[j]) {
        indexMin = j;
      }
    }
    if (i !== indexMin) {
      swap(array, i, indexMin);
    }
  }
  return array;
}

export default selectionSort;
