class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ", it is a " + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
console.log(myCar.show());

//=== Getters & setters
class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  // Getter for the full name
  get fullName() {
    return this._firstName + " " + this._lastName;
  }

  // Setter for the full name
  set fullName(name) {
    const parts = name.split(" ");
    this._firstName = parts[0];
    this._lastName = parts[1];
  }
}

const person = new Person("John", "Doe");

console.log(person.fullName); // John Doe

person.fullName = "Jane Smith";
console.log(person.fullName); // Jane Smith

console.log(person._firstName); // John (still accessible but conventionally considered private)
