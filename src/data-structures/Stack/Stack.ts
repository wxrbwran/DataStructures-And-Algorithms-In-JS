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
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  clear(): void {
    this.items = [];
  }
}

export default Stack;
