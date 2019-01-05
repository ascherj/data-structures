
var Stack = function() {
  var someInstance = {};
  extend(someInstance, stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function() {
  var topKey = this.count - 1;
  var value = this.storage[topKey];
  delete this.storage[topKey];
  this.count = (this.count === 0) ? 0 : this.count - 1;
  return value;
};

stackMethods.size = function() {
  return this.count;
};