class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = false;
    if (this.name === 'Frodo') {
      this.hasRing = true;
    }

  }
  celebrateBirthday() {
    this.age++;
    if (this.age >= 33 && this.age < 101) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }

  timeTravel(age, object) {
    this.age = age;
    if (this.age >= 33 && this.age < 101) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.old = true;
    }
  }

  checkAge() {

  }


}

module.exports = Hobbit;
