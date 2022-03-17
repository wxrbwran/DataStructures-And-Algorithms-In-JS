// 前K个高频元素
// leetcode 347
//
// 时间O() 空间O(n)
// import MinHeap from '../../data-structures/Heap/MinHeap';

function topKFrequent(nums: number[], k: number): number[] {
  // 1. O(nlogn)

  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const list = Array.from(map)
    .sort((prev, next) => next[1] - prev[1])
    .slice(0, k);
  return list.map((n) => n[0]);

  // 2.
  // O(nlogk)
  // const map = new Map();
  // nums.forEach((n) => {
  //   map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  // });
  // // 需更改比较大小方法。
  // const h = new MinHeap<{ val: number; key: number }>();
  // map.forEach((val, key) => {
  //   h.insert({ val, key });
  //   if (h.size() > k) {
  //     h.pop();
  //   }
  // });
  // return h.heap.map((a) => a.key);
}

export default topKFrequent;
