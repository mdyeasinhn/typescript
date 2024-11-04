{
    //Type guard using instance of

    class Animal {
        name: string;
        species: string;
        sound: string;

        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }
        makeSound() {
            console.log('make a sound ');
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string, sound: string) {
            super(name, species, sound)
        }
        makeBark() {
            console.log('I am  barking');
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string, sound: string) {
            super(name, species, sound)
        }
        makeMeaw() {
            console.log('I am  meawing');
        }
    }

    // instance handle smart way with function 
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat
    }

    const getAanimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark
        } else if (isCat(animal)) {
            animal.makeMeaw()
        } else {
            animal.makeSound()
        }
    }

    const dog = new Dog('dog vai ', 'dog', 'bark bark')
    const cat = new Cat('cat vai ', 'cat', 'Meaw meaw')

    getAanimal(dog);





    //
}