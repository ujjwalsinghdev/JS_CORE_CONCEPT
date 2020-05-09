class Employee {
  constructor(id) {
    this.id = id;
  }
  showId() {
    console.log(`my id number is ${this.id}`);
  }
}

class Manager extends Employee {
  constructor(id, name, department) {
    super(id);
    this.name = name;
    this.department = department;
  }

  Meeting() {
    console.log(`Let do meeting`);
  }
}

const sara = new Manager(11, "saar", "sales");

sara.Meeting();

console.log(sara);
