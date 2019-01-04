var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    var key = size.toString();
    storage[key] = value;
    size++;
  };

  someInstance.pop = function() {
    var topKey = size - 1;
    var value = storage[topKey];
    delete storage[topKey];
    size = size === 0 ? 0 : size - 1;
    console.log(size, value);
    return value;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
