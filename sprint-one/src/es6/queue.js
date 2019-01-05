class Queue {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.lowest = 0;
  }

  enqueue(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  dequeue() {
    var value = this.storage[this.lowest];
    delete this.storage[this.lowest];
    this.lowest++;
    return value;
  }

  size() {
    return (this.count - this.lowest < 0) ? 0 : this.count - this.lowest;
  }
}
