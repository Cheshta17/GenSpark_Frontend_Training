class Car {
    constructor(model, speed) {
      this.model = model;
      this.speed = speed;
    }
  }
  
  class CarFactory {
    static createCar(type) {
      switch (type) {
        case 'sports':
          return new Car('Sports Car', 300);
        case 'sedan':
          return new Car('Sedan', 180);
        default:
          return new Car('Standard Car', 100);
      }
    }
  }
  

  const sportsCar = CarFactory.createCar('sports');
  console.log(sportsCar); // Car { model: 'Sports Car', speed: 300 }
  