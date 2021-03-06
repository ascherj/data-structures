var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (!this.contains(item)) {
    this._storage[item] = item;
  }
};

setPrototype.contains = function(item) {
  return this._storage[item] !== undefined;
};

setPrototype.remove = function(item) {
  if (this.contains(item)) {
    delete this._storage[item];
  }
};

setPrototype.size = function() {
  return Object.keys(this._storage).length;
};

/*
  Complexity: What is the time complexity of the above functions?
    add() - O(1)
    contains() - O(1)
    remove() - O(1)
    size() - O(1)
 */
