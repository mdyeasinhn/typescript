"use strict";
// Polymorphism
class Person {
    getSleep() {
        console.log(`I am sleeping for 8 hours per day`);
    }
}
class Student extends Person {
    getSleep() {
        console.log(`I am sleeping for 7 hours per day`);
    }
}
class Developer extends Person {
    getSleep() {
        console.log(`I am sleeping for 6 hours per day`);
    }
}
const getSleepingHours = (param) => {
    param.getSleep();
};
const person1 = new Person();
const person2 = new Student();
const person3 = new Developer();
getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);
// Shape classes with polymorphism
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const getShapeArea = (param) => {
    console.log(param.getArea());
};
const shape1 = new Shape();
const shape2 = new Circle(34);
const shape3 = new Rectangle(23, 32);
getShapeArea(shape1);
getShapeArea(shape2);
getShapeArea(shape3);
