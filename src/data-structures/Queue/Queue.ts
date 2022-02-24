// 队列
class Queue<T> {
  public items: T[];

  constructor(items?: T[]) {
    this.items = items || [];
  }

  enqueue(item: T) {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    const item: T | undefined = this.items.shift();
    return item;
  }

  peek(): T | undefined {
    return this.items[0];
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

export default Queue;
