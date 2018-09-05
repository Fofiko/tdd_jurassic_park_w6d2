const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let rex;
  let vr;
  let dinosaurs;

  beforeEach(function () {
    park = new Park('jurassic', 10, dinosaurs);
    rex = new Dinosaur('Tyrannosaurus rex');
    vr = new Dinosaur('Velociraptor');
    dinosaurs = [rex, vr];
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'jurassic');
  });

  it('should have a ticket price', function () {
    const actual = park.ticket;
    assert.strictEqual(actual, 10);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, dinosaurs);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(vr);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [rex, vr, vr]);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDino(vr);
    park.addDino(rex);
    park.removeDino(rex);
    const expected = [rex, vr, vr];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
