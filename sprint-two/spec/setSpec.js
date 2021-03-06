describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  // Additional tests

  it('should return the size of the set', function() {
    set.add('one');
    set.add('two');
    set.add('three');
    expect(set.size()).to.equal(3);
  });

  it('should not add duplicate values to a set', function() {
    set.add('one');
    set.add('two');
    set.add('two');
    expect(set.size()).to.equal(2);
  });

});
