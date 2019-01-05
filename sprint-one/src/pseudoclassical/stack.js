var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {;
  this.storage[this.count] = value;
  this.count++;
};

Stack.prototype.pop = function() {
  var key = this.count - 1;
  var value = this.storage[key];
  delete this.storage[key];
  this.count = this.count === 0 ? 0 : this.count - 1;
  return value;
};

Stack.prototype.size = function() {
  return this.count;
};
