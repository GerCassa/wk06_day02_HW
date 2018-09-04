const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;


  beforeEach(function () {
    dinosaur1 = new Dinosaur("triceratops", "hervivore", 30);
    dinosaur2 = new Dinosaur("t-rex", "carnivore", 50);
    dinosaur3 = new Dinosaur("megalodon", "hervivore", 55);


    park = new Park("Jurassic Park", 25);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, "Jurassic Park");
  });

  it('should have a ticket price', function() {
    const actual =  park.ticketPrice;
    assert.strictEqual(actual, 25);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.countCollection();
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = park.collection[0];
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park.addDinosaur(dinosaur1);
    park.removeDinosaur();
    const actual = park.countCollection();
    assert.strictEqual(actual, 0);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    const actual = park.popularDinosaur();
    assert.deepStrictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.findDinosaur("t-rex")
    assert.deepStrictEqual(actual, [dinosaur2])
  });


  it('should be able to remove all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const actual = park.deleteDinosaurSpecies("triceratops")
    assert.deepStrictEqual(actual, [dinosaur2, dinosaur3])
  });

});
