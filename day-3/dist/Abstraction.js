"use strict";
// Abstraction in OOP
// Real implementation of the interface
class Car1 {
    startEngine() {
        console.log(`I am starting the car engine`);
    }
    stopEngine() {
        console.log(`I am stopping the car engine`);
    }
    move() {
        console.log(`I am moving the car`);
    }
    test() {
        console.log(`I am testing the car`);
    }
}
const toyotaCar = new Car1();
toyotaCar.startEngine();
// Abstract class defining a blueprint for cars
class Car2 {
    test() {
        console.log(`I am testing the car`);
    }
}
// Class extending the abstract Car2 class and implementing its methods
class ToyotaCar extends Car2 {
    startEngine() {
        console.log(`I am starting the Toyota car engine`);
    }
    stopEngine() {
        console.log(`I am stopping the Toyota car engine`);
    }
    move() {
        console.log(`I am moving the Toyota car`);
    }
}
const toyotaCar2 = new ToyotaCar();
toyotaCar2.startEngine();
toyotaCar2.test();
