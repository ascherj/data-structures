var BinarySearchTree = function(value) {
  var newBST = Object.create(BinarySearchTree.prototype);
  newBST.value = value;
  newBST.left = null;
  newBST.right = null;
  return newBST;
};

// Accepts a value and places it in the tree in the correct position.
BinarySearchTree.prototype.insert = function(value) {
  var newBST = BinarySearchTree(value);
  if (!this) {
    this.value = newBST;
  } else if (value < this.value) {
    if (!this.left) {
      this.left = newBST;
    } else {
      this.left.insert(value);
    }
  } else if (value > this.value) {
    if (!this.right) {
      this.right = newBST;
    } else {
      this.right.insert(value);
    }
  }
};

// Accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinarySearchTree.prototype.contains = function(value) {
  if (value === this.value) {
    return true;
  } else if (value < this.value && this.left) {
    return this.left.contains(value);
  } else if (value > this.value && this.right) {
    return this.right.contains(value);
  } else {
    return false;
  }
};

// Accepts a callback and executes it on every value contained in the tree.
BinarySearchTree.prototype.depthFirstLog = function(cb) {
  if (this.value) {
    cb(this.value);
  }
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
