import DoublyLinkedList from './DoublyLinkedList';
import DoublyNode from './DoublyNode';

class CircularLinkedList<T> extends DoublyLinkedList<T> {
  // constructor() {
  //   super();
  // }
  insert(ele: T, position: number): DoublyNode<T> | never {
    if (position >= 0 && position <= this.count) {
      const node = new DoublyNode(ele);
      if (position === 0) {
        if (this.head == null) {
          this.head = node;
        } else {
          const last = this.getEleAt(this.size()) as DoublyNode<T>;
          this.head = node;
          last.next = this.head;
        }
        node.next = this.head;
      } else {
        const previous = this.getEleAt(position - 1) as DoublyNode<T>;
        node.next = previous.next;
        previous.next = node;
      }
      this.count++;
      return node;
    } else {
      throw new Error(`位置越界:${position}`);
    }
  }

  removeAt(position: number): T | undefined {
    if (position >= 0 && position <= this.count) {
      let cur;
      if (position === 0) {
        cur = this.head;
        if (this.count === 1) {
          this.head = undefined;
        } else {
          this.head = cur?.next;
          (this.tail as DoublyNode<T>).prev = this.head;
        }
        return cur?.ele;
      } else {
        const previous = this.getEleAt(position - 1) as DoublyNode<T>;
        cur = previous.next;
        previous.next = cur?.next;
        return cur?.ele;
      }
    } else {
      throw new Error(`位置越界:${position}`);
    }
  }
}

export default CircularLinkedList;
