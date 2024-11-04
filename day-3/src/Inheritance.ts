{
    //Inheritance

    //
}{
    // Class and object

    class Person {
        name: string;
         age: number;
         address: string;

        constructor( name: string,age: number, address: string) {
             this.name = name;
             this.age = age;
             this.address = address;
        }
        getSleep(numberOfHours: number) {
            console.log(` ${this.name} will sleep for ${numberOfHours}`);
        }
    }

    class Student extends Person {
        //  name: string;
        //  age: number;
        //  address: string;

        constructor( name: string,age: number, address: string) {
            //  this.name = name;
            //  this.age = age;
            //  this.address = address;
            super(name, age, address)
        }
        // getSleep(numberOfHours: number) {
        //     console.log(` ${this.name} will sleep for ${numberOfHours}`);
        // }
    }

    const studet1 = new Student("Mr. x", 30, 'Ghew Ghew');
   // studet1.


    class Teacher extends Person {
        // name: string;
        // age: number;
        // address: string;
        designation : string;

       constructor( name: string,age: number, address: string, designation: string) {
            // this.name = name;
            // this.age = age;
            // this.address = address;
            super(name, age, address)
            this.designation = designation;
       }
    //    getSleep(numberOfHours: number) {    --> get to parent
    //        console.log(` ${this.name} will sleep for ${numberOfHours}`);
    //    }

       takeClass(numOfClass: string){
        console.log(` ${this.name} will take ${numOfClass}`);
       }
   }

   const teacher = new Teacher("Mr. x", 50, 'Bangladesh', 'Progaram');
 //  teacher.






    //
}