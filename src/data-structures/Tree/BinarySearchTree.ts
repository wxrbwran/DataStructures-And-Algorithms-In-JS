import Node from './Node';

type node = Node | null | undefined;
type callbackFn = (key: number) => void;
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

  // 中序遍历
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

  // 中序遍历 非递归版
  inOrder(node: node = this.root, callback?: callbackFn): void {
    const stack = [];
    let p = node;
    while (stack.length > 0 || p) {
      while (p) {
        stack.push(p);
        p = p.left;
      }
      const n = stack.pop() as Node;
      console.log(n.key);
      if (callback) {
        callback(n.key);
      }
      p = n.right;
    }
  }

  // 先序遍历
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

  // 先序遍历 非递归版
  preOrder(node: node = this.root, callback?: callbackFn): void {
    const stack = [node];
    while (stack.length > 0) {
      const n = stack.pop() as Node;
      if (callback) {
        callback(n.key);
      }
      if (n.right) {
        stack.push(n.right);
      }
      if (n.left) {
        stack.push(n.left);
      }
    }
  }

  // 后序遍历
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

  // 后序遍历 非递归版
  postOrder(node: node = this.root, callback?: callbackFn): void {
    const stack = [node];
    const res = [];
    while (stack.length > 0) {
      const n = stack.pop() as Node;
      res.push(n);
      if (n.left) {
        stack.push(n.left);
      }
      if (n.right) {
        stack.push(n.right);
      }
    }
    while (res.length) {
      const n = res.pop() as Node;
      console.log(n?.key);
      if (callback) {
        callback(n.key);
      }
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

  // 广度
  // 1. 新建一个队列，根节点入队
  // 2. 对头出队并访问
  // 3. 对头的children挨个入队
  // 4. 重复2，3，直到对列为空
  bfs(node: node = this.root): number[] {
    if (!node) {
      return [];
    }
    let queue = [node]; //将根节点加入到队列中
    let result: number[] = []; //结果数组
    while (queue.length) {
      let tempArr: number[] = []; //存储每层节点值的临时数组，方便一层层打印
      for (let i = 0; i < queue.length; i++) {
        //遍历每层节点
        let temp = queue.shift();
        tempArr.push((temp as Node).key);
        if (temp?.left) {
          queue.push(node.left as Node);
        }
        if (temp?.right) {
          queue.push(node.right as Node);
        }
      }
      result.push(...tempArr);
    }
    return result;
  }

  // 深度
  // 访问根节点
  // 对根节点的children挨个进行深度优先遍历
  dfs(node: node = this.root, list: number[] = []): number[] {
    if (!!node) {
      list.push(node.key);
      this.dfs(node.left, list);
      this.dfs(node.right, list);
    }
    return list;
  }
}

export default BinarySearchTree;
