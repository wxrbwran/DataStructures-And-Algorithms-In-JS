// instanceOf实现；

const instanceOf = (a: any, b: any): boolean => {
  let p = a;
  while (p) {
    if (p === b.prototype) {
      return true;
    }
    p = p.__proto__;
  }
  return false;
};

export default instanceOf;
