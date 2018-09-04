const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collection = [];
}

Park.prototype.countCollection = function () {
  return this.collection.length;
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.collection.push(dinosaur)
};

Park.prototype.removeDinosaur = function () {
  this.collection.pop();
};

Park.prototype.popularDinosaur = function () {
  let popuDino = this.collection[0];
    for (let i = 1; i < this.collection.length; i++) {
      if (this.collection[i].guestsAttractedPerDay > this.collection[i-1].guestsAttractedPerDay) {
        popuDino = this.collection[i];
      }
    }
  return popuDino;
};

Park.prototype.findDinosaur = function (species) {
  let foundDino = [];
  for (dinosaur of this.collection) {
    if (dinosaur.species === species) {
      foundDino.push(dinosaur);
    }
  }
  return foundDino;
};


module.exports = Park;
