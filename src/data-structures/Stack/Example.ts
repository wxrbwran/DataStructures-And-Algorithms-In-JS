import Stack from './Stack';
// 转换二进制

const decimalToBinary = (num: number): string => {
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

export default decimalToBinary;
