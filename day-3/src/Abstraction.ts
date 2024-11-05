// Abstraction in OOP

// Interface defining the abstraction
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}

// Real implementation of the interface
class Car1 implements Vehicle1 {
    startEngine(): void {
        console.log(`I am starting the car engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the car engine`);
    }
    move(): void {
        console.log(`I am moving the car`);
    }
    test(): void {
        console.log(`I am testing the car`);
    }
}

const toyotaCar = new Car1();
toyotaCar.startEngine();

// Abstract class defining a blueprint for cars
abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void {
        console.log(`I am testing the car`);
    }
}

// Class extending the abstract Car2 class and implementing its methods
class ToyotaCar extends Car2 {
    startEngine(): void {
        console.log(`I am starting the Toyota car engine`);
    }
    stopEngine(): void {
        console.log(`I am stopping the Toyota car engine`);
    }
    move(): void {
        console.log(`I am moving the Toyota car`);
    }
}

const toyotaCar2 = new ToyotaCar();
toyotaCar2.startEngine();
toyotaCar2.test();
