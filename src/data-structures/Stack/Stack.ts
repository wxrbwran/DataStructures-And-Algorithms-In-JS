// 栈

class Stack<T> {
  public items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    const item: T | undefined = this.items.pop();
    return item;
  }

  peek(): T | undefined {
    return this.items.slice(-1)[0];
  }

  size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.items = [];
  }

  toString(): string {
    return this.items.join('');
  }
}

export default Stack;
