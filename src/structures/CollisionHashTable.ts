export default class CollisionHashTable<T> {
  table: Array<T | undefined> = [];

  set(key: string, value: T) {
    this.table[this.hash(key)] = value;
  }

  remove(key: string) {
    this.table[this.hash(key)] = undefined;
  }

  get(key: string) {
    return this.table[this.hash(key)];
  }

  getTable() {
    return [...this.table];
  }

  private hash(key: string) {
    // 책 139페이지
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % 37;
  }
}
