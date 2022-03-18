// 计数二进制子串
// leetcode 696
//
// 时间O() 空间O()
// 00110011 => 0011, 01, 1100, 10, 0011, 01
export default function countingBinarySubString(s: string): number {
  const length = s.length;
  let res = 0;
  for (let i = 0; i < length; i++) {
    for (let j = i + 2; j < length; j += 2) {
      let newString = s.slice(i, j);
      console.log('newString1', newString);
      let newArr = newString.split('').reverse();
      console.log('newArr', newArr.join(''));
      const set = new Set(newArr);
      if (newString.length > 1 && set.size === 2) {
        console.log('newString2', newString);

        res++;
        break;
      }
    }
  }
  return res;
}
