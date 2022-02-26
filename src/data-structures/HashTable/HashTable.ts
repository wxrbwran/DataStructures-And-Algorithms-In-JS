import { defaultToString } from '../../utils';
import LinkedList from '../LinkedList/LinkedList';
class HashTable {
  public toStrFn: (p: Object) => string;

  public table: Object;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key: Object): number {
    if (typeof key === 'number') {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  hashCode(key: Object): number {
    return this.loseloseHashCode(key);
  }

  put(key: Object, val: Object): boolean {
    if (!!key && !!val) {
      const position = this.hashCode(key);
      if (!this.table[position]) {
        this.table[position] = new LinkedList();
      }
      this.table[position].push(val);
      return true;
    }
    return false;
  }

  get(key: Object): Object | undefined {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (!!linkedList && !linkedList.isEmpty()) {
      let cur = linkedList.getHead();
      while (!!cur) {
        if (cur.ele === key) {
          return cur.ele;
        }
        cur = cur.next;
      }
    }
    return undefined;
  }

  remove(key: Object): boolean {
    const position = this.hashCode(key);
    const linkedList = this.table[position];
    if (!!linkedList && !linkedList.isEmpty()) {
      let cur = linkedList.getHead();
      while (!!cur) {
        if (cur.ele === key) {
          linkedList.remove(key);
          if (linkedList.isEmpty()) {
            delete this.table[position];
          }
          return false;
        }
        cur = cur.next;
      }
    }
    return false;
  }

  size(): number {
    return Object.keys(this.table).length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  toString(): string {
    let res = '';
    const positions = Object.keys(this.table);
    positions.forEach((position) => {
      res += this.table[position];
    });
    return res;
  }
}

export default HashTable;
