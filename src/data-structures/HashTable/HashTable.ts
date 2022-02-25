import { defaultToString } from '../../utils';
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
      this.table[position] = val;
      return true;
    }
    return false;
  }

  get(key: Object): Object | undefined {
    if (!!key) {
      const position = this.hashCode(key);
      return this.table[position];
    }
    return undefined;
  }

  remove(key: Object): boolean {
    if (!!key) {
      const position = this.hashCode(key);
      delete this.table[position];
      return true;
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
