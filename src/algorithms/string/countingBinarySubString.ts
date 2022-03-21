// 计数二进制子串
// leetcode 696
//
// 时间O() 空间O()
// 00110011 => 0011, 01, 1100, 10, 0011, 01
export default function countingBinarySubString(s: string): number {
  const length = s.length;
  let res = [];
  const rec = (subStr: string) => {
    let prevStr = subStr[0];
    let nextStr = subStr[1];
    if (nextStr != prevStr) {
      const pv = subStr.slice(0, 2);
      // console.log(pv);
      res.push(pv);
    } else {
      let i = 1;
      while (nextStr === subStr[0] && i < subStr.length - 1) {
        i++;
        nextStr = subStr[i];
      }
      prevStr = subStr.slice(0, i);
      nextStr = subStr.slice(i, i + prevStr.length);
      if (nextStr[0] !== prevStr[0] && new Set(nextStr).size === 1) {
        // console.log(`${prevStr}${nextStr}`);
        res.push(`${prevStr}${nextStr}`);
      }
    }
  };
  for (let i = 0; i < length - 1; i++) {
    rec(s.slice(i));
  }
  return res.length;
}
