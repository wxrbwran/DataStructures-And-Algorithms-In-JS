// 有效数字
// leetcode 65
//
// 时间O() 空间O()
export default function isNumber(s: string): boolean {
  const graph = {
    0: {
      blank: 0,
      sign: 1,
      '.': 2,
      digit: 6,
    },
    1: {
      '.': 2,
      digit: 6,
    },
    2: {
      digit: 3,
    },
    3: {
      digit: 3,
      e: 4,
    },
    4: {
      digit: 5,
      sign: 7,
    },
    5: {
      digit: 5,
    },
    6: {
      digit: 6,
      '.': 3,
      e: 4,
    },
    7: {
      digit: 5,
    },
  };
  return false;
}
//
