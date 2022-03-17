class MinHeap<T> {
  public heap: T[];

  constructor() {
    this.heap = [];
  }

  swap(pIndex: number, index: number): void {
    [this.heap[index], this.heap[pIndex]] = [this.heap[pIndex], this.heap[index]];
  }

  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index: number): number {
    return index * 2 + 1;
  }

  getRighttIndex(index: number): number {
    return index * 2 + 2;
  }

  shiftUp(index: number): void {
    if (index === 0) {
      return;
    }
    const pIndex = this.getParentIndex(index);
    if (this.heap[pIndex] > this.heap[index]) {
      this.swap(pIndex, index);
      this.shiftUp(pIndex);
    }
  }

  shiftDown(index: number): void {
    if (index === this.heap.length - 1) {
      return;
    }
    const lIndex = this.getLeftIndex(index);
    const rIndex = this.getRighttIndex(index);
    if (this.heap[lIndex] < this.heap[index]) {
      this.swap(lIndex, index);
      this.shiftDown(lIndex);
    }
    if (this.heap[rIndex] < this.heap[index]) {
      this.swap(rIndex, index);
      this.shiftDown(rIndex);
    }
  }

  // 在数组最后加入元素，上移
  // O(logK)
  insert(val: T): void {
    this.heap.push(val);
    this.shiftUp(this.heap.length - 1);
  }

  // 数组尾部元素替换堆顶，（直接删除堆顶会破坏堆结构）
  // 然后下移
  // O(logK)
  pop(): void {
    this.heap[0] = this.heap.pop() as T;
    this.shiftDown(0);
  }

  //获取堆顶
  peek(): any {
    return this.heap[0];
  }

  //获取堆大小
  size(): number {
    return this.heap.length;
  }
}

export default MinHeap;
