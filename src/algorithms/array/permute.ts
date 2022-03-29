// 电话号码的字母组合
// leetcode 17
//
// 时间O() 空间O()

export default function letterCombinations(s: string): string[] {
  const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const sArr = s.split('');
  if (sArr.length <= 1) {
    return map[+sArr[0]].split('');
  }
  const res: string[] = [];
  const fn = (l1: string[], l2: string[]): void => {
    for (let i = 0; i < l1.length; i++) {
      for (let j = 0; j < l2.length; j++) {
        res.push(`${l1[i]}${l2[j]}`);
      }
    }

    if (sArr.length > 0) {
      fn([...res], map[sArr.shift() as string].split(''));
    }
  };

  const l1 = map[sArr.shift() as string].split('');
  const l2 = map[sArr.shift() as string].split('');
  fn(l1, l2);

  return res;
}
