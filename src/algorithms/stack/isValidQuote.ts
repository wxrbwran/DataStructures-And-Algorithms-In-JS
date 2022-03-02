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
