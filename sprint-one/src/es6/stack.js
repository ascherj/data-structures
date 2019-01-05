class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  pop() {
    var topKey = this.count - 1;
    var value = this.storage[topKey];
    delete this.storage[topKey];
    this.count = this.count === 0 ? 0 : this.count - 1;
    return value;
  }

  size() {
    return this.count;
  }
}