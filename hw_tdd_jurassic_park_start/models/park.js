const Park = function (name, ticket, dinosaurs) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (dino) {
  this.dinosaurs.push(dino);
};

Park.prototype.removeDino = function (dino) {
  const indexOfDino = this.dinosaurs.indexOf(dino);
  this.dinosaurs.splice(indexOfDino, 1);
};

// Park.prototype.findPopularDino = function () {
//   for (let i = 0; i < this.dinosaurs.length; i++) {
//     if (this.dinosaurs[i].guestsAttractedPerDay > this.dinosaurs[i+1].guestsAttractedPerDay) {
//
//     }
//   return this.dinosaurs[mostPopularDino[0]];
// };

Park.prototype.findAllBySpecies = function (species) {
  const allBySpecies = [];
  for (dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      allBySpecies.push(dinosaur)
    }
  }
  return allBySpecies;
};




module.exports = Park;
