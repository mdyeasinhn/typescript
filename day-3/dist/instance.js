"use strict";
{
    //Type guard using instance of
    class Animal {
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log('make a sound ');
        }
    }
    class Dog extends Animal {
        constructor(name, species, sound) {
            super(name, species, sound);
        }
        makeBark() {
            console.log('I am  barking');
        }
    }
    class Cat extends Animal {
        constructor(name, species, sound) {
            super(name, species, sound);
        }
        makeMeaw() {
            console.log('I am  meawing');
        }
    }
    // instance handle smart way with function 
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAanimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark;
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog('dog vai ', 'dog', 'bark bark');
    const cat = new Cat('cat vai ', 'cat', 'Meaw meaw');
    getAanimal(dog);
    //
}
