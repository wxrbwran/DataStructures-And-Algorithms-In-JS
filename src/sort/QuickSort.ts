import { swap } from '../utils';

export function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  var pivotIndex = Math.floor(nums.length / 2);
  var pivotValue = nums[pivotIndex];

  var left = [];
  var right = [];

  for (var i = 0; i < nums.length; i += 1) {
    if (i === pivotIndex) {
      continue;
    }
    if (nums[i] < pivotValue) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return sortArray(left).concat([pivotValue], sortArray(right));
}

function partition(array: number[], left: number, right: number) {
  const pivot = array[Math.floor((right + left) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(array, i, j);
      i++;
      j--;
    }
  }
  return i;
}

function quick(array: number[], left: number, right: number) {
  let index;
  if (array.length > 1) {
    index = partition(array, left, right);
    if (left < index - 1) {
      quick(array, left, index - 1);
    }
    if (index < right) {
      quick(array, index, right);
    }
  }
  return array;
}

// // O(nlogn)
function quickSort(array: number[]) {
  return quick(array, 0, array.length - 1);
}

export default quickSort;
