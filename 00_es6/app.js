function Person(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.fullName = function() {
    console.log(`hello i am ${this.name} ${this.lastName}`);
  };
}

const john = new Person("john", "bob");



const bob ={

}

console.log(bob.constructor);

const list = [];

console.log(list.constructor);

const sayHii = function(){

}

console.log(sayHii.constructor);


const susy = new john.constructor('susy','carpend')

console.log(susy);
susy.fullName();






















// const bob = new Person("bob", "jordan");
// const susy = new Person("susy", "cooper");
// const merry = new Person("bob", "tooper");

// john.fullName()

// console.log(john);
// console.log(bob);
// console.log(susy);
// console.log(merry);


