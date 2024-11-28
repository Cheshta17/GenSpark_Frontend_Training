const prototype = {
  clone() {
    return Object.create(this);
  },
  sayHello() {
    console.log(`Hello from ${this.name}`);
  }
};

// Usage
const instance = prototype.clone();
instance.name = "Prototype Instance";
instance.sayHello(); // "Hello from Prototype Instance"
