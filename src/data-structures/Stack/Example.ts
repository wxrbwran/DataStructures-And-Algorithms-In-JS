import Stack from './Stack';
// 转换二进制

export const decimalToBinary = (num: number): string => {
  const stack = new Stack();
  let res = '';
  let mod = null;
  let curNum = num;
  while (curNum / 2 !== 0) {
    const floor = Math.floor(curNum / 2);
    mod = curNum % 2;
    stack.push(mod);
    curNum = floor;
  }
  // console.log(stack);
  while (stack.size() > 0) {
    res += stack.pop();
  }
  return res;
};

// 有效的括号
export const isValid = (str: string): boolean => {
  if (str.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  const map = {
    '[': ']',
    '{': '}',
    '(': ')',
  };

  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (Object.keys(map).includes(s)) {
      // console.log('key s', s);
      stack.push(s);
    } else if (Object.values(map).includes(s)) {
      // console.log('value s', s);
      const prev = stack[stack.length - 1];
      const expect = map[prev];
      // console.log('expect expect', expect);
      if (expect === s) {
        stack.pop();
      }
    } else {
      return false;
    }
  }
  // console.log('stack', stack);
  return stack.length === 0;
};
