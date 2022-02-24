class Node<T> {
  public ele: T;

  public next: Node<T> | undefined;

  constructor(ele: T) {
    this.ele = ele;
    this.next = undefined;
  }
}

export default Node;
