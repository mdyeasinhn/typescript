{
    // Class and object

    class Animal {
        // public name: string;
        // public species: string;
        // public sound: string;

        constructor(public name: string,public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }

    }

    const dog = new Animal("german", 'dog', 'Ghew Ghew');
    const cat = new Animal('Yeasin BRO ', 'cat', 'meaw meaw')

    dog.makeSound()






    //
}