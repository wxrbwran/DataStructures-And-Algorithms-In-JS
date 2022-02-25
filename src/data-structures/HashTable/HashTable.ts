import { defaultToString } from '../../utils';
class HashTable {
  public toStrFn: (p: Object) => string;

  public table: Object;

  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}

export default HashTable;
