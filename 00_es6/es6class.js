// es6 classes

function Employee(id) {
  this.id = id;
}

Employee.prototype.showId = function() {
  console.log(`my id number is ${this.id}`);
};

const john = new Employee(12);

console.log(john);

john.showId();

function Manager(id, name, department) {
  Employee.call(this, id);
  this.name = name;
  this.department = department;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.Meeting = function() {
  console.log(`meeting is now`);
};

const sara = new Manager(33, "sara", "sales");

sara.Meeting();
console.log(sara);

sara.showId();
