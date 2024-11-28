class Mediator {
    constructor() {
      this.colleagues = [];
    }
  
    addColleague(colleague) {
      this.colleagues.push(colleague);
      colleague.setMediator(this);
    }
  
    send(message, sender) {
      this.colleagues.forEach(colleague => {
        if (colleague !== sender) {
          colleague.receive(message);
        }
      });
    }
  }
  
  class Colleague {
    constructor(name) {
      this.name = name;
      this.mediator = null;
    }
  
    setMediator(mediator) {
      this.mediator = mediator;
    }
  
    send(message) {
      console.log(`${this.name} sends: ${message}`);
      this.mediator.send(message, this);
    }
  
    receive(message) {
      console.log(`${this.name} receives: ${message}`);
    }
  }
  
  // Usage
  const mediator = new Mediator();
  const colleague1 = new Colleague("Colleague1");
  const colleague2 = new Colleague("Colleague2");
  
  mediator.addColleague(colleague1);
  mediator.addColleague(colleague2);
  
  colleague1.send("Hello, Colleague2!");
  colleague2.send("Hi, Colleague1!");
  