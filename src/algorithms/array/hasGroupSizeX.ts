// 卡牌分组
// leetcode 914
//
// 时间O() 空间O()

export default function hasGroupSizeX(nums: number[]): boolean {
  const map = new Map();
  nums.forEach((n) => {
    map.set(n, map.has(n) ? map.get(n) + 1 : 1);
  });
  const counts: number[] = [...map.values()];
  const min = Math.min.apply(null, counts);
  // console.log('min', min);
  if (min === 1) {
    return false;
  }
  let res = true;
  // @ts-ignore
  counts.forEach((count: number) => {
    // console.log('count', count);
    if (count % min !== 0) {
      res = false;
    }
  });
  return res;
}
