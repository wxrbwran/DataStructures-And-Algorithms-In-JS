import Node from './Node';

type node = Node | null | undefined;
class BinarySearchTree {
  public root: node;

  constructor() {
    this.root = null;
  }

  insert(key: number): void {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  }

  insertNode(node: Node, key: number) {
    if (key < node.key) {
      if (node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  inOrderTraverse(callback: (key: number) => void) {
    this.inOrderTraverseNode(this.root as Node, callback);
  }

  inOrderTraverseNode(node: node, callback: (key: number) => void) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }

  preOrderTraverse(callback: (key: number) => void) {
    this.preOrderTraverseNode(this?.root, callback);
  }

  preOrderTraverseNode(node: node, callback: (key: number) => void) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverse(callback: (key: number) => void) {
    this.postOrderTraverseNode(this.root, callback);
  }

  postOrderTraverseNode(node: node, callback: (key: number) => void) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  min() {
    return this.minNode(this.root);
  }

  minNode(node: node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  max() {
    return this.maxNode(this.root);
  }

  maxNode(node: node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  search(key: number) {
    return this.searchNode(this.root, key);
  }

  searchNode(node: node, key: number): boolean {
    if (node == null) {
      return false;
    }
    if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key > node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  remove(key: number) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node: node, key: number): Node | null {
    if (node == null) {
      return null;
    }
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      // 键等于 node.key
      // 第一种情况
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }
      // 第二种情况
      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      // 第三种情况
      const aux = this.minNode(node.right) as Node;
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}

export default BinarySearchTree;
