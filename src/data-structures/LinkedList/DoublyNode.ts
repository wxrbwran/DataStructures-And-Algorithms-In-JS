import Node from '../LinkedList/Node';

class DoublyNode<T> extends Node<T> {
  public prev?: Node<T> | undefined;

  constructor(ele: T) {
    super(ele);
    this.prev = undefined;
  }
}

export default DoublyNode;
