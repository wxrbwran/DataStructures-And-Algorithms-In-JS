// 数组中第K个最大值
// leetcode 215
//
// 时间O(nlogk) 空间O(k)
import MinHeap from '../../data-structures/Heap/MinHeap';

export default function findKthLargest(nums: number[], k: number): number {
  const heap = new MinHeap();
  nums.forEach((n) => {
    heap.insert(n);
    if (heap.size() > k) {
      heap.pop();
    }
  });
  return heap.peek();
}
