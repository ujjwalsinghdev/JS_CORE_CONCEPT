// function Student(name, lastName, roll) {
//   this.name = name;
//   this.lastName = lastName;
//   this.roll = roll;
// }

// Student.prototype.school = "Yellow School";

// Student.prototype.greet = function() {
//   console.log(
//     `Hello I'm ${this.name} ${this.lastName} and my roll number is ${this.roll} , My School name is ${this.school}  `
//   );
// };

// const john = new Student("John", "anderson", "student");

const bob = {};

const list = [];

// console.log(bob.constructor);

// console.log(Object.getPrototypeOf(bob));
// console.log(Object.getPrototypeOf(john));

console.log(list.constructor);
console.log(Object.getPrototypeOf(list));

console.log(Object.getPrototypeOf(Object.getPrototypeOf(list)));






