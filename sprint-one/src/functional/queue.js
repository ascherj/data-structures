var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var lowest = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key = count.toString();
    storage[key] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var value = storage[lowest];
    delete storage[lowest];
    lowest++;
    return value;
  };

  someInstance.size = function() {
    if (count - lowest < 0) {
      return 0;
    }
    return count - lowest;
  };

  return someInstance;
};
