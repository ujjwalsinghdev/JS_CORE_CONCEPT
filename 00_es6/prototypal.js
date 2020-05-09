function Student(name, lastName, roll) {
  this.name = name;
  this.lastName = lastName;
  this.roll = roll;
}

Student.prototype.school = "Yellow School";

Student.prototype.greet = function() {
  console.log(
    `Hello I'm ${this.name} ${this.lastName} and my roll number is ${this.roll} , My School name is ${this.school}  `
  );
};

const john = new Student("John", "anderson", "student");
const bob = new Student("Bob", "jordan", "student");

console.log(john);
console.log(bob);

john.greet();
bob.greet();
