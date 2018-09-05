const Park = function (name, ticket, dinosaurs) {
  this.name = name;
  this.ticket = ticket;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDino = function (dino) {
  this.dinosaurs.push(dino);
};


module.exports = Park;
