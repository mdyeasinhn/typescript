"use strict";
{
    //Inheritance
    //
}
{
    // Class and object
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numberOfHours) {
            console.log(` ${this.name} will sleep for ${numberOfHours}`);
        }
    }
    class Student extends Person {
        //  name: string;
        //  age: number;
        //  address: string;
        constructor(name, age, address) {
            //  this.name = name;
            //  this.age = age;
            //  this.address = address;
            super(name, age, address);
        }
    }
    const studet1 = new Student("Mr. x", 30, 'Ghew Ghew');
    // studet1.
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address);
            this.designation = designation;
        }
        //    getSleep(numberOfHours: number) {    --> get to parent
        //        console.log(` ${this.name} will sleep for ${numberOfHours}`);
        //    }
        takeClass(numOfClass) {
            console.log(` ${this.name} will take ${numOfClass}`);
        }
    }
    const teacher = new Teacher("Mr. x", 50, 'Bangladesh', 'Progaram');
    //  teacher.
    //
}
