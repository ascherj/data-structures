var Graph = function() {
  this.nodes = {};
};

Graph.prototype.addNode = function(node) {
  if (!this.contains(node)) {
    this.nodes[node] = { 'edges': {} };
  }
};

Graph.prototype.contains = function(node) {
  return !!this.nodes[node];
};

Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (var edge in this.nodes[node].edges) {
      delete this.nodes[edge].edges[node];
    }
    delete this.nodes[node];
  }
};

Graph.prototype.hasEdge = function(fromNode, toNode) {
  return !!this.nodes[fromNode].edges[toNode];
};

Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.contains(fromNode) && this.contains(toNode)) {
    this.nodes[fromNode].edges[toNode] = true;
    this.nodes[toNode].edges[fromNode] = true;
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.hasEdge(fromNode, toNode)) {
    delete this.nodes[fromNode].edges[toNode];
    delete this.nodes[toNode].edges[fromNode];
  }
};

Graph.prototype.forEachNode = function(cb) {
  for (var node in this.nodes) {
    cb(node);
  }
};

/*
  Complexity: What is the time complexity of the above functions?
    addNode() - O(1)
    contains() - O(1)
    removeNode() - O(n)
    hasEdge() - O(1)
    addEdge() - O(1)
    removeEdge() - O(1)
    forEachNode() - O(n)
 */
