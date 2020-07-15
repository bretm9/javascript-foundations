class Dragon {
  constructor(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;
    this.hungry = true;
    this.hungerLevel = 0;
  }
  ;
  eat() {
    this.hungerLevel++;
    if (this.hungerLevel >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
