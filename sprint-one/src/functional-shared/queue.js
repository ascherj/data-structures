var Queue = function() {
  var someInstance = {};
  extend(someInstance, queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.lowest = 0;
  return someInstance;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
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
  return this.count - this.lowest < 0 ? 0 : this.count - this.lowest;
};
