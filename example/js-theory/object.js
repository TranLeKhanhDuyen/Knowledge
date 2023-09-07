var emailKey = "email";
var myInfo = {
  name: "Duyen Tran",
  age: 20,
  address: "Da Nang",
  [emailKey]: "duyen@gmail.com", //variable
  getName: function () {
    return this.name; //this.name = myInfo.name
  },
};
var myKey = "address";
delete myInfo.address; //delete key
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo[myKey]);
console.log(myInfo.getName()); //function => add ()

//  === OBJECT CONSTRUCTOR ===
function User(fistName, lastName, avatar) {
  this.fistName = fistName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.getName = function () {
    return `${this.fistName} ${this.lastName}`;
  };
}
var author = new User("Duyen", "Tran", "Image");
var user = new User("Khanh", "Duyen", "Image");
//add different properties
author.title = "Hello everyone";
user.topic = "internship";

console.log(author);
console.log(author.constructor);
console.log(user);
console.log(user.getName());
console.log(author.getName());

//=== OBJECT METHOD ===
const car = {
  brand: "Ford",
  model: "Fiesta",
  start: function () {
    console.log(`Started: ${this.brand} ${this.model}`);
  },
};
car.start();

//=== OBJECT PROTOTYPE ===
function Person(name, age) {
  this.name = name;
  this.age = age;
}
var person1 = new Person("Alice", 25);
Person.prototype.sayHello = function () {
  //use prototype to add method sayhello
  console.log("Hello, my name is " + this.name);
};
person1.sayHello();

//=== DATE OBJECTS ===
var date = new Date();
var year = date.getFullYear(); // Current year
var month = date.getMonth() + 1; // Current month (adding 1 to make it 1-12)
var day = date.getDate(); // Current day

console.log(year); // Output: 2022 (or the current year)
console.log(month); // Output: 8 (or the current month)

console.log(`${day}/${month}/${year}`); // Output: "24/8/2022" (or the current date)
