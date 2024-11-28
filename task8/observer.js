class Subject {
    constructor() {
      this.observers = [];
    }
  
    addObserver(observer) {
      this.observers.push(observer);
    }
  
    removeObserver(observer) {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    notifyObservers(message) {
      this.observers.forEach(observer => observer.update(message));
    }
  }
  
  class Observer {
    constructor(name) {
      this.name = name;
    }
  
    update(message) {
      console.log(`${this.name} received: ${message}`);
    }
  }
  
  // Usage
  const subject = new Subject();
  const observer1 = new Observer("Observer1");
  const observer2 = new Observer("Observer2");
  
  subject.addObserver(observer1);
  subject.addObserver(observer2);
  
  subject.notifyObservers("Event triggered!");
  