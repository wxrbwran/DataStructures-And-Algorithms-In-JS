// 有效数字
// leetcode 65
//
// 时间O(n) 空间O(1)
export default function isNumber(str: string): boolean {
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
  let state = 0;
  for (let c of str.trim()) {
    if (c >= '0' && c <= '9') {
      c = 'digit';
    } else if (c === ' ') {
      c = 'blank';
    } else if (c === '+' || c === '-') {
      c = 'sign';
    }
    state = graph[state][c];
    if (state === undefined) {
      return false;
    }
  }
  if ([3, 5, 6].includes(state)) {
    return true;
  }
  return false;
}
