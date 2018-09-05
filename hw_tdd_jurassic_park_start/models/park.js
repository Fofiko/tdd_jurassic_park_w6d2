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



module.exports = Park;
