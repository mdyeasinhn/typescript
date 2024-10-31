//Reference Type --> Object
{
    const user: {
        firstName: string;
        middleName?: string; // Optional type
        lastName: string;
        isMarried:boolean;
        institute : "Programing hero"; // and Literal Types
        readonly age : number;  // can't change 
    } = {
        firstName: 'Yeasin',
        middleName: 'Arafat',
        lastName: 'Enan',
        institute: "Programing hero",
        isMarried : false,
        age : 21,
    }
    
    // user.age = "32" 
    
    }