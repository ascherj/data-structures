var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.lowest = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

Queue.prototype.dequeue = function() {
  var value = this.storage[this.lowest];
  delete this.storage[this.lowest];
  this.lowest++;
  return value;
};

Queue.prototype.size = function() {
  return (this.count - this.lowest < 0) ? 0 : this.count - this.lowest;
};