var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowest = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function() {
  var value = this.storage[this.lowest];
  delete this.storage[this.lowest];
  this.lowest++;
  return value;
};

queueMethods.size = function() {
  return (this.count - this.lowest < 0) ? 0 : this.count - this.lowest;
};
