import { swap } from '../utils';
// 快速排序
// O(nlogn)
export function sortArray(nums: number[]): number[] {
  if (nums.length <= 1) {
    return nums;
  }
  var mid = Math.floor(nums.length / 2);
  var val = nums[mid];

  var left = [];
  var right = [];
  // 分区
  for (var i = 0; i < nums.length; i += 1) {
    if (i === mid) {
      continue;
    }
    if (nums[i] < val) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  // 递归
  return [...sortArray(left), val, ...sortArray(right)];
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
