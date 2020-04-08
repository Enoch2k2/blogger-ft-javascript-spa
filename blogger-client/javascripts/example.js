class Person {
  static all = [];

  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.save();
  }

  save() {
    Person.all.push(this);
  }

  sayDescription() {
    console.log(`Hi! My name is ${this.name}, and ${this.description}`)
  }

  static sayDescriptions() {
    Person.all.forEach(person => person.sayDescription());
  }
}

let bob = new Person('Bob', "He's a bood object");

Person.sayDescriptions();