import BinarySearchTree from './BinarySearchTree';
import Node from './Node';
import { BalanceFactor } from '../../utils';

// AVL树是一种自平衡树。添加或移除节点时，AVL树会尝试保持自平衡。任意一个节点（不论
// 深度）的左子树和右子树高度最多相差 1。添加或移除节点时，AVL树会尽可能尝试转换为完全树。

type node = Node | null;

class AVLTree extends BinarySearchTree {
  public root: node;

  constructor() {
    super();
    this.root = null;
  }

  getNodeHeight(node: node): number {
    if (node == null) {
      return -1;
    }
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  }

  getBalanceFactor = (node: Node) => {
    const heightDifference = this.getNodeHeight(node.left) - this.getNodeHeight(node.right);
    switch (heightDifference) {
      case -2:
        return BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return BalanceFactor.UNBALANCED_LEFT;
      default:
        return BalanceFactor.BALANCED;
    }
  };

  // 左侧子节点的高度大于右侧子节点的高度, 并且左侧子节点也是平衡或左侧较重的;
  rotationLL(node: Node) {
    const tmp = node.left as Node;
    node.left = tmp.right;
    tmp.right = node;
    return tmp;
  }

  // 右侧子节点的高度大于左侧子节点的高度, 并且右侧子节点也是平衡或右侧较重的;
  rotationRR(node: Node) {
    const tmp = node.right as Node;
    node.right = tmp.left;
    tmp.left = node;
    return tmp;
  }

  // 左侧子节点的高度大于右侧子节点的高度，并且左侧子节点右侧较重
  rotationLR(node: Node) {
    node.left = this.rotationRR(node.left as Node);
    return this.rotationLL(node);
  }

  // 右侧子节点的高度大于左侧子节点的高度，并且右侧子节点左侧较重
  rotationRL(node: Node) {
    node.right = this.rotationLL(node.right as Node);
    return this.rotationRR(node);
  }

  insert(key: number) {
    this.root = this.insertNode(this.root, key);
  }

  insertNode(node: node, key: number): node {
    // 像在 BST 树中一样插入节点
    if (!node) {
      return new Node(key);
    } else if (key < node.key) {
      node.left = this.insertNode(node.left, key);
    } else if (key > node.key) {
      node.right = this.insertNode(node.right, key);
    } else {
      return node; // 重复的键
    }
    // 如果需要，将树进行平衡操作
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      if (key < (node.left as Node).key) {
        node = this.rotationLL(node);
      } else {
        return this.rotationLR(node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      if (key > (node.right as Node).key) {
        node = this.rotationRR(node);
      } else {
        return this.rotationRL(node);
      }
    }
    return node;
  }

  removeNode(node: node, key: number) {
    node = super.removeNode(node, key);
    if (node == null) {
      return node; // null，不需要进行平衡
    }
    // 检测树是否平衡
    const balanceFactor = this.getBalanceFactor(node);
    if (balanceFactor === BalanceFactor.UNBALANCED_LEFT) {
      const balanceFactorLeft = this.getBalanceFactor(node.left as Node);
      if (
        balanceFactorLeft === BalanceFactor.BALANCED ||
        balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT
      ) {
        return this.rotationLL(node);
      }
      if (balanceFactorLeft === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT) {
        return this.rotationLR(node.left as Node);
      }
    }
    if (balanceFactor === BalanceFactor.UNBALANCED_RIGHT) {
      const balanceFactorRight = this.getBalanceFactor(node.right as Node);
      if (
        balanceFactorRight === BalanceFactor.BALANCED ||
        balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT
      ) {
        return this.rotationRR(node);
      }
      if (balanceFactorRight === BalanceFactor.SLIGHTLY_UNBALANCED_LEFT) {
        return this.rotationRL(node.right as Node);
      }
    }
    return node;
  }
}

export default AVLTree;
