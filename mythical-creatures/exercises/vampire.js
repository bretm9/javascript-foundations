class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
  }

  drink() {
    this.thirsty = false;
  }
}

var vampire = new Vampire('Jhun');

module.exports = Vampire;
