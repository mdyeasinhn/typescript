{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: 'Yeasin',
        age: 33,
        gender: 'male',
        contactNo: '5465476123165432',
        address: 'Boalkhali'
    }
    const student2: Student = {
        name: 'Arafat',
        age: 323,
        gender: 'male',
        contactNo: '5465476123165432',
        address: 'ctg'
    }
    const student3: Student = {
        name: 'Enan',
        age: 44,
        gender: 'male',
        contactNo: '5465476123165432',
        address: 'dhk'
    }


    
    type UserName = string
    type IsAdmin = boolean

    const userName: UserName = 'Yeasin'
    const isAdmin: IsAdmin = true 



    type Add = (num1:number, num2:number) => number;

    const add : Add = (num1 , num2) => num1 + num2;





}