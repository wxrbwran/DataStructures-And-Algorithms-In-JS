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
}

export default NewSet;