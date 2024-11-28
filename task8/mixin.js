const Mixin = {
    sayHi() {
      console.log(`Hi, my name is ${this.name}`);
    },
    sayAge() {
      console.log(`I am ${this.age} years old`);
    }
  };
  
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  
  // Add mixin functionality
  Object.assign(Person.prototype, Mixin);
  
  // Usage
  const person = new Person("Alice", 25);
  person.sayHi(); // "Hi, my name is Alice"
  person.sayAge(); // "I am 25 years old"
  