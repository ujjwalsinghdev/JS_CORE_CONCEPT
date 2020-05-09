// all object inherit object constructor

const PersonProto = {
  greet: function() {
    console.log(`hello there ${this.name},${this.lastName}`);
  }
};

const peter = Object.create(PersonProto);

peter.name = "peter";
peter.lastName = "conor";

console.log(peter);

peter.greet();

const sara = Object.create(PersonProto, {
  name: { value: "sara" },
  lastName: { value: "jordan" }
});

sara.greet();
