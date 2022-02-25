// 集合
class NewSet {
  public items: Record<string, any>;

  constructor(items?: Object) {
    this.items = items || {};
  }

  has(item: any): boolean {
    // return item in this.items;
    return Object.prototype.hasOwnProperty.call(this.items, item);
  }

  add(ele: any): void {
    if (!this.has(ele)) {
      this.items[ele] = ele;
    }
  }

  delete(ele: any): boolean {
    if (this.has(ele)) {
      delete this.items[ele];
      return true;
    }
    return false;
  }

  size(): number {
    return Object.keys(this.items).length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  values(): string[] {
    return Object.values(this.items);
  }

  clear(): void {
    this.items = {};
  }

  // 并集
  union(otherSet: NewSet): NewSet {
    const unionSet = new NewSet();
    [...this.values(), ...otherSet.values()].forEach((val) => {
      unionSet.items[val] = val;
    });
    // console.log(unionSet);
    return unionSet;
  }

  // 交集
  intersection(otherSet: NewSet): NewSet {
    const intersectionSet = new NewSet();
    const allValues = [...this.values(), ...otherSet.values()];
    allValues.forEach((val) => {
      if (this.has(val) && otherSet.has(val)) {
        intersectionSet.add(val);
      }
    });
    return intersectionSet;
  }

  // 差集
  difference(otherSet: NewSet): NewSet {
    const differenceSet = new NewSet();
    this.values().forEach((val) => {
      if (!otherSet.has(val)) {
        differenceSet.add(val);
      }
    });
    return differenceSet;
  }

  // 子集
  isSubsetOf(otherSet: NewSet): boolean {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let res = true;
    this.values().forEach((val) => {
      if (!otherSet.has(val)) {
        res = false;
      }
    });
    return res;
  }
}

export default NewSet;
