import { defaultToString } from '../../utils';

class Dictionary {
  public toStrFn: (p: Object) => string;

  public table: Object;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key: string, value: Object): void {
    this.table[this.toStrFn(key)] = value;
  }

  get(key: string): Object {
    return this.table[this.toStrFn(key)];
  }

  remove(key: string): void {
    if (this.has(key)) {
      delete this.table[key];
    }
  }

  has(key: string): boolean {
    return !!this.table[this.toStrFn(key)];
  }

  values(): Object[] {
    return Object.values(this.table);
  }

  keys(): string[] {
    return Object.keys(this.table);
  }

  toString(): string {
    let res = '';
    this.keys().forEach((key) => {
      res += `${key}: ${this.get(key)};`;
    });
    return res;
  }

  size(): number {
    return this.keys().length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }
}

export default Dictionary;
