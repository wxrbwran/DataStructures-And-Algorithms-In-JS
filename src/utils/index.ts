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
