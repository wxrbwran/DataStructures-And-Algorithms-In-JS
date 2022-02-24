import DoublyNode from './DoublyNode';
import LinkedList from './LinkedList';
import { defaultEquals } from '../../utils';

class DoublyLinkedList<T> extends LinkedList<T> {
  public tail: DoublyNode<T> | undefined;

  constructor(equalsFn = defaultEquals) {
    super(equalsFn);
    this.tail = undefined;
  }

  insert(ele: T, position: number): DoublyNode<T> | never {
    const node = new DoublyNode(ele);
    let cur, prev;
    if (position >= 0 && position < this.count) {
      if (position === 0) {
        if (!this.head) {
          this.head = node;
          this.tail = node;
        } else {
          cur = this.head;
          this.head = node;
          this.head.next = cur;
        }
      } else if (position === this.count) {
        cur = this.tail;
        this.tail = node;
        this.tail.prev = cur;
      } else {
        cur = this.getEleAt(position) as DoublyNode<T>;
        prev = cur.prev as DoublyNode<T>;
        prev.next = node;
        node.next = cur;
      }
      this.count++;
      return node;
    } else {
      throw new Error(`位置越界:${position}`);
    }
  }

  removeAt(position: number): T | undefined | never {
    let cur, prev;
    if (position >= 0 && position < this.count) {
      cur = this.head as DoublyNode<T>;
      if (position === 0) {
        this.head = cur.next;
        if (this.count === 1) {
          this.tail = undefined;
        } else {
          (this.head as DoublyNode<T>).prev = undefined;
        }
        return cur.ele;
      } else if (position === this.count - 1) {
        cur = this.tail;
        this.tail = (this.tail as DoublyNode<T>).prev as DoublyNode<T>;
        this.tail.next = undefined;
        return cur?.ele;
      } else {
        cur = this.getEleAt(position) as DoublyNode<T>;
        prev = cur.prev as DoublyNode<T>;
        prev.next = cur.next;
        (cur.next as DoublyNode<T>).prev = prev;
        return cur.ele;
      }
    } else {
      throw new Error(`位置越界:${position}`);
    }
  }
}

export default DoublyLinkedList;
