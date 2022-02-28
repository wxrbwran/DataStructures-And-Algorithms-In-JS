export function defaultEquals(a: any, b: any): boolean {
  return a === b;
}

export function defaultToString(item: Object) {
  if (item === null) {
    return 'NULL';
  } else if (item === undefined) {
    return 'UNDEFINED';
  } else if (typeof item === 'string' || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export const BalanceFactor = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5,
};

export function swap(array: number[], a: number, b: number) {
  /* const temp = array[a];
  array[a] = array[b];
  array[b] = temp; */ // 经典方式
  [array[a], array[b]] = [array[b], array[a]]; // ES2015 的方式
}
