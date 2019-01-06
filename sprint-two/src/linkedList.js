var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (!list.tail) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    var oldHead = list.head;
    list.head = oldHead.next;
    if (list.tail === oldHead) {
      list.tail = null;
    }
    return oldHead.value;
  };

  list.contains = function(target, current = list.head) {
    if (current === null) {
      return false;
    } else if (current.value === target) {
      return true;
    } else {
      return list.contains(target, current.next);
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
  Complexity: What is the time complexity of the above functions?
    addToTail() - O(1)
    removeHead() - O(1)
    contains() - O(n)
 */
