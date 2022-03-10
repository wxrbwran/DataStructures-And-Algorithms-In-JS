class Node {
  public key: number;

  public left: Node | null;

  public right: Node | null;

  constructor(key: number) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

export default Node;
