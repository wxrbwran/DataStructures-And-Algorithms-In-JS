// 猜数字大小 二分搜索
// leetcode 374
//
// 时间O() 空间O()

const guess = (num: number): number => {
  const theNumber = 6;
  if (num < theNumber) {
    return 1;
  } else if (num > theNumber) {
    return -1;
  } else {
    return 0;
  }
};
// 递归版
export default function guessNumber(n: number): number | undefined {
  const rec = (low: number, high: number): number | undefined => {
    if (low > high) {
      return undefined;
    }
    const mid = Math.floor((low + high) / 2);
    const res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res === 1) {
      return rec(mid + 1, high);
    } else if (res === -1) {
      return rec(1, mid - 1);
    }
  };
  return rec(1, n);
}
