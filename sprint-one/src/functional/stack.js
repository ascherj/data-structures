var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    var key = count.toString();
    storage[key] = value;
    count++;
  };

  someInstance.pop = function() {
    var topKey = count - 1;
    var value = storage[topKey];
    delete storage[topKey];
    count = count === 0 ? 0 : count - 1;
    return value;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
