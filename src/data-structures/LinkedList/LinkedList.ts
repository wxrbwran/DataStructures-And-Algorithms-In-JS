import DoublyNode from './DoublyNode';
import { defaultEquals } from '../../utils';

class LinkedList<T> {
  public count: number;

  public head: DoublyNode<T> | undefined;

  public equalsFn: (p: T, n: T) => boolean;

  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(ele: T): void {
    const node = new DoublyNode(ele);
    let cur = this.head;
    if (!this.head) {
      this.head = node;
    } else {
      while (!!cur?.next) {
        cur = cur?.next;
      }
      (cur as DoublyNode<T>).next = node;
    }
    this.count++;
  }

  getEleAt(position: number): DoublyNode<T> | undefined {
    if (position >= 0 && position <= this.count) {
      let node = this.head;
      while (position > 0) {
        node = node?.next;
        position--;
      }
      return node;
    }
    return undefined;
  }

  removeAt(position: number): T | undefined {
    if (position >= 0 && position <= this.count) {
      let cur = this.head;
      if (position === 0) {
        this.head = this.head?.next;
      } else {
        let prev = this.getEleAt(position - 1);
        cur = prev?.next;
        (prev as DoublyNode<T>).next = cur?.next;
      }
      this.count--;
      return cur?.ele;
    } else {
      return undefined;
    }
  }

  insert(ele: T, position: number): DoublyNode<T> | never {
    // console.log(ele, position);
    const node = new DoublyNode(ele);
    let cur = this.head;
    if (position === 0) {
      if (!this.head) {
        this.head = node;
      } else {
        this.head = node;
        this.head.next = cur;
      }
    } else if (position > 0 && position <= this.count + 1) {
      const prev = this.getEleAt(position - 1) as DoublyNode<T>;
      cur = prev?.next;
      prev.next = node;
      node.next = cur;
    } else {
      throw new Error(`位置越界: ${position}`);
    }
    return node;
  }

  indexOf(ele: T): number {
    let position = 0;
    let cur = this.head;
    while (position <= this.count) {
      if (cur?.ele === ele) {
        return position;
      }
      cur = cur?.next;
      position++;
    }
    return -1;
  }

  remove(ele: T): T | undefined {
    const index = this.indexOf(ele);
    return this.removeAt(index);
  }

  getHead(): DoublyNode<T> | undefined {
    return this.head;
  }

  isEmpty(): boolean {
    return !this.head && this.count === 0;
  }

  size(): number {
    return this.count;
  }

  toString(): string {
    let cur = this.head;
    let res = '';
    let position = 0;
    while (!!cur?.ele && position <= this.count) {
      res += cur.ele || '';
      cur = cur.next;
      position++;
    }
    return res;
  }
}

export default LinkedList;
