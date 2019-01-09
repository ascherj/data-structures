var Tree = function(value, parent = null) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;
  newTree.children = [];
  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(obj1, obj2) {
  for (var key in obj2) {
    obj1[key] = obj2[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newTree = Tree(value, this);
  this.children.push(newTree);
};

treeMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};

treeMethods.removeChild = function(value) {
  if (this.contains(value)) {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].value === value) {
        this.children.splice(i, 1);
      }
    }
  }
};

/*
  Complexity: What is the time complexity of the above functions?
    addChild() - O(1)
    contains() - O(n)
    removeChild() - O(n)
 */
