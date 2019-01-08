var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  if (this.retrieve(k) !== undefined) {
    for (var i = 0; i < bucket.length; i++) {
      var pair = bucket[i];
      if (pair[0] === k) {
        pair[1] = v;
      }
    }
  } else {
    bucket.push([k, v]);
  }
  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    for (var i = 0; i < bucket.length; i++) {
      var pair = bucket[i];
      if (pair[0] === k) {
        return pair[1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if (bucket) {
    var indexToBeRemoved;
    for (var i = 0; i < bucket.length; i++) {
      var pair = bucket[i];
      if (pair[0] === k) {
        indexToBeRemoved = i;
      }
    }
    bucket.splice(indexToBeRemoved, 1);
    this._storage.set(index, bucket);
  }
};



/*
  Complexity: What is the time complexity of the above functions?
    Average
      insert() - O(1)
      retrieve() - O(1)
      remove() - O(1)
    Worst (all values in the same bucket, bad hashing algorithm)
      insert() - O(n)
      retrieve() - O(n)
      remove() - O(n)
 */


