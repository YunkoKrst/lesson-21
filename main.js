

function Vehicle (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

Vehicle.prototype.getInfo = function () {
    return `Транспортний засіб: ${this.make} ${this.model} ${this.year} `;
}

function Car(make, model, year, numDoors) {
    Vehicle.call(this, make, model, year); 
    this.numDoors = numDoors;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


Car.prototype.getNumDoors = function() {
    return `Кількість дверей: ${this.numDoors}`;
};

function Bicycle(make, model, year, gearNumber) {
    Vehicle.call(this, make, model, year); 
    this.gearNumber = gearNumber;
}

Bicycle.prototype = Object.create(Vehicle.prototype);
Bicycle.prototype.constructor = Bicycle;


Bicycle.prototype.getGearNumber = function() {
    return `Кількість передач: ${this.gearNumber}`;
};



const myCar = new Car('Toyota', 'Camry', 2020, 4);
const myBicycle = new Bicycle('Giant', 'Defy', 2019, 21);


console.log(myCar.getInfo()); 
console.log(myBicycle.getInfo());
console.log(myCar.getNumDoors()); 
console.log(myBicycle.getGearNumber()); 