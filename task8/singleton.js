class Singleton {
    constructor(name) {
      if (Singleton.instance) {
        return Singleton.instance;
      }
      this.name = name;
      Singleton.instance = this;
    }
  
    getName() {
      return this.name;
    }
  }
  
  // Usage
  const singletonA = new Singleton("First Instance");
  const singletonB = new Singleton("Second Instance");
  
  console.log(singletonA === singletonB); // true
  console.log(singletonB.getName()); // "First Instance"
  