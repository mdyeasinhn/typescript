{
    //Utility type
    // Pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, 'name' | 'age' | 'email' | 'contactNo'>;

    // Omit 
    type ContactInfo = Omit<Person, 'name' | 'age'>

    // Required
    type PersonRequired = Required<Person>;

    // Pertial 
    type PersonPertial = Partial<Person>;

    //ReadOnly 
    type PersonReadonly = Readonly<Person>;

    const person1: PersonReadonly = {
        name: 'Mr. Yeasin',
        age: 200,
        contactNo: '34343',
    };

    // person1.age = 34

    // Record 
    //    type MyObj = {
    //     a : 'aa';
    //     b : Blob;
    //    }
    type MyObj = Record<string, number>;

    const EmptyObj: Record<string, unknown> = {}   // Empty  object

    const obj1: MyObj = {
        a: 45,
        b: 45,
    };


    //
}